import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import bgUserinfo from "../images/bgUserinfo.jpg"
import Avatar from "./Avatar"
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={bgUserinfo} />
                            </div>
                            <Avatar />
                            <a href="#!name"><span className="brown-text darken-4-text name">{this.props.username}</span></a>
                            <a href="#!email"><span className="brown-text darken-3-text email">诗酒趁年华</span></a>
                        </div>
                    </li>
                    <li>
                        <Link to="/invite">
                            <i className="fa fa-plus" aria-hidden="true"></i>创建新房间
                        </Link>
                    </li>
                    <li>
                        <Link to="/transfer">
                            <i className="fa fa-exchange" aria-hidden="true"></i>传送门
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <i className="fa fa-user" aria-hidden="true"></i>关于作者
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/Liugq5713/Mendo">
                            <i className="fa fa-code" aria-hidden="true"></i>项目源代码
                        </a>
                    </li>
                    <li><div className="divider"></div></li>
                    <li>
                        <a href="/api/logout">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>退出登录
                        </a>
                    </li>
                </ul>
                {/* href="#" */}
                <a data-activates="slide-out" className="button-collapse red-text darken-4-text"><i className="fa fa-bars" aria-hidden="true" /></a>
            </div >
        )
    }

}

const mapStateToprops = state => ({
    username: state.auth.profile.username
})

export default connect(mapStateToprops)(Menu);