<<<<<<< Updated upstream
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    users: [
            { id: 1, message: 'Hi, all right', nick: 'Kenny' },
            { id: 2, message: 'Test .map', nick: 'Larry' },
            { id: 3, message: 'Test props', nick: 'Henry' },
            { id: 4, message: 'Test props 2', nick: 'Bob' },
            { id: 5, message: 'Test props from state 2', nick: 'Log' }
        ],
    }

=======
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [{
        id: 1,
        name: {
            firstName: 'Vladimir',
            lastName: 'Kremlev'
        },
        location: {
            country: 'Russia',
            city: 'Moscow'
        },
        followStatus: true,
        description: 'Hello wanna'
    }, {
        id: 2,
        name: {
            firstName: 'Vitaliy',
            lastName: 'Kurov'
        },
        location: {
            country: 'Russia',
            city: 'Kurovskoe'
        },
        followStatus: false,
        description: 'Big man s'
    }, {
        id: 3,
        name: {
            firstName: 'Jony',
            lastName: 'Rodriges'
        },
        location: {
            country: 'USA',
            city: 'Mexico'
        },
        followStatus: true,
        description: 'wtf'
    }, {
        id: 4,
        name: {
            firstName: 'Salon',
            lastName: 'Sforza'
        },
        location: {
            country: 'Germany',
            city: 'Berlin'
        },
        followStatus: false,
        description: 'Lorem lorem lorem'
    }]
}
>>>>>>> Stashed changes



const usersReducer = (state = initialState, action) => {

<<<<<<< Updated upstream

    switch(action.type) {
        case ADD_POST : 
         
        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })
=======
    switch (action.type) {
        case FOLLOW: 

            return { 
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followStatus: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersID) {
                        return {
                            ...u, followStatus: false
                        }
                    }
                    return u
                })
            }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}
export const followAC = () => ({ type: FOLLOW  })
export const unfollowAC = () => ({ type: UNFOLLOW})
export const setUsersAC = (users) => ({ type: SET_USERS, users })
>>>>>>> Stashed changes

export default usersReducer;