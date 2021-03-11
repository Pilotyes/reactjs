
export const CREATE_CHAT = "@@chat/CREATE_CHAT";

export const createChat = (chatName) => ({
    type: CREATE_CHAT,
    payload: {
        name: chatName,
    },
});