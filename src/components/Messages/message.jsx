import React from "react";

const Messages = (props) => {
    const { messages = [] } = props;
    return <div>
        {messages.map((item, index) => (
            <Message key={index} text={item} />
        ))}
    </div>;
}

const Message = (props) => {
    return <div>{props.text}</div>;
}

export { Messages };