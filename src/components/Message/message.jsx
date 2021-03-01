import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }
 
    render() {
        const {author = "Anonymous"} = this.props;

        return <div>{this.props.author}: {this.props.text}</div>;
    }
}

export { Message };