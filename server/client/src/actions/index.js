import axios from "axios";
import { GET_USERNAME } from "../constants/user"



export const getUsername = () => async dispatch => {
  const res = await axios.get("/api/checkuser");
  console.log("action:", res.data.username);
  dispatch({ type: GET_USERNAME, username: res.data.username });
};

export const test = () => ({
  type: "TEST"
});

