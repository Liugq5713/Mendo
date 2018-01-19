import { Link } from "react-router-dom";
import React, { Component } from "react";
import io from "socket.io-client";

import room from "../../images/room.jpg";

class Room extends Component {
  constructor(props) {
    super(props);
    this.joinRoom = this.joinRoom.bind(this);
  }
  joinRoom() {
    const socket = io("10.224.5.55:5000");
    // 加入房间
    socket.emit('join', "test");
  }
  render() {
    const roomId = this.props.roomId;
    const roomurl = `/api/room/${roomId}`;
    return (
      <a href={roomurl} >
        <div className="col s12">
          <div className="card horizontal" onClick={this.joinRoom}>
            <div className="card-image">
              <img src={room} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card.</p>
              </div>
              <div className="card-action">
                <p href="#">This is a link</p>
              </div>
            </div>
          </div>
        </div>
      </ a>

    );
  }
}

export default Room;
