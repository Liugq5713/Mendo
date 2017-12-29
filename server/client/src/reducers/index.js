stateInit = {
  loginState: false
};

export default (state = stateInit, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return Object.assign({}, state, { login: action.loginState });
    default:
      return state;
  }
};
