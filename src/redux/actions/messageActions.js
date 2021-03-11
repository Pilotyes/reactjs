export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (author, text, owner, chatID) => ({
    type: SEND_MESSAGE,
    payload: {
        author: author,
        text: text,
        owner: owner,
        chatID: chatID,
    },
});