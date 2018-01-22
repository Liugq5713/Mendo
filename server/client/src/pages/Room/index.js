import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../conponents/Header";
import Room from "./Room";

class PageRoom extends Component {
  render() {
    const RoomLists = this.props.roomlist.map(room =>
      <li key={room._id}>
        <Room roomname={room.roomname} roomId={room._id} />
      </li>
    )
    return (
      <div>
        <Header feature="menu" />
        <ul>
          {RoomLists}
        </ul>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  roomlist: state.room.roomlist
});

export default connect(mapStateToprops)(PageRoom);
