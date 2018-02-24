import React from "react"

const CreatedRoom = (props) => {
    return (
        <div>
            <label htmlFor="roominviteLink">邀请链接</label>
            <input id="roominviteLink" readOnly className="link--invited" type="text" value={props.inviteLink} />
        </div>
    )
}

export default CreatedRoom 