export const checkUser = ({ loginState = false } = {}) => ({
  type: "CHECK_USER_ASYNC",
  loginState
});

export const test = () => ({
  type: "TEST"
});
