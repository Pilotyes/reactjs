import logger from "redux-logger";

import { apiMiddleware } from "redux-api-middleware";
import { messageMiddleware } from "../middlewares/messageMiddleware";
import { highlightMiddleware } from "../middlewares/highlightMiddleware";

export default [logger, apiMiddleware, messageMiddleware, highlightMiddleware];