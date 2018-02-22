export default (state = { msg: [] }, action) => {
    switch (action.type) {
        case "GET_CHAT_MSG":
            return {
                ...state,
                msg: action.chatMsg
            };
        default:
            return state;
    }
};