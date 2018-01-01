const stateInit = {
  loginState: false
};

export default (state = stateInit, action) => {
  switch (action.type) {
    case "CHECK_USER_ASYNC":
      return Object.assign({}, state, { login: action.loginState });
    case "TEST":
      console.log("hi");
      return state;
    default:
      return state;
  }
};
