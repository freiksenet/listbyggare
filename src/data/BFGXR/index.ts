import { DataSet, ISpecialRule } from "../../fleets/Data";
import spaceMarines from "./spacemarines";

const PONDEROUS: ISpecialRule & { id: string } = {
  id: "PONDEROUS",
  tags: ["PONDEROUS"],
  name: "Ponderous",
  type: "SPECIAL RULE",
  text:
    "This ship is ponderous and cannot use Come to New Heading special orders.",
};

const BFGXR = new DataSet({
  name: "Battlefleet Gothic: XR",
  version: "2021.1",
  contents: [PONDEROUS, ...spaceMarines],
});

export default BFGXR;
