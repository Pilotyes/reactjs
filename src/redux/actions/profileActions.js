import { RSAA, getJSON } from "redux-api-middleware";

export const CHANGE_NAME = "@@profile/CHANGE_NAME";

export const START_PROFILE_LOADING = "@@profile/START_PROFILE_LOADING ";
export const SUCCESS_PROFILE_LOADING = "@@profile/SUCCESS_PROFILE_LOADING";
export const ERROR_PROFILE_LOADING = "@@profile/ERROR_PROFILE_LOADING";

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: {
        name: newName,
    },
});

export const loadProfile = () => ({
    [RSAA]:{
        endpoint: "http://localhost:3000/profile",
        method: "GET",
        types: [
            START_PROFILE_LOADING,
            {
                type: SUCCESS_PROFILE_LOADING,
                payload: (action, state, res) => getJSON(res).then(data => data)
            },
            ERROR_PROFILE_LOADING,
        ]
    }
})