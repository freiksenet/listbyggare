import { EventEmitter } from "events";
import { isRight } from "fp-ts/lib/These";
import { PathReporter } from "io-ts/PathReporter";

import { DataSetRepository } from "../data";
import { List } from "../fleets/List";
import { SerializedListCodec } from "../fleets/serialized";

export interface IStorage extends EventEmitter {
  getAll(): Array<List>;

  getById(id: string): List | null;

  set(id: string, list: List): void;

  delete(id: string): void;
}

const LOCAL_STORAGE_LIST_KEY = "listbyggare_lists";
const LOCAL_STORAGE_ITEM_KEY = "listbyggare_list";

export class LocalStorage extends EventEmitter implements IStorage {
  dataSetRepository: DataSetRepository;
  listIds: Array<string>;
  lists: Map<string, List>;

  constructor(dataSetRepository: DataSetRepository) {
    super();

    this.dataSetRepository = dataSetRepository;

    let listsSerialized = window.localStorage.getItem(LOCAL_STORAGE_LIST_KEY);
    let listIds: Array<string>;
    if (!listsSerialized) {
      listIds = [];
    } else {
      listIds = JSON.parse(listsSerialized);
    }

    let lists: Map<string, List> = new Map();
    for (let id of listIds) {
      let listSerialized = window.localStorage.getItem(
        `${LOCAL_STORAGE_ITEM_KEY}_${id}`,
      );
      if (listSerialized) {
        let listSerializedValidation = SerializedListCodec.decode(
          JSON.parse(listSerialized),
        );
        if (isRight(listSerializedValidation)) {
          lists.set(
            listSerializedValidation.right.id,
            List.load(this.dataSetRepository, listSerializedValidation.right),
          );
        } else {
          console.log(PathReporter.report(listSerializedValidation));
        }
      }
    }

    this.listIds = listIds;
    this.lists = lists;
    this.saveToLocalStorage();
  }

  getAll(): Array<List> {
    let lists = [];
    for (let listId of this.listIds) {
      let list = this.lists.get(listId);
      if (list) {
        lists.push(list);
      }
    }
    return lists;
  }

  getById(id: string): List | null {
    return this.lists.get(id) || null;
  }

  set(id: string, list: List): void {
    this.lists.set(id, list);
    if (this.listIds.indexOf(id) < 0) {
      this.listIds.push(id);
    }
    window.setTimeout(() => {
      this.saveToLocalStorage();
    }, 0);
    this.emit("change");
  }

  delete(id: string): void {
    let index = this.listIds.indexOf(id);
    if (index >= 0) {
      this.listIds.splice(index, 1);
    }
    this.lists.delete(id);
    window.setTimeout(() => {
      window.localStorage.removeItem(`${LOCAL_STORAGE_ITEM_KEY}_${id}`);
      this.saveToLocalStorage();
    }, 0);
    this.emit("change");
  }

  saveToLocalStorage() {
    let listIds = this.listIds;
    for (let id of listIds) {
      let list = this.lists.get(id);
      if (list) {
        window.localStorage.setItem(
          `${LOCAL_STORAGE_ITEM_KEY}_${id}`,
          JSON.stringify(list.serialize()),
        );
      }
    }
    window.localStorage.setItem(
      LOCAL_STORAGE_LIST_KEY,
      JSON.stringify(listIds),
    );
  }
}
