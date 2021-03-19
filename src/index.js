import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./style.css";
import store, { history, persistor } from "./redux/store";

import { App } from "./components/App/";

ReactDOM.render(<ReduxProvider store={store}>
    <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </ConnectedRouter>
</ReduxProvider>, document.querySelector("#root"))