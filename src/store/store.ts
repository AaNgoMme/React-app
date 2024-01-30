import React from "react"
import { Action, ActionCreator, Reducer } from "redux"
import { IUserData, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequesAction, MeRequesErrorAction, MeRequesSuccessAction } from "./me/action"
import { MeState, meReducer } from "./me/reducer"



export type RootState = {
    commentText: string
    token: string
    me: MeState
}

const initialState: RootState = {
    commentText: '',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}


const UPDATE_COMMENT = 'UPDATE_COMMENT'
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT
    text: string
}
export const updateComment: ActionCreator<Action> = (text) => ({
    type: UPDATE_COMMENT, 
    text,
})


const SET_TOKEN = 'SET_TOKEN'
export type SetTokenAction = {
    type: typeof SET_TOKEN
    token: string
}
export const setToken: ActionCreator<Action> = (token) => ({
    type: SET_TOKEN,
    token,
})

type MyAction = UpdateCommentAction
| SetTokenAction
| MeRequesAction
| MeRequesSuccessAction
| MeRequesErrorAction

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_COMMENT':
            return {
                ...state,
                commentText: action.text,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state
    }  
}