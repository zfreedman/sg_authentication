import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import Welcome from "./components/welcome";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} exact />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
