import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"

export const ME_REQUEST = 'ME_REQUEST'

export type MeRequesAction = {
    type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequesAction> = () => ({
    type: ME_REQUEST
})


export interface IUserData {
    name?: string;
    iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'

export type MeRequesSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS,
    data: IUserData
}

export const meRequestSuccess: ActionCreator<MeRequesSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data
})


export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'

export type MeRequesErrorAction = {
    type: typeof ME_REQUEST_ERROR,
    error: string
}

export const meRequestError: ActionCreator<MeRequesErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error
})


export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest())
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${getState().token}` }
    })
      .then((resp) => {
        const userData = resp.data
        const myUserData = { name: userData.name, iconImg: userData.icon_img.split('?')[0] }
        /* setData(myUserData) */
        dispatch(meRequestSuccess(myUserData))
      })
      .catch((error) => {
        console.log(error)
        dispatch(meRequestError(String(error)))
      })
}

