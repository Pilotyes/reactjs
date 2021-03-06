import React, { createRef } from "react";
import { Component } from "react";
import { Message } from "../Message";
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

class MessageField extends Component {
    messagesRef = createRef();
    textFieldRef = createRef();

    static propTypes = {
        chatID: PropTypes.string,
    };

    state = {
        chats: [
            {
                name: "Chat 1",
                messages: [],
            },
            {
                name: "Chat 2",
                messages: [],
            },
            {
                name: "Chat 3",
                messages: [],
            },
            {
                name: "Chat 4",
                messages: [],
            },
            {
                name: "Chat 5",
                messages: [],
            },
        ],

        lastMessageText: "", 

        messages: [],
    };

    addNewMessage = (author, text, owner) => {
        let { chatID } = this.props;
        chatID = parseInt(chatID) - 1;
        if (isNaN(chatID)) {
            return;
        };

        const newMessageID = this.state.messages.length;
        const newMessage = {id: newMessageID, author: author, text: text, owner: owner};
        this.state.chats[chatID].messages = [...this.state.chats[chatID].messages, newMessageID],
        this.setState({
            messages: [...this.state.messages, newMessage],
            lastMessageText: text,
        });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.addNewMessage("Продавец слона", "Все говорят \"" + this.state.lastMessageText + "\", а ты купи слона", "robot");
            }, Math.floor(Math.random() * 1000));
        }

        this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
    };

    componentDidMount() {
        this.textFieldRef.current.focus();
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addNewMessage("Человек", this.textFieldRef.current.value, "me");
            this.textFieldRef.current.value = "";
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewMessage("Человек", this.textFieldRef.current.value, "me");
            this.textFieldRef.current.value = "";
    };

    render() {
        let { chatID } = this.props;
        chatID = parseInt(chatID) - 1;

        if (isNaN(chatID)) {
            chatID = 0;
        };

        return <div className="messageList layoutBody">
            <div className="messages" ref={this.messagesRef}>
                {this.state.chats[chatID].messages.map((item, index) => (
                    <Message key={index} {...this.state.messages[item]} />
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
    };
};

export { MessageField };