import React, { Component } from "react";
import Header from "../../conponents/Header"
import invate_room from "../../images/invate_room.jpg"

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleClick(ev) {
        console.log('ev', ev)
        //在这里设置剪贴板的数据
        document.execCommand('copy')
        console.log("this is paste")
        // We want our data, not data from any selection, to be written to the clipboard
    }

    handleCopy(ev) {
        console.log("here")
        ev.clipboardData.setData('text/plain', 'Hello, world!');
        ev.preventDefault();
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
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invitation;