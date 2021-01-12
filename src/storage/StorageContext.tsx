import React from "react";

import { IStorage } from "./Storage";
import { DataSetRepository } from "../data";

interface IStorageContext {
  storage: IStorage;
  dataSetRepository: DataSetRepository;
}

const StorageContext = React.createContext<IStorageContext>(
  {} as IStorageContext,
);

export default StorageContext;
