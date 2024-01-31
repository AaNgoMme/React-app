import { useEffect } from "react"
import { RootState, setToken } from "./store"
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"


export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {

    useEffect(() => {
        if (window.__token__ == 'undefined') {
            const token = localStorage.getItem('token') || window.__token__
            dispatch(setToken(token))
        } if (window.__token__ != 'undefined') {
            const token = window.__token__
            localStorage.setItem('token', token)
            dispatch(setToken(token))
        }
    }, [])
}