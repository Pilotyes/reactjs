import logger from "redux-logger";

import { messageMiddleware } from "../middlewares/messageMiddleware";
import { highlightMiddleware } from "../middlewares/highlightMiddleware";

export default [logger, messageMiddleware, highlightMiddleware];