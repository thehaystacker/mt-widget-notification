import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import Home from "./Pages/Home";
import Notifications from "./Pages/Notifications";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/notifications" component={Notifications} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
