import { uniq, intersection } from "lodash";

import { DataSetRepository } from "../data";
import { IShip, IFleetCommander, DataSet, IFleet } from "./Data";
import {
  SerializedList,
  SerializedSelection,
  SerializedFleetCommander,
  SerializedShip,
  SerializedSquadron,
} from "./serialized";

export class List {
  id: string;
  version: string;
  name: string | null;
  dataSet: DataSet | null;
  fleet: IFleet | null;
  pointLimit: number | null;
  selections: Map<string, Selection>;

  constructor({
    id,
    name,
    dataSet,
    fleet,
    pointLimit,
    selections,
  }: {
    id: string;
    name?: string | null;
    dataSet?: DataSet | null;
    fleet?: IFleet | null;
    pointLimit?: number | null;
    selections?: Array<Selection>;
  }) {
    this.version = "1";
    this.id = id;
    this.name = name || null;
    this.dataSet = dataSet || null;
    this.pointLimit = pointLimit || null;
    this.fleet = fleet || null;
    this.selections = new Map();
    if (selections) {
      for (let selection of selections) {
        this.selections.set(selection.id, selection);
      }
    }
  }

  addSelection(selection: Selection): string {
    this.selections.set(selection.id, selection);
    return selection.id;
  }

  removeSelection(id: string) {
    if (this.selections.has(id)) {
      this.selections.delete(id);
      return true;
    } else {
      return false;
    }
  }

  getAllSelections(): Array<Selection> {
    return Array.from(this.selections.values());
  }

  getSelectionsByTags(tags: Array<string>): Array<Selection> {
    let result = [];
    for (let selection of this.selections.values()) {
      let selectionTags = selection.getTags();
      if (tags.length === intersection(tags, selectionTags).length) {
        result.push(selection);
      }
    }
    return result;
  }

  getPoints() {
    let result = 0;
    for (let selection of this.selections.values()) {
      result += selection.getPoints();
    }
    return result;
  }

  serialize(): SerializedList {
    return {
      id: this.id,
      version: this.version,
      name: this.name,
      dataSet: this.dataSet
        ? {
            name: this.dataSet.name,
            version: this.dataSet.version,
          }
        : null,
      fleetId: this.fleet?.id || null,
      pointLimit: this.pointLimit,
      selections: this.getAllSelections().map((selection) =>
        selection.serialize(),
      ),
    };
  }

  static load(
    dataSetRepository: DataSetRepository,
    data: SerializedList,
  ): List {
    let dataSet = null;
    let fleet = null;
    let selections = [];

    if (data.dataSet) {
      dataSet = dataSetRepository.getDataSet(
        data.dataSet.name,
        data.dataSet.version,
      );
      if (!dataSet) {
        throw new Error(
          `Unknown data set: ${data.dataSet.name} (version ${data.dataSet.version})`,
        );
      }

      if (data.fleetId) {
        fleet = dataSet.getSelectableById(data.fleetId);
        if (!fleet) {
          throw new Error(
            "Unknown selectable: ${data.selectableId} not found in ${data.dataSet.name} (version ${data.dataSet.version}).",
          );
        } else if (fleet.type !== "FLEET") {
          throw new Error(
            "Invalid selectable: ${data.selectableId} should be 'FLEET', ${commander.type} found in ${data.dataSet.name} (version ${data.dataSet.version}).",
          );
        }
      }

      for (let selection of data.selections) {
        if (selection.type === "FLEET COMMANDER") {
          selections.push(FleetCommanderSelection.load(dataSet, selection));
        } else if (selection.type === "SHIP") {
          selections.push(ShipSelection.load(dataSet, selection));
        } else if (selection.type === "SQUADRON") {
          selections.push(SquadronSelection.load(dataSet, selection));
        }
      }
    }

    return new List({
      id: data.id,
      name: data.name,
      dataSet,
      fleet,
      pointLimit: data.pointLimit,
      selections,
    });
  }
}

export interface ISelection {
  id: string;
  getPoints(): number;
  getTags(): Array<string>;
  serialize(): SerializedSelection;
  // static load(
  //   dataSet: DataSet,
  //   data: ISerializedSelection | ISerializedSquadron,
  // ): ISelection;
}

export type Selection =
  | FleetCommanderSelection
  | ShipSelection
  | SquadronSelection;

export interface SelectionOptions {
  [id: string]: string;
}

export class FleetCommanderSelection implements ISelection {
  type: "FLEET COMMANDER" = "FLEET COMMANDER";

