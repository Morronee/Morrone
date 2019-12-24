import {
    usersAPI,
    followedAPI
} from './../api.js'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_DISABLED = 'TOGGLE_IS_DISABLED'

let initialState = {
    users: [],
    pageSize: 45,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    isDisabled: []
}


const usersReducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }

            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u;
                    })
                }

                case SET_USERS:
                    return {
                        ...state, users: action.users
                    }

                    case SET_CURRENT_PAGE:
                        return {
                            ...state, currentPage: action.currentPage
                        }

                        case SET_TOTAL_PAGE:
                            return {
                                ...state, totalUsersCount: action.totalUsers
                            }

                            case TOGGLE_IS_LOADING:
                                return {
                                    ...state, isLoading: action.loading
                                }

                                case TOGGLE_IS_DISABLED:
                                    return {
                                        ...state,
                                        isDisabled: action.loading ? [...state.isDisabled, action.userID] :
                                            state.isDisabled.filter(id => id != action.userID)
                                    }

                                    default:
                                        return state;
    }
}
export const follow = (userID) => ({
    type: FOLLOW,
    userID
})
export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setCountTotalUsers = (totalUsers) => ({
    type: SET_TOTAL_PAGE,
    totalUsers
})
export const setIsLoading = (loading) => ({
    type: TOGGLE_IS_LOADING,
    loading
})
export const setIsDisabled = (loading, userID) => ({
    type: TOGGLE_IS_DISABLED,
    loading,
    userID
})

export const getUsers = (currentPage, usersPage) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, usersPage).then(response => {
            dispatch(setIsLoading(false))
            dispatch(setUsers(response.items))
            dispatch(setCountTotalUsers(response.totalCount))
        })
    }
}

export const unfollowSuccess = (userID) => {
    return (dispatch) => {
        dispatch(setIsDisabled(true, userID))
        followedAPI.unfollow(userID)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollow(userID))
                    dispatch(setIsDisabled(false, userID))
                }
            })
    }
}

export const followSuccess = (userID) => {
    return (dispatch) => {
        dispatch(setIsDisabled(true, userID))
        followedAPI.follow(userID)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(userID))
                    dispatch(setIsDisabled(false, userID))
                }
            })
    }
}

export default usersReducer;