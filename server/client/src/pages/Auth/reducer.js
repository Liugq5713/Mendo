const stateInit = {
  profile: {
    username: ""
  }
};

export default (state = stateInit, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return {
        ...state,
        profile: {
          ...state.profile,
          username: action.username
        }
      };
    default:
      return state;
  }
};
