import * as t from "io-ts";

export const SerializedFleetCommanderCodec = t.type({
  type: t.literal("FLEET COMMANDER"),
  id: t.string,
  selectableId: t.string,
  options: t.record(t.string, t.string),
});

export type SerializedFleetCommander = t.TypeOf<
  typeof SerializedFleetCommanderCodec
>;

export const SerializedShipCodec = t.type({
  type: t.literal("SHIP"),
  id: t.string,
  selectableId: t.string,
  options: t.record(t.string, t.string),
});

export type SerializedShip = t.TypeOf<typeof SerializedShipCodec>;

const SerializedSquadronCodec = t.type({
  type: t.literal("SQUADRON"),
  id: t.string,
  ships: t.array(SerializedShipCodec),
});

export type SerializedSquadron = t.TypeOf<typeof SerializedSquadronCodec>;

const SerializedSelectionCodec = t.union([
  SerializedFleetCommanderCodec,
  SerializedShipCodec,
  SerializedSquadronCodec,
]);

export type SerializedSelection = t.TypeOf<typeof SerializedSelectionCodec>;

export const SerializedListCodec = t.type({
  id: t.string,
  version: t.string,
  name: t.union([t.string, t.null]),
  dataSet: t.union([
    t.type({
      name: t.string,
      version: t.string,
    }),
    t.null,
  ]),
  fleetId: t.union([t.string, t.null]),
  pointLimit: t.union([t.number, t.null]),
  selections: t.array(SerializedSelectionCodec),
});

export type SerializedList = t.TypeOf<typeof SerializedListCodec>;
