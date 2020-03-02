import {
    authAPI
} from "../api";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
                
            }
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload

            }

            default:
                return state;
    }

}
export const setUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        login,
        email,
        isAuth: isAuth
    }
})
export const getCaptchaThunk = (captchaUrl) => ({
    type: SET_CAPTCHA,
    payload: {captchaUrl}
})

export const meThunk = () => async (dispatch) => {
       let response = await authAPI.authMe()
                if (response.data.resultCode === 0) {
                    let {
                        id,
                        email,
                        login
                    } = response.data.data
                    dispatch(setUserData(id, login, email, true))
                }
    }
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
                if (response.data.resultCode === 0) {
                    dispatch(meThunk()) 
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                    dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
                }
    }

export const logout = () => async (dispatch) => {
        let response = await authAPI.logout()
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
    }
export const getCaptchaUrl = () => async (dispatch) => {
        let response = await authAPI.getCaptcha()
        let captchaUrl = response.data.url
        dispatch(getCaptchaThunk(captchaUrl))

}



export default authReducer;