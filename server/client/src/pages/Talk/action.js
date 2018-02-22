import axios from "axios";
import { GET_CHAT_MSG } from "../../constants/msg";

export const getChatMsg = (roomid) => async dispatch => {
    const res = await axios.get("/api/getchatmsg/" + roomid);
    dispatch({
        type: GET_CHAT_MSG,
        chatMsg: res.data
    })
};