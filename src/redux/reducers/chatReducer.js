import { SEND_MESSAGE, START_MESSAGES_LOADING, ERROR_MESSAGES_LOADING, SUCCESS_MESSAGES_LOADING } from "../actions/messageActions"
import { CREATE_CHAT } from "../actions/chatActions"
import { Store } from "@material-ui/icons";

const initialState = {
    messages: [
    ],
    chats: [
        {
            name: "Chat 1",
            isHighlighted: false,
            messages: [],
        },
        {
            name: "Chat 2",
            isHighlighted: false,
            messages: [],
        },
        {
            name: "Chat 3",
            isHighlighted: false,
            messages: [],
        },
        {
            name: "Chat 4",
            isHighlighted: false,
            messages: [],
        },
        {
            name: "Chat 5",
            isHighlighted: false,
            messages: [],
        },
    ],
    isLoading: false,
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
        case START_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case ERROR_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case SUCCESS_MESSAGES_LOADING: {
            var messages = state.messages;
            var _chats = state.chats;

            for (const key in action.payload) {
                const chatID = parseInt(key);
                for (const message in action.payload[key]) {
                    _chats[chatID].messages = [..._chats[chatID].messages, parseInt(message)];
                    messages = [...messages, action.payload[key][message]];
                }
            }

            return {
                ...state,
                messages: messages,
                chats: _chats,
                isLoading: false,
            }
        }
        default:
            return state;
    };
};