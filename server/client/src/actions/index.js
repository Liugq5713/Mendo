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
  dispatch({ type: "CHECK_USER", islogin: res.data });
};
