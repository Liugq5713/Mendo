const stateInit = {
  profile: {
    username: ""
  }
};

export default (state = stateInit, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return {
        ...state,
        profile: {
          ...state.profile,
          username: action.username
        }
      };
    case "TEST":
      return state;
    default:
      return state;
  }
};
