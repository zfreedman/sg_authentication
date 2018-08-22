import axios from "axios";

import { api } from "../config";
import { AUTH_USER } from "./types";

export const handleUserSignup = formProps => dispatch => {
  axios.post(`${api}/signup`, formProps);
};
