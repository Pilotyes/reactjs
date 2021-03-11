import { SEND_MESSAGE } from "../actions/messageActions"
import { CREATE_CHAT } from "../actions/chatActions"

const initialState = {
    messages: [
    ],
    chats: [
        {
            name: "Chat 1",
            messages: [],
        },
        {
            name: "Chat 2",
            messages: [],
        },
        {
            name: "Chat 3",
            messages: [],
        },
        {
            name: "Chat 4",
            messages: [],
        },
        {
            name: "Chat 5",
            messages: [],
        },
    ],
};

export const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const newMessageID = state.messages.length;
            const newMessage = {id: newMessageID, author: action.payload.author, text: action.payload.text, owner: action.payload.owner};

            const chats = state.chats
            chats[action.payload.chatID].messages = [
                ...chats[action.payload.chatID].messages,
                newMessageID,
            ]

            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage,
                ],
                chats: chats,
            };
        case CREATE_CHAT:
            const newChatID = state.chats.length + 1;

            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        name: action.payload.name,
                        messages: [],
                    },
                ],
            };
        default:
            return state;
    };
};