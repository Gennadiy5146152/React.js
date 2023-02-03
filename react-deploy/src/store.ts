import { ActionCreator, AnyAction, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./store/me/actions";
import { meReducer, MeState } from "./store/me/reducer";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Привет',
    token: '',
    me: {
        loading: false,
        error: "",
        data: {},
    },
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: "UPDATE_COMMENT",
    text,
})

export const setToken: ActionCreator<AnyAction> = (text) =>({
    type: "SET_TOKEN",
    text,
})

type MyAction = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE_COMMENT":
            return {
                ...state,
                commentText: action.text,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.text,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }
        default:
            return state;
    }
}
