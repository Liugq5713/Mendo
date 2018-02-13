import { CREATE_ROOM } from "../../constants/room";
import axios from "axios";

export const createRoom = () => async dispatch => {
    const res = await axios.get("/api/createRoom");
    dispatch({
        type: CREATE_ROOM,
        inviteLink: res.data
    });
}
