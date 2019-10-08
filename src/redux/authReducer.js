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
                ...action.data,
                    isAuth: true

            }

            default:
                return state;
    }

}
export const setUserData = (id, login, email) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email
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
                    dispatch(setUserData(id, login, email))
                }
            })
    }
}

export default authReducer;