import React, { Component } from "react";
import Header from "../../conponents/Header"
import invate_room from "../../images/invate_room.jpg"

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ev) {
        const inputText = document.querySelector(".link--invited");
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        const isCopy = document.execCommand('copy', true);
    }
    render() {
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
                        <h4>邀请链接</h4>
                        {/* TODO:这里是动态生成的邀请链接 */}
                        <input readOnly className="link--invited" type="text" value="I am a very simple card. I am I require little." />
                    </div>
                </div>
            </div>
        )
    }
}

export default Invitation;