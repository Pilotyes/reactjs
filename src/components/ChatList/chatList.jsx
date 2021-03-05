import React from "react";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ChatList() {
    return <div className="chatList layoutBody">
        <List component="nav">
            <ListItem button>
                <ListItemText primary="Chat 1" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat 2" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat 3" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat 4" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat 5" />
            </ListItem>
            <Divider />
        </List>
    </div>
}

export { ChatList };