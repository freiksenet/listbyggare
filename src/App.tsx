import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./About";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/lists">Lists</Route>
          <Route path="/lists/:id">List</Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
