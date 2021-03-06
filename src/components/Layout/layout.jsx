import React from "react";
import { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { ChatList } from "../ChatList";
import { MessageField } from "../MessageField";

class _Layout extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { match } = this.props;

        return <>
            <ChatList />
            <MessageField chatID={match.params.chatID} />
        </>;
    };
};

const Layout = withRouter(_Layout);

export { Layout };