const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

let initialState = {
    users: [],
    pageSize: 45,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
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



export default usersReducer;