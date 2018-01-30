import { Link } from "react-router-dom";
import React, { Component } from "react";

import room from "../../images/room.jpg";

class Room extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roomId = this.props.roomId;
    const roomurl = `/room/${roomId}`;
    return (
      <Link to={roomurl} >
        <div className="col s12">
          <div className="card horizontal">
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
      </Link>
    );
  }
}

export default Room;
