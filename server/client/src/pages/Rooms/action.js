import { GET_ROOMLIST } from "../../constants/room";
import axios from "axios";

export const getRoomlist = () => async dispatch => {
  const res = await axios.get("/api/getroomlist");
  console.log('res', res.data)
  dispatch({
    type: GET_ROOMLIST,
    roomlist: res.data
  });
};
