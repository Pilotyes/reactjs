import React from "react";

import { ChatList } from "../ChatList";
import { Header } from "../Header";
import { MessageField } from "../MessageField";

import "../../style.css";

import Container from "@material-ui/core/Container";

function Layout() {
    return <Container maxWidth="md" style={{height: "100%"}}>
        <Header />
        <ChatList />
        <MessageField />
    </Container>;
};

export { Layout };