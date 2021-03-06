import React from "react";

import "../../style.css";

import Container from "@material-ui/core/Container";

import { Header } from "../Header";
import { Router } from "../Router";

function App() {
    return <Container maxWidth="md" style={{height: "100%"}}>
        <Header />
        <Router />
    </Container>;
}

export { App };