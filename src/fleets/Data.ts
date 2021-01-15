import { intersection } from "lodash";

import { List } from "./List";

export type Selectable = IShip | IFleet | IFleetCommander;

export class DataSet {
  name: string;
  version: string;
  private contentMap: Map<string, Selectable>;

  constructor({
    name,
    version,
    contents,
  }: {
    name: string;
    version: string;
    contents: Array<Selectable>;
  }) {
    this.name = name;
    this.version = version;

    this.contentMap = new Map();
    for (let content of contents) {
      this.contentMap.set(content.id, content);
    }
  }

  getAllSelectables() {
    return Array.from(this.contentMap.values());
  }

  getSelectableById(id: string): Selectable | null {
    return this.contentMap.get(id) || null;
  }

  getSelectableByType(type: string): Array<Selectable> {
    let result: Array<Selectable> = [];
    for (let selectable of this.contentMap.values()) {
      if (type === selectable.type) {
        result.push(selectable);
      }
    }
    return result;
  }

  getSelectableByTypes(types: Array<string>): Array<Selectable> {
    let result: Array<Selectable> = [];
    for (let selectable of this.contentMap.values()) {
      if (types.includes(selectable.type)) {
        result.push(selectable);
      }
    }
    return result;
  }

  getSelectablesByTags(tags: Array<string>): Array<Selectable> {
    let result = [];
    for (let selectable of this.contentMap.values()) {
      let selectionTags = selectable.tags;
      if (tags.length === intersection(tags, selectionTags).length) {
        result.push(selectable);
      }
    }
    return result;
  }
}

export interface IFleet {
  type: "FLEET";
  id: string;
  name: string;
  tags: Array<string>;
  profile: IFleetProfile;
  rules: Array<ICondition>;
  selections: Array<ISelectable>;
}

export interface ICondition {
  type: "CONDITION";
  text: string;
  condition: (list: List) => boolean;
}

export interface ISelectable {
  name: string;
  selection: Array<string>;
  rules: Array<SelectableRule>;
}

export type SelectableRule = ILimitRule | ISquadronRule | ICondition;

export interface ILimitRule {
  type: "LIMIT";
  min?: number;
  max: number;
}

export interface ISquadronRule {
  type: "SQUADRON";
  minMembers: number;
  maxMembers: number;
}

export interface IFleetProfile {
  attackRating: number;
}

export interface IFleetCommander {
  type: "FLEET COMMANDER";
  id: string;
  name: string;
  tags: Array<string>;
  points: number;
  profile: IFleetCommanderProfile;
  loadout: Array<Loadout>;
}

export interface IFleetCommanderProfile {
  leadership: number;
  rerolls: number;
}

export interface IShip {
  type: "SHIP";
  id: string;
  name: string;
  tags: Array<string>;
  points: number;
  profile: IShipProfile;
  loadout: Array<Loadout>;
}

export type Loadout =
  // | string
  IShipArnamentLoadout | ISpecialRule | ILoadoutOption;

export interface IShipProfile {
  hits: number;
  speed: number;
  turns: number;
  shields: number;
  armor: number;
  turrets: number;
}

export interface ISpecialRule {
  type: "SPECIAL RULE";
  id?: string;
  tags: Array<string>;
  name: string;
  text: string;
}

export interface IShipArnamentLoadout {
  type: "ARMAMENT";
  name: string;
  profile: ShipArnament;
}

export type ShipArnament = IConventionalArnament | ITorpedoes | ILaunchBays;

export interface IConventionalArnament {
  type: "WEAPONS BATTERY" | "LANCE" | "NOVA CANNON" | "BOMBARDMENT CANNON";
  range: number | { min: number; max: number };
  firepower: number;
  fireArc: Array<FIRE_ARC>;
}

export interface ITorpedoes {
  type: "TORPEDOES";
  ordnance: Array<string>;
  speed: number;
  strength: number;
  fireArc: Array<FIRE_ARC>;
}

export interface ILaunchBays {
  type: "LAUNCH BAYS";
  ordnance: Array<{ name: string; speed: number }>;
  squadrons: number;
}

export interface ILoadoutOption {
  type: "OPTION";
  id: string;
  name: string;
  options: Array<IEmptyLoadoutOption | INonEmptyLoadoutOption>;
}

export interface IEmptyLoadoutOption {
  type: "EMPTY OPTION";
  id?: string;
  name?: string;
}

export interface INonEmptyLoadoutOption {
  type: "LOADOUT OPTION";
  id: string;
  name?: string;
  points: number;
  loadouts: Array<Loadout>;
}

export enum FIRE_ARC {
  LEFT = "left",
  RIGHT = "right",
  FRONT = "front",
  REAR = "REAR",
}
