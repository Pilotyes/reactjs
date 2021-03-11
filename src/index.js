import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./style.css";
import { store } from "./redux/store";

import { App } from "./components/App/";

ReactDOM.render(<BrowserRouter>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
</BrowserRouter>, document.querySelector("#root"))