export default (state = { roomlist: [] }, action) => {
  switch (action.type) {
    case "GET_ROOMLIST":
      return {
        ...state,
        roomlist: action.roomlist
      };
    default:
      return state;
  }
};
