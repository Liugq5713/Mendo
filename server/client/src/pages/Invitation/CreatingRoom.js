import React from "react"

const CreatingRoom = (props) => {
    console.log("props.handleCreateRoom", props.handleCreateRoom == undefined)
    return (
        <div>
            <label htmlFor="roomName">房间名</label>
            <input
                id="roomName"
                name="roomName"
                type="text"
                placeholder="给您的房间起个名字吧"
                onChange={props.handleInputChange}
            />
            <label htmlFor="roomSlogen">房间标语</label>
            <input
                id="roomSlogen"
                name="roomSlogen"
                type="text"
                placeholder="给您的房间起个标语吧"
                onChange={props.handleInputChange}
            />
            <a className="wavs-effect waves-light btn col s12" onClick={props.handleCreateRoom} >
                <i className="fa fa-heart" aria-hidden="true"> 新建</i>
            </a>
        </div>
    )
}

export default CreatingRoom 