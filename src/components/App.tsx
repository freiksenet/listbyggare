import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StorageContext from "../storage/StorageContext";
import { LocalStorage } from "../storage/Storage";
import DATA_SET_REPOSITORY from "../data";
import theme from "../theme";
import About from "./About";
import Header from "./Header";
import Lists from "./lists/Lists";

const STORAGE = new LocalStorage(DATA_SET_REPOSITORY);

function App() {
  let [, forceRender] = React.useReducer((s) => s + 1, 0);
  React.useEffect(() => {
    let listener = () => {
      forceRender();
    };
    STORAGE.addListener("change", listener);
    return () => {
      STORAGE.removeListener("change", listener);
    };
  }, []);

  return (
    <StorageContext.Provider
      value={{ storage: STORAGE, dataSetRepository: DATA_SET_REPOSITORY }}
    >
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/lists">
              <Lists lists={STORAGE.getAll()} />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </StorageContext.Provider>
  );
}

export default App;