  id: string;
  commander: IFleetCommander;
  options: SelectionOptions;

  constructor({
    id,
    commander,
    options,
  }: {
    id: string;
    commander: IFleetCommander;
    options: SelectionOptions;
  }) {
    this.id = id;
    this.commander = commander;
    this.options = options;
  }

  getPoints(): number {
    return getPointsForSingleSelection(this.commander, this.options);
  }

  getTags(): Array<string> {
    return uniq(this.commander.tags);
  }

  serialize(): SerializedFleetCommander {
    return {
      type: "FLEET COMMANDER",
      id: this.id,
      selectableId: this.commander.id,
      options: this.options,
    };
  }

  static load(
    dataSet: DataSet,
    data: SerializedFleetCommander,
  ): FleetCommanderSelection {
    let commander = dataSet.getSelectableById(data.selectableId);
    if (!commander) {
      throw new Error(
        "Unknown selectable: ${data.selectableId} not found in ${data.dataSet.name} (version ${data.dataSet.version}).",
      );
    } else if (commander.type !== "FLEET COMMANDER") {
      throw new Error(
        "Invalid selectable: ${data.selectableId} should be 'FLEET COMMANDER', ${commander.type} found in ${data.dataSet.name} (version ${data.dataSet.version}).",
      );
    }
    return new FleetCommanderSelection({
      id: data.id,
      commander,
      options: data.options,
    });
  }
}

// export interface ISecondaryCommanderSelection extends ISelection {
//   type: "SECONDARY COMMANDER";
// }

export class ShipSelection implements ISelection {
  type: "SHIP" = "SHIP";

  id: string;
  ship: IShip;
  options: SelectionOptions;

  constructor({
    id,
    ship,
    options,
  }: {
    id: string;
    ship: IShip;
    options: SelectionOptions;
  }) {
    this.id = id;
    this.ship = ship;
    this.options = options;
  }

  getPoints(): number {
    return getPointsForSingleSelection(this.ship, this.options);
  }

  getTags(): Array<string> {
    return uniq(this.ship.tags);
  }

  serialize(): SerializedShip {
    return {
      type: "SHIP",
      id: this.id,
      selectableId: this.ship.id,
      options: this.options,
    };
  }

  static load(dataSet: DataSet, data: SerializedShip): ShipSelection {
    let ship = dataSet.getSelectableById(data.selectableId);
    if (!ship) {
      throw new Error(
        "Unknown selectable: ${data.selectableId} not found in ${data.dataSet.name} (version ${data.dataSet.version}).",
      );
    } else if (ship.type !== "SHIP") {
      throw new Error(
        "Invalid selectable: ${data.selectableId} should be 'SHIP', ${commander.type} found in ${data.dataSet.name} (version ${data.dataSet.version}).",
      );
    }
    return new ShipSelection({
      id: data.id,
      ship,
      options: data.options,
    });
  }
}

export class SquadronSelection implements ISelection {
  type: "SQUADRON" = "SQUADRON";

  id: string;
  ships: Array<ShipSelection>;

  constructor({ id, ships }: { id: string; ships: Array<ShipSelection> }) {
    this.id = id;
    this.ships = ships;
  }

  getPoints() {
    return this.ships.reduce((total, ship) => total + ship.getPoints(), 0);
  }

  getTags(): Array<string> {
    let tags = ["SQUADRON"];
    for (let ship of this.ships) {
      tags.push(...ship.getTags());
    }
    return uniq(tags);
  }

  serialize(): SerializedSquadron {
    return {
      type: "SQUADRON",
      id: this.id,
      ships: this.ships.map((ship) => ship.serialize()),
    };
  }

  static load(dataSet: DataSet, data: SerializedSquadron): SquadronSelection {
    let ships = data.ships.map((ship) => ShipSelection.load(dataSet, ship));
    return new SquadronSelection({
      id: data.id,
      ships,
    });
  }
}

function getPointsForSingleSelection(
  data: IShip | IFleetCommander,
  options: SelectionOptions,
) {
  let points = data.points;
  for (let loadout of data.loadout) {
    if (typeof loadout !== "string" && loadout.type === "OPTION") {
      let id = loadout.id;
      let option = options[id];
      let selected;
      if (!option) {
        selected = loadout.options[0];
      } else {
        selected = loadout.options.find(
          (loadoutOption) => loadoutOption.id === option,
        );
      }
      if (selected && selected.type === "LOADOUT OPTION") {
        points += selected.points || 0;
      }
    }
  }
  return points;
}
