import axios from "axios";
import { GET_USERNAME } from "../../constants/user";

export const getUsername = () => async dispatch => {
  const res = await axios.get("/api/checkuser");
  console.log("action:getUsername", res.data.username);
  dispatch({ type: GET_USERNAME, username: res.data.username });
};
