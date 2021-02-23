import React from "react";
import { Messages } from "../Messages";

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.messages = [
            "Message 1",
            "How are you?",
        ];

        this.addNewMessage = this.addNewMessage.bind(this);
    }

    addNewMessage() {
        this.messages.push("I am normal");
        this.forceUpdate();
    }

    render() {
        return <div id="test-id">
            <h2>Hello from React</h2>
            <Messages messages={this.messages} />
            <button onClick={this.addNewMessage}>New message</button>
            </div>;
    }
}

export { App };