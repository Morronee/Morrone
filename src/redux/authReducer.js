import {
    authAPI
} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
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

export const meThunk = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {
                        id,
                        email,
                        login
                    } = response.data.data
                    dispatch(setUserData(id, login, email, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(meThunk()) 
                }
            })
    }

export const logout = () => (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false)) 
                }
            })
    }


export default authReducer;