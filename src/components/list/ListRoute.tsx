import React from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";

import { List } from "../../fleets/List";
import ListView from "./ListView";

function ListPage({ lists }: { lists: Array<List> }) {
  let match = useRouteMatch<{ listId?: string }>("/lists/:listId");
  let activeList = lists.find((list) => list.id === match?.params?.listId);
  if (!activeList) {
    return <Redirect to="/lists" />;
  } else {
    return (
      <Switch>
        <Route path="/lists/:listId">
          <ListView list={activeList} />
        </Route>
      </Switch>
    );
  }
}

export default ListPage;
