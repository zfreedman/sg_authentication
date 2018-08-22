import { applyMiddleware, createStore } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";

import App from "./components/app";
import reducers from "./reducers";
import Signup from "./components/auth/signup";
import Welcome from "./components/welcome";

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} exact />
        <Route path="/signup"component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
