export default (state = {
  inviteLink: "test"
}, action) => {
  switch (action.type) {
    case "CREATE_ROOM":
      return {
        ...state,
        inviteLink: action.inviteLink
      };
    default:
      return state;
  }
};