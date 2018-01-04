import axios from "axios";
export const checkUser = ({ islogin = false } = {}) => ({
  type: "CHECK_USER",
  islogin
});

export const test = () => ({
  type: "TEST"
});

export const checkUserAsync = () => async dispatch => {
  const res = await axios.get("/api/checkuser");
  console.log("action:", res.data.username);
  dispatch({ type: "CHECK_USER", username: res.data.username });
};
