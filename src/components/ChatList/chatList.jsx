import React from "react";
import { NavLink } from "react-router-dom";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ChatList = () => {
    return <div className="chatList layoutBody">
        <List component="nav">
            {["Chat 1", "Chat 2", "Chat 3", "Chat 4", "Chat 5"].map((chat, index) => (
                <NavLink key={index} to={"/chat/" + (index + 1)} activeClassName="selectedChat">
                    <ListItem button>
                        <ListItemText primary={chat} />
                    </ListItem>
                    <Divider />
                </NavLink>
            ))}
        </List>
    </div>
}

export { ChatList };