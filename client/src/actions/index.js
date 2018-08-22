import axios from "axios";

import { api } from "../config";
import { AUTH_ERROR, AUTH_USER } from "./types";

export const handleUserSignup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signup`, formProps);

    dispatch(userSignup(response.data.token));
    localStorage.setItem("token", response.data.token);
    callback();
  }
  catch (e) {
    dispatch(userSignupERR("Email in use"));
  }
};

export const userSignout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

const userSignupERR = e => ({
  type: AUTH_ERROR,
  payload: e,
});

const userSignup = token => ({
  type: AUTH_USER,
  payload: token,
});
