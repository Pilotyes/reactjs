import React, { createRef } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';

import { createChat } from "../../redux/actions/chatActions";

class _ChatList extends Component {
    textFieldRef = createRef();

    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.array.isRequired,
        createChat: PropTypes.func.isRequired,
    };

    state = {
        lastChatName: "", 
    };

    createNewChat = (chatName) => {
        chatName && this.props.createChat(chatName);

        this.setState({
            lastChatName: chatName,
        });
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.createNewChat(this.textFieldRef.current.value);
            this.textFieldRef.current.value = "";
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createNewChat(this.textFieldRef.current.value);
        this.textFieldRef.current.value = "";
    };

    render() {
        return <div className="chatList layoutBody">
            <List component="nav">
                {this.props.chats.map((chat, index) => (
                    
                    <NavLink key={index} to={"/chat/" + (index + 1)} activeClassName="selectedChat" >
                        {function() {
                            console.log(chat);
                            if (chat.isHighlighted == true) {
                                return <ListItem button className={"highlighted"} >
                                    <ListItemText primary={chat.name} />
                                </ListItem>
                            }
                            return <ListItem button >
                                <ListItemText primary={chat.name} />
                            </ListItem>
                        }()}
                        <Divider />
                    </NavLink>
                ))}
            </List>
            <TextField id="create-new-chat-text-field" label="Название чата" inputRef={this.textFieldRef} style={{ width: "60%" }} onKeyDown={this.handleKeyDown} />
            <AddCircleIcon onClick={this.handleSubmit} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chat.chats,
    }
};

const ChatList = connect(mapStateToProps, { createChat })(_ChatList);

export { ChatList };