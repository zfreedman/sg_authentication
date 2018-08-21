import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import reducers from "./reducers";
import Signup from "./components/auth/signup";
import Welcome from "./components/welcome";

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} exact />
        <Route path="/signup"component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
