import { CHANGE_NAME } from "../actions/profileActions"

const initialState = {
    name: "Guest"
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        default:
            return state;
    };
};