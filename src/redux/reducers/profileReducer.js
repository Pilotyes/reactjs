import { CHANGE_NAME, START_PROFILE_LOADING, ERROR_PROFILE_LOADING, SUCCESS_PROFILE_LOADING } from "../actions/profileActions"

const initialState = {
    name: "Guest",
    isLoading: false,
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case START_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case ERROR_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case SUCCESS_PROFILE_LOADING: {
            return {
                ...state,
                name: action.payload.userName,
                isLoading: false,
            }
        }
        default:
            return state;
    };
};