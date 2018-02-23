import { Link } from "react-router-dom";
import React, { Component } from "react";

import room from "../../images/room_default.jpg";

class Room extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roomId = this.props.roomId;
    const roomurl = `/api/room/${roomId}`;
    return (
      <a href={roomurl} >
        <div className="col s12">
          <div className="card horizontal">
            <div className="card-image">
              <img src={room} />
            </div>
            <div className="card-stacked">
              <div className="card-content card-content__modify">
                <p>{this.props.roomName}</p>
              </div>
              <div className="card-action card-action__modify">
                <p href="#">{this.props.roomSlogen}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default Room;
