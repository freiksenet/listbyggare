import { DataSet } from "../fleets/Data";
import BFGXR from "./BFGXR";

export class DataSetRepository {
  dataSets: Map<string, Map<string, DataSet>>;

  constructor() {
    this.dataSets = new Map();
  }

  addDataSet(dataSet: DataSet): void {
    if (!this.dataSets.has(dataSet.name)) {
      this.dataSets.set(dataSet.name, new Map());
    }
    this.dataSets.get(dataSet.name)?.set(dataSet.version, dataSet);
  }

  getDataSet(name: string, version: string): DataSet | null {
    return this.dataSets.get(name)?.get(version) || null;
  }

  // getAllDataSets() {}
}

const DATA_SET_REPOSITORY = new DataSetRepository();

DATA_SET_REPOSITORY.addDataSet(BFGXR);

export default DATA_SET_REPOSITORY;
