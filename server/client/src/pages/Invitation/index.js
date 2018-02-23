import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios"
import Header from "../../conponents/Header"
import invate_room from "../../images/invate_room.jpg"
import { createRoom } from "./action"

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            roomSlogen: ""
        }
        this.props.getLink();
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick(ev) {
        const inputText = document.querySelector(".link--invited");
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        const isCopy = document.execCommand('copy', true);
    }
    handleInputChange(ev) {
        const value = ev.target.value;
        console.log('value', value)
        const name = ev.target.name;
        console.log('name', name)
        this.setState({
            [name]: value
        })
    }
    componentWillUnmount() {
        const roomName = this.state.roomName;
        const roomSlogen = this.state.roomSlogen;
        axios.post("/api/updateroom", {
            roomName: roomName,
            roomSlogen: roomSlogen,
            roomId: this.props.inviteLink
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const hostname = "10.244.5.55:8080"
        const inviteLink = hostname + "/room/" + this.props.inviteLink;
        return (
            <div>
                <Header />
                <div className="card">
                    <div className="card-image">
                        <img src={invate_room} />
                        <a className="btn-floating halfway-fab waves-effect waves-light red pulse">
                            <i className="fa fa-clone"
                                aria-hidden="true"
                                onClick={this.handleClick}
                                onCopy={this.handleCopy}
                            >
                            </i>
                        </a>
                    </div>
                    <div className="card-content">
                        <label htmlFor="roomName">房间名</label>
                        <input id="roomName" name="roomName" type="text" placeholder="给您的房间起个名字吧" onChange={this.handleInputChange} />
                        <label htmlFor="roomSlogen">房间标语</label>
                        <input id="roomSlogen" name="roomSlogen" type="text" placeholder="给您的房间起个标语吧" onChange={this.handleInputChange} />
                        <label htmlFor="roominviteLink">邀请链接</label>
                        <input id="roominviteLink" readOnly className="link--invited" type="text" value={inviteLink} />
                    </div>
                </div>
            </div>
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