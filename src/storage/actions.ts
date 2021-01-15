import uuid from "short-uuid";

import { IStorage } from "./Storage";
import { DataSetRepository } from "../data";
import {
  FleetCommanderSelection,
  List,
  Selection,
  ShipSelection,
} from "../fleets/List";
import { IFleetCommander, IShip } from "../fleets/Data";

export interface IActionContext {
  storage: IStorage;
  dataSetRepository: DataSetRepository;
}

export function createList({
  storage,
  dataSetRepository,
}: IActionContext): List {
  let id = uuid.generate();
  let list = new List({
    id,
    dataSet: dataSetRepository.getDataSet("Battlefleet Gothic: XR", "2021.1"),
  });
  storage.set(id, list);
  return list;
}

export function deleteList(
  { storage }: IActionContext,
  { id }: { id: string },
): void {
  storage.delete(id);
}

export function updateList(
  { storage }: IActionContext,
  {
    id,
    name,
    fleetId,
    pointLimit,
  }: { id: string } & Partial<{
    name?: string;
    fleetId?: string;
    pointLimit?: number;
  }>,
): List | null {
  let list = storage.getById(id);
  if (!list) {
    return null;
  } else {
    if (name) {
      list.name = name;
    }
    if (fleetId) {
      let fleet = list.dataSet?.getSelectableById(fleetId);
      if (fleet && fleet.type === "FLEET") {
        list.fleet = fleet;
      }
    }
    if (pointLimit) {
      list.pointLimit = pointLimit;
    }
    storage.set(id, list);
    return list;
  }
}

export function addSelectionToList(
  { storage }: IActionContext,
  {
    id,
    selectable,
  }: {
    id: string;
    selectable: IShip | IFleetCommander;
  },
): Selection | null {
  let selectionId = uuid.generate();
  let selection: Selection | null;
  if (selectable.type === "FLEET COMMANDER") {
    selection = new FleetCommanderSelection({
      id: selectionId,
      commander: selectable,
      options: {},
    });
  } else {
    selection = new ShipSelection({
      id: selectionId,
      ship: selectable,
      options: {},
    });
  }
  let list = storage.getById(id);
  if (!list) {
    return null;
  } else {
    list.addSelection(selection);
    storage.set(id, list);
  }
  return selection;
}

export function deleteSelectionFromList(
  { storage }: IActionContext,
  {
    id,
    selectionId,
  }: {
    id: string;
    selectionId: string;
  },
): void {
  let list = storage.getById(id);
  if (list) {
    list.removeSelection(selectionId);
    storage.set(id, list);
  }
}
