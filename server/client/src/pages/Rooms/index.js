import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../conponents/Header";
import Room from "./Room";
import { getRoomlist } from "./action"

class PageRoom extends Component {
  componentWillMount() {
    this.props.getRoomlist();
  }
  render() {
    const roomlist = this.props.roomlist;
    console.log('roomlist', roomlist)
    const RoomList = roomlist.map(room => {
      return (
        <li key={room._id}>
          <Room roomName={room.name} roomId={room._id} roomSlogen={room.slogen} />
        </li>
      )
    });
    return (
      <div>
        <Header feature="menu" />
        <ul>{RoomList}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  roomlist: state.room.roomlist
});

const mapDispatchToprops = (dispatch) => ({
  getRoomlist: () => {
    dispatch(getRoomlist())
  }
})
export default connect(mapStateToProps, mapDispatchToprops)(PageRoom);
