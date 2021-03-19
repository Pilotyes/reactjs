import { SEND_MESSAGE } from "../redux/actions/messageActions";
import { LOCATION_CHANGE } from "connected-react-router";

function getChatIDFromPath(path) {
    const chatIDStr = path.replace("/chat/", "");
    const chatID = parseInt(chatIDStr) - 1;

    return chatID;
}

export const highlightMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.owner === "robot") {
                const chatIDfromAction = action.payload.chatID;
                const chatIDFromPath = getChatIDFromPath(store.getState().router.location.pathname);
                if (isNaN(chatIDFromPath)) {
                    break;
                };

                if (chatIDfromAction != chatIDFromPath) {
                    store.getState().chat.chats[chatIDfromAction].isHighlighted = true;
                };
            }
            break;
        }
        case LOCATION_CHANGE: {
            const chatID = getChatIDFromPath(action.payload.location.pathname);
            if (isNaN(chatID)) {
                break;
            };

            if (store.getState().chat.chats[chatID] !== undefined) {
                store.getState().chat.chats[chatID].isHighlighted = false;
            }
            break;
        }
    }
    return next(action)
}