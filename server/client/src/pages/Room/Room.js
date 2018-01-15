import React, { Component } from "react";
import room from "../../images/room.jpg";

class Room extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img src={room} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
