import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
}

const initialState: RootState = {
    commentText: 'Привет',
    token: '',
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: "UPDATE_COMMENT",
    text,
})

export const updateToken: ActionCreator<AnyAction> = (text) =>({
    type: "UPDATE_TOKEN",
    text,
})

export const rootReducer: Reducer<RootState> = (state = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE_COMMENT":
            return {
                ...state,
                commentText: action.text,
            }
        case "UPDATE_TOKEN":
            return {
                ...state,
                token: action.text,
            }
        default:
            return state;
    }
}
