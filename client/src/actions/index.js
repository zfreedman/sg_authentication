import axios from "axios";

import { api } from "../config";
import { AUTH_ERROR, AUTH_USER } from "./types";

const userSignupERR = e => ({
  type: AUTH_ERROR,
  payload: e,
});

const userSignup = token => ({
  type: AUTH_USER,
  payload: token,
});

export const handleUserSignup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signup`, formProps);

    dispatch(userSignup(response.data.token));

    callback();
  }
  catch (e) {
    dispatch(userSignupERR("Email in use"));
  }
};
