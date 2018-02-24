import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios"
import Header from "../../conponents/Header"
import invate_room from "../../images/invate_room.jpg"
import { createRoom } from "./action"
import CreateRoom from "./CreatedRoom"
import CreatingRoom from "./CreatingRoom"

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            roomSlogen: "",
            roomId: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
    }
    handleClick(ev) {
        const inputText = document.querySelector(".link--invited");
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        const isCopy = document.execCommand('copy', true);
    }
    handleInputChange(ev) {
        const value = ev.target.value;
        const name = ev.target.name;
        this.setState({
            [name]: value
        })
    }

    handleCreateRoom() {
        let self = this;
        const roomName = this.state.roomName;
        const roomSlogen = this.state.roomSlogen;
        axios.post("/api/createroom", {
            roomName: roomName,
            roomSlogen: roomSlogen,
        }).then(function (res) {
            self.setState({
                roomId: res.data
            })
        }).catch(function (error) {
            console.log("handleCreateRoom err", error)
        });
    }

    render() {
        const hostname = "10.244.5.55:8080"
        const inviteLink = hostname + "/room/" + this.state.roomId;
        if (this.state.roomName !== "" && this.state.roomSlogen !== "") {
            const createRoom = this.handleCreateRoom;
        } else {
            const createRoom = undefined;
        }
        return (
            <div>
                <Header />
                <div className="card">
                    <div className="card-image">
                        <img src={invate_room} />
                        {
                            this.state.roomId
                                ? <a className="btn-floating halfway-fab waves-effect waves-light red pulse">
                                    <i className="fa fa-clone"
                                        aria-hidden="true"
                                        onClick={this.handleClick}
                                    >
                                    </i>
                                </a>
                                : ""
                        }

                    </div>
                    <div className="card-content row">
                        {
                            this.state.roomId
                                ? <CreateRoom inviteLink={inviteLink} />
                                : <CreatingRoom
                                    handleInputChange={this.handleInputChange}
                                    handleCreateRoom={createRoom}
                                />
                        }


                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getLink: () => {
        dispatch(createRoom())
    }
})

const mapStateToProps = (state) => ({
    inviteLink: state.link.inviteLink
})

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);