import React from "react";
import { MessageField } from "../MessageField";

class App extends React.Component {
    render() {
        return <div id="test-id">
            <h2>Hello from React</h2>
            <MessageField />
            </div>;
    }
}

export { App };