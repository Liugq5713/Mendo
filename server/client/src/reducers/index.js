const stateInit = {
  islogin: false
};

export default (state = stateInit, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return Object.assign({}, state, { islogin: action.islogin });
    case "TEST":
      return state;
    default:
      return state;
  }
};
