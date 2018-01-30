import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../conponents/Header";
import Room from "./Room";

class PageRoom extends Component {
  render() {
    const roomlist = this.props.roomlist;
    const RoomList = roomlist.map(room => {
      return (
        <li key={room._id}>
          <Room roomname={room.roomname} roomId={room._id} />
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
const mapStateToprops = state => ({
  roomlist: state.room.roomlist
});

export default connect(mapStateToprops)(PageRoom);
