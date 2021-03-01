import React from "react";
import { Component } from "react";
import { Message } from "../Message";

class MessageField extends Component {
    state = {
        messages: [
            {author: "Men", text: "Message 1"},
            {author: "Men", text: "How are you?"},
        ],
    }
 
    addNewMessage = () => {
        this.setState({ messages: [...this.state.messages, {author: "Men", text: "How are you, bot?"}]});
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, {author: "robot", text: "I am normal)"}]});
            }, Math.floor(Math.random() * 1000));
        }
    }

    render() {
        return <>
            <div className="messages">
                {this.state.messages.map((item, index) => (
                    <Message key={index} text={item.text} author={item.author}/>
                ))}
            </div>
            <button onClick={this.addNewMessage}>Send new mesage</button>
        </>
    }
}

export { MessageField };