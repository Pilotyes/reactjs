import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

import "./Message.css";

class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }
 
    render() {
        const {author = "Anonymous"} = this.props;

        let alignClass = "message__left";
        if (this.props.owner == "me") {
            alignClass = "message__right";
        }

        return <div className={"message " + alignClass}>
            <div className="message__text">{this.props.text}</div>
            <div className="message__author">{this.props.author}</div>
        </div>;
    }

}

export { Message };