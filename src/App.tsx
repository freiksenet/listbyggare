import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import theme from "./theme";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
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
