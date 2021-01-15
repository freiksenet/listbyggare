import { DataSet, ISpecialRule } from "../../fleets/Data";
import spaceMarines from "./spacemarines";

const BFGXR = new DataSet({
  name: "Battlefleet Gothic: XR",
  version: "2021.1",
  contents: [...spaceMarines],
});

export default BFGXR;
