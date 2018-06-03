import axios from 'axios'
import { CREATE_ROOM } from '../../constants/room'

export const createRoom = () => async dispatch => {
  const res = await axios.get('/api/createRoom')
  dispatch({
    type: CREATE_ROOM,
    inviteLink: res.data
  })
}
