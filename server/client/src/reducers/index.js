export default (state = { test: "success" }, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};
