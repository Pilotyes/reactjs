import { ForumTwoTone } from "@material-ui/icons";
import { SEND_MESSAGE, sendMessage } from "../redux/actions/messageActions";

export const messageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.owner === "me") {
                setTimeout(() => {
                    store.dispatch(sendMessage("Продавец слона", "Все говорят \"" + action.payload.text + "\", а ты купи слона", "robot", action.payload.chatID));
                }, Math.floor(Math.random() * 5000));
            }
        }
    }

    return next(action)
}