import {
  IShip,
  FIRE_ARC,
  IFleet,
  IFleetCommander,
  ISpecialRule,
} from "../../fleets/Data";

const THUNDERHAWKS = { name: "THUNDERHAWKS", speed: 20 };

const PONDEROUS: ISpecialRule = {
  tags: ["PONDEROUS"],
  name: "Ponderous",
  type: "SPECIAL RULE",
  text:
    "This ship is ponderous and cannot use Come to New Heading special orders.",
};

const ULTIMA_CLASS_BATTLE_BARGE: IShip = {
  type: "SHIP",
  id: "ULTIMA CLASS BATTLE BARGE",
  name: "Ultima Class Battle Barge",
  tags: [
    "SPACE MARINE",
    "BATTLESHIP",
    "CAPITAL",
    "BATTLE BARGE",
    "ULTIMA CLASS BATTLE BARGE",
  ],
  points: 450,
  profile: {
    hits: 12,
    speed: 20,
    turns: 45,
    shields: 4,
    armor: 6,
    turrets: 4,
  },
  loadout: [
    PONDEROUS,
    {
      type: "ARMAMENT",
      name: "Port Bombardment Cannon",
      profile: {
        type: "BOMBARDMENT CANNON",
        range: 30,
        firepower: 8,
        fireArc: [FIRE_ARC.LEFT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Starboard Bombardment Cannon",
      profile: {
        type: "BOMBARDMENT CANNON",
        range: 30,
        firepower: 8,
        fireArc: [FIRE_ARC.RIGHT],
      },
    },
    {
      name: "Dorsal Bombardment Cannon",
      type: "ARMAMENT",
      profile: {
        type: "BOMBARDMENT CANNON",
        range: 30,
        firepower: 8,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
    {
      name: "Prow Launch Bays",
      type: "ARMAMENT",
      profile: {
        type: "LAUNCH BAYS",
        ordnance: [THUNDERHAWKS],
        squadrons: 2,
      },
    },
    {
      type: "OPTION",
      id: "PROW TORPEDOES",
      name: "Prow Torpedoes",
      options: [
        {
          type: "LOADOUT OPTION",
          id: "TORPEDOES",
          points: 0,
          loadouts: [
            {
              type: "ARMAMENT",
              name: "Prow Torpedoes",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["torpedoes", "boarding torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "SHORT BURN TORPEDOES",
          points: 10,
          loadouts: [
            {
              name: "Prow Short-burn Torpedoes",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["short-burn torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "BARRAGE BOMBS",
          points: 15,
          loadouts: [
            {
              name: "Prow Barrage Bombs",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["barrage bombs"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
      ],
    },
  ],
};

const SPACE_MARINE_BATTLE_BARGE: IShip = {
  type: "SHIP",
  id: "SPACE MARINE BATTLE BARGE",
  name: "Space Marine Battle Barge",
  tags: [
    "SPACE MARINE",
    "BATTLESHIP",
    "CAPITAL",
    "BATTLE BARGE",
    "SPACE MARINE BATTLE BARGE",
  ],
  points: 425,
  profile: {
    hits: 12,
    speed: 20,
    turns: 45,
    shields: 4,
    armor: 6,
    turrets: 4,
  },
  loadout: [
    PONDEROUS,
    {
      type: "ARMAMENT",
      name: "Port Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 45,
        firepower: 12,
        fireArc: [FIRE_ARC.LEFT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Starboard Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 45,
        firepower: 12,
        fireArc: [FIRE_ARC.RIGHT],
      },
    },
    {
      name: "Dorsal Bombardment Cannon",
      type: "ARMAMENT",
      profile: {
        type: "BOMBARDMENT CANNON",
        range: 30,
        firepower: 8,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
    {
      name: "Prow Launch Bays",
      type: "ARMAMENT",
      profile: {
        type: "LAUNCH BAYS",
        ordnance: [THUNDERHAWKS],
        squadrons: 3,
      },
    },
    {
      type: "OPTION",
      id: "PROW TORPEDOES",
      name: "Prow Torpedoes",
      options: [
        {
          type: "LOADOUT OPTION",
          id: "TORPEDOES",
          points: 0,
          loadouts: [
            {
              type: "ARMAMENT",
              name: "Prow Torpedoes",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["torpedoes", "boarding torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "SHORT BURN TORPEDOES",
          points: 10,
          loadouts: [
            {
              name: "Prow Short-burn Torpedoes",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["short-burn torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "BARRAGE BOMBS",
          points: 15,
          loadouts: [
            {
              name: "Prow Barrage Bombs",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["barrage bombs"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
      ],
    },
  ],
};

const SPACE_MARINE_STRIKE_CRUISER: IShip = {
  type: "SHIP",
  id: "SPACE MARINE STRIKE CRUISER",
  name: "Space Marine Strike Cruiser",
  tags: ["SPACE MARINE", "CAPITAL", "CRUISER", "SPACE MARINE STRIKE CRUISER"],
  points: 145,
  profile: {
    hits: 6,
    speed: 25,
    turns: 90,
    shields: 1,
    armor: 6,
    turrets: 2,
  },
  loadout: [
    {
      id: "SECONDARY SHIELD",
      type: "OPTION",
      name: "Secondary Shield",
      options: [
        {
          type: "EMPTY OPTION",
        },
        {
          type: "LOADOUT OPTION",
          id: "SECONDARY SHIELD",
          points: 15,
          loadouts: [
            {
              type: "SPECIAL RULE",
              name: "Secondary Shield",
              tags: ["SPACE MARINE", "SECONDARY SHIELD"],
              text:
                "Ship may purchase an additional shield (incleasing their shields value by +1).",
            },
          ],
        },
      ],
    },
    {
      id: "PORT STARBOARD ARMAMENTS",
      type: "OPTION",
      name: "Port / Starboard Armaments",
      options: [
        {
          type: "LOADOUT OPTION",
          id: "WEAPON BATTERIES",
          name: "Port / Starboard Weapon Batteries",
          points: 0,
          loadouts: [
            {
              name: "Port Weapons Battery",
              type: "ARMAMENT",
              profile: {
                type: "WEAPONS BATTERY",
                range: 30,
                firepower: 4,
                fireArc: [FIRE_ARC.LEFT],
              },
            },
            {
              name: "Starboard Weapons Battery",
              type: "ARMAMENT",
              profile: {
                type: "WEAPONS BATTERY",
                range: 30,
                firepower: 4,
                fireArc: [FIRE_ARC.RIGHT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "LAUNCH BAYS",
          name: "Port / Starboard Launch Bays",
          points: 20,
          loadouts: [
            {
              name: "Port Launch Bays",
              type: "ARMAMENT",
              profile: {
                type: "LAUNCH BAYS",
                ordnance: [THUNDERHAWKS],
                squadrons: 1,
              },
            },
            {
              name: "Starboard Launch Bays",
              type: "ARMAMENT",
              profile: {
                type: "LAUNCH BAYS",
                ordnance: [THUNDERHAWKS],
                squadrons: 1,
              },
            },
          ],
        },
      ],
    },
    {
      id: "PROW ARMAMENT",
      type: "OPTION",
      name: "Prow Armament",
      options: [
        {
          type: "LOADOUT OPTION",
          id: "BOMBARDMENT CANNON",
          points: 0,
          loadouts: [
            {
              type: "ARMAMENT",
              name: "Prow Launch Bays",
              profile: {
                type: "LAUNCH BAYS",
                ordnance: [THUNDERHAWKS],
                squadrons: 2,
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "BOMBARDMENT CANNON",
          points: 10,
          loadouts: [
            {
              type: "ARMAMENT",
              name: "Prow Bombardment Cannon",
              profile: {
                type: "BOMBARDMENT CANNON",
                range: 30,
                firepower: 5,
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "TORPEDOES",
          points: 0,
          loadouts: [
            {
              type: "ARMAMENT",
              name: "Prow Torpedoes",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["torpedoes", "boarding torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "SHORT BURN TORPEDOES",
          points: 5,
          loadouts: [
            {
              name: "Prow Short-burn Torpedoes",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["short-burn torpedoes"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "BARRAGE BOMBS",
          points: 10,
          loadouts: [
            {
              name: "Prow Barrage Bombs",
              type: "ARMAMENT",
              profile: {
                type: "TORPEDOES",
                strength: 6,
                speed: 30,
                ordnance: ["barrage bombs"],
                fireArc: [FIRE_ARC.FRONT],
              },
            },
          ],
        },
      ],
    },
  ],
};

const SPACE_MARINE_VANGUARD_CRUISER: IShip = {
  type: "SHIP",
  id: "SPACE MARINE VANGUARD CRUISER",
  name: "Space Marine Cruiser",
  tags: ["SPACE MARINE", "CAPITAL", "CRUISER", "SPACE MARINE VANGUARD CRUISER"],
  points: 130,
  profile: {
    hits: 6,
    speed: 25,
    turns: 90,
    shields: 1,
    armor: 6,
    turrets: 3,
  },
  loadout: [
    {
      type: "SPECIAL RULE",
      tags: ["SPACE MARINE", "IMPROVED THRUSTERS"],
      name: "Improved Thrusters",
      text:
        "Vanguard cruisers add an additional +1D6cm to their speed while on All Ahead Full special orders.",
    },
    {
      id: "SECONDARY SHIELD",
      type: "OPTION",
      name: "Secondary Shield",
      options: [
        {
          type: "EMPTY OPTION",
        },
        {
          type: "LOADOUT OPTION",
          id: "SECONDARY SHIELD",
          points: 15,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "SECONDARY SHIELD"],
              name: "Secondary Shield",
              text:
                "Ship may purchase an additional shield (incleasing their shields value by +1).",
            },
          ],
        },
      ],
    },
    {
      type: "ARMAMENT",
      name: "Port Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 30,
        firepower: 5,
        fireArc: [FIRE_ARC.LEFT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Starboard Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 30,
        firepower: 5,
        fireArc: [FIRE_ARC.RIGHT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Prow Torpedoes",
      profile: {
        type: "TORPEDOES",
        strength: 4,
        speed: 30,
        ordnance: ["torpedoes", "boarding torpedoes"],
        fireArc: [FIRE_ARC.FRONT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Prow Launch Bays",
      profile: {
        type: "LAUNCH BAYS",
        ordnance: [THUNDERHAWKS],
        squadrons: 1,
      },
    },
  ],
};

const NOVA_CLASS_FRIGATE: IShip = {
  type: "SHIP",
  id: "NOVA CLASS FRIGATE",
  name: "Nova Class Frigate",
  tags: ["SPACE MARINE", "ESCORT", "NOVA CLASS FRIGATE"],
  points: 45,
  profile: {
    hits: 1,
    speed: 35,
    turns: 90,
    shields: 1,
    armor: 5,
    turrets: 1,
  },
  loadout: [
    {
      type: "ARMAMENT",
      name: "Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 30,
        firepower: 2,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Lance",
      profile: {
        type: "LANCE",
        range: 30,
        firepower: 1,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
  ],
};

const GLADIUS_CLASS_FRIGATE: IShip = {
  type: "SHIP",
  id: "GLADIUS CLASS FRIGATE",
  name: "Gladius Class Frigate",
  tags: ["SPACE MARINE", "ESCORT", "GLADIUS CLASS FRIGATE"],
  points: 40,
  profile: {
    hits: 1,
    speed: 30,
    turns: 90,
    shields: 1,
    armor: 5,
    turrets: 1,
  },
  loadout: [
    {
      type: "ARMAMENT",
      name: "Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 30,
        firepower: 4,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
  ],
};

const HUNTER_CLASS_DESTROYER: IShip = {
  type: "SHIP",
  id: "HUNTER CLASS DESTROYER",
  name: "Gladius Class Frigate",
  tags: ["SPACE MARINE", "ESCORT", "HUNTER CLASS DESTROYER"],
  points: 40,
  profile: {
    hits: 1,
    speed: 35,
    turns: 90,
    shields: 1,
    armor: 5,
    turrets: 1,
  },
  loadout: [
    {
      type: "ARMAMENT",
      name: "Weapons Battery",
      profile: {
        type: "WEAPONS BATTERY",
        range: 30,
        firepower: 1,
        fireArc: [FIRE_ARC.LEFT, FIRE_ARC.FRONT, FIRE_ARC.RIGHT],
      },
    },
    {
      type: "ARMAMENT",
      name: "Prow Torpedoes",
      profile: {
        type: "TORPEDOES",
        strength: 2,
        speed: 30,
        ordnance: ["torpedoes", "boarding torpedoes"],
        fireArc: [FIRE_ARC.FRONT],
      },
    },
  ],
};

const SPACE_MARINE_MASTER_OF_THE_FLEET: IFleetCommander = {
  type: "FLEET COMMANDER",
  id: "SPACE MARINE MASTER OF THE FLEET",
  name: "Master of the Fleet",
  tags: ["FLEET COMMANDER", "SPACE MARINE", "SPACE MARINE MASTER OF THE FLEET"],
  points: 50,
  profile: {
    leadership: 10,
    rerolls: 0,
  },
  loadout: [
    {
      id: "CHAPTER TACTICS",
      type: "OPTION",
      name: "Chapter Tactics",
      options: [
        {
          type: "LOADOUT OPTION",
          id: "TACTICAL FLEXIBILITY",
          points: 0,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "TACTICAL FLEXIBILITY"],
              name: "Tactical Flexibility",
              text: "",
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "CHAPTER TACTICS",
          points: 15,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "CHAPTER TACTICS"],
              name: "Chapter Tactics",
              text: "",
            },
          ],
        },
      ],
    },
    {
      id: "RE ROLLS",
      type: "OPTION",
      name: "Commander re-rolls",
      options: [
        {
          type: "EMPTY OPTION",
        },
        {
          type: "LOADOUT OPTION",
          id: "ONE",
          points: 25,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "RE-ROLL"],
              name: "One re-roll",
              text: "",
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "TWO",
          points: 50,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "RE-ROLL"],
              name: "Two re-rolls",
              text: "",
            },
          ],
        },
        {
          type: "LOADOUT OPTION",
          id: "THREE",
          points: 75,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "RE-ROLL"],
              name: "Three re-rolls",
              text: "",
            },
          ],
        },
      ],
    },
    {
      id: "TERMINATOR HONOR GUARD",
      type: "OPTION",
      name: "Terminator Honor Guard",
      options: [
        {
          type: "EMPTY OPTION",
        },
        {
          type: "LOADOUT OPTION",
          id: "TERMINATOR HONOR GUARD",
          points: 25,
          loadouts: [
            {
              type: "SPECIAL RULE",
              tags: ["SPACE MARINE", "TERMINATOR HONOR GUARD"],
              name: "Terminator Honor Guard",
              text: "",
            },
          ],
        },
      ],
    },
  ],
};

const SPACE_MARINE_CRUSADE_FLEET: IFleet = {
  type: "FLEET",
  id: "SPACE MARINE CRUSADE FLEET",
  name: "Space Marine Crusade Fleet",
  tags: ["FLEET", "SPACE MARINE", "SPACE MARINE CRUSADE FLEET"],
  profile: {
    attackRating: 3,
  },
  rules: [
    {
      type: "CONDITION",
      text:
        "If the fleet is worth at least 750 points, a Master of the Fleet must be included to lead it",
      condition: (list) => {
        return (
          list.getPoints() < 750 ||
          list.getSelectionsByTags(["SPACE MARINE MASTER OF THE FLEET"])
            .length > 0
        );
      },
    },
  ],
  selections: [
    {
      name: "Fleet Commander",
      selection: ["SPACE MARINE MASTER OF THE FLEET"],
      rules: [{ type: "LIMIT", max: 1 }],
    },
    {
      name: "Chapter Flagship",
      selection: ["ULTIMA CLASS BATTLE BARGE", "SPACE MARINE BATTLE BARGE"],
      rules: [
        { type: "LIMIT", max: 1 },
        {
          type: "CONDITION",
          text:
            "You may include one battle barge for every 1000 points in the fleet (or portion thereof). The fleet must be worth at least 1000 points to include the Chapter flagship.",
          condition: (list) => {
            let points = list.getPoints();
            let barges = list.getSelectionsByTags(["BATTLE BARGE"]);
            return points >= 1000 && points / 1000 >= barges.length;
          },
        },
      ],
    },
    {
      name: "Command Ships",
      selection: ["SPACE MARINE BATTLE BARGE"],
      rules: [
        { type: "LIMIT", max: 2 },
        {
          type: "CONDITION",
          text:
            "You may include one battle barge for every 1000 points in the fleet (or portion thereof).",
          condition: (list) => {
            let points = list.getPoints();
            let barges = list.getSelectionsByTags(["BATTLE BARGE"]);
            return points / 1000 >= barges.length;
          },
        },
      ],
    },
    {
      name: "Strike Cruisers",
      selection: ["SPACE MARINE STRIKE CRUISER"],
      rules: [{ type: "LIMIT", max: 10 }],
    },
    {
      name: "Vanguard Cruisers",
      selection: ["SPACE MARINE STRIKE CRUISER"],
      rules: [{ type: "LIMIT", max: 6 }],
    },
    {
      name: "Escorts",
      selection: [
        "NOVA CLASS FRIGATE",
        "GLADIUS CLASS FRIGATE",
        "HUNTER CLASS DESTROYER",
      ],
      rules: [{ type: "SQUADRON", minMembers: 2, maxMembers: 6 }],
    },
  ],
};

const SPACE_MARINE_LIST = [
  SPACE_MARINE_CRUSADE_FLEET,
  SPACE_MARINE_MASTER_OF_THE_FLEET,
  ULTIMA_CLASS_BATTLE_BARGE,
  SPACE_MARINE_BATTLE_BARGE,
  SPACE_MARINE_STRIKE_CRUISER,
  SPACE_MARINE_VANGUARD_CRUISER,
  NOVA_CLASS_FRIGATE,
  GLADIUS_CLASS_FRIGATE,
  HUNTER_CLASS_DESTROYER,
];

export default SPACE_MARINE_LIST;
