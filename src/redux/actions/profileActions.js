export const CHANGE_NAME = "@@profile/CHANGE_NAME";

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: {
        name: newName,
    },
});