import React, { createRef } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Message } from "../Message";
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

import { sendMessage } from "../../redux/actions/messageActions";

class _Messages extends Component {
    messagesRef = createRef();
    textFieldRef = createRef();

    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.array.isRequired,
        messages: PropTypes.array.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        lastMessageText: "", 
    };

    addNewMessage = (author, text, owner) => {
        let { chatID } = this.props;
        chatID = parseInt(chatID) - 1;
        if (isNaN(chatID)) {
            return;
        };

        text && this.props.sendMessage(author, text, owner, chatID);

        this.setState({
            lastMessageText: text,
        });
    };

    componentDidUpdate() {
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
                {this.props.chats[chatID] && this.props.chats[chatID].messages.map((item, index) => (
                    <Message key={index} {...this.props.messages[item]} />
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

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        chats: state.chat.chats,
    }
};

const Messages = connect(mapStateToProps, { sendMessage })(_Messages);

export { Messages };