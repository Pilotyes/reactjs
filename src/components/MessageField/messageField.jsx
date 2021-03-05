import React, { createRef } from "react";
import { Component } from "react";
import { Message } from "../Message";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

class MessageField extends Component {
    textFieldRef = createRef();

    state = {
        messages: [
        ],
        lastMessageText: "", 
    }

    addNewMessage = (event) => {
        this.setState({
            messages: [...this.state.messages, {author: "Человек", text: this.textFieldRef.current.value, owner: "me"}],
            lastMessageText: this.textFieldRef.current.value
        });

        this.textFieldRef.current.value = "";
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, {author: "Продавец слона", text: "Все говорят \"" + this.state.lastMessageText + "\", а ты купи слона"}]});
            }, Math.floor(Math.random() * 1000));
        }
    }

    componentDidMount() {
        this.textFieldRef.current.focus();
    }

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addNewMessage();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewMessage();
    }

    render() {
        return <div className="messageList layoutBody">
            <div className="messages">
                {this.state.messages.map((item, index) => (
                    <Message key={index} {...item}/>
                ))}
            </div>
            <div className="messageFieldFooter">
                <TextField id="standard-basic" label="Введите текст сообщения" inputRef={this.textFieldRef} style={{ width: "60%" }} onKeyDown={this.handleKeyDown} />
            
                <Button onClick={this.handleSubmit}
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}>Отправить сообщение
                </Button>
            </div>
        </div>
    }
}

export { MessageField };