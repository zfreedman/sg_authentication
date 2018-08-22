import axios from "axios";

import { api } from "../config";
import { AUTH_ERROR, AUTH_USER } from "./types";

export const handleUserSignin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signin`, formProps);

    dispatch(userAuth(response.data.token));
    localStorage.setItem("token", response.data.token);
    callback();
  }
  catch (e) {
    dispatch(userAuthERR("Username/password invalid"));
  }
};

export const handleUserSignup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signup`, formProps);

    dispatch(userAuth(response.data.token));
    localStorage.setItem("token", response.data.token);
    callback();
  }
  catch (e) {
    dispatch(userAuthERR("Email in use"));
  }
};

export const userSignout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

const userAuthERR = e => ({
  type: AUTH_ERROR,
  payload: e,
});

const userAuth = token => ({
  type: AUTH_USER,
  payload: token,
});
