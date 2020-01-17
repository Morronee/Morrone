import { profilesAPI } from './../api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, all right', nick: 'Kenny' },
            { id: 2, message: 'Test .map', nick: 'Larry' },
            { id: 3, message: 'Test props', nick: 'Henry' },
            { id: 4, message: 'Test props 2', nick: 'Bob' },
            { id: 5, message: 'Test props from state 2', nick: 'Log' }
        ],
        newPostText: ''
        
    },
    profiles: null,
    status: ''
}



const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST : {
            const addPostsId = state.profilePage.posts.length + 1
    
            let newPost = {
                id: addPostsId,
                message: state.profilePage.newPostText,
                nick: 'PropsMan'
            }
            let stateCopy = {...state};
            stateCopy.profilePage.posts = [...state.profilePage.posts];
            stateCopy.profilePage.posts.push(newPost);
            stateCopy.profilePage.newPostText = '';
            return stateCopy;
        }
        
        case UPDATE_NEW_POST : {
            let stateCopy = {...state};
            stateCopy.profilePage.newPostText = action.newText;
            return stateCopy;
        }
        
        case SET_PROFILE: {
            return {
                ...state, profiles: action.profiles
            }
        }
        
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        

        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })
export const setProfiles = (profiles) => ({ type: SET_PROFILE, profiles })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setProfilesThunk = (id) => async (dispatch) => {
        let userId = id
        let myProfile = 1775
        if (!userId) {
            userId = myProfile
        }
        let response = await profilesAPI.setProfile(userId)
            dispatch(setProfiles(response))
    }

export const setStatusThunk = (id) => async (dispatch) => {
       let response = await profilesAPI.getStatus(id)
            console.log('get - ' + response)
            dispatch(setStatus(response))
}

export const setNewStatusThunk = (status) => async (dispatch) => {
    let response = await profilesAPI.upStatus(status)
        // if (response.data.resultCode === 0) {
            console.log('UP - ' + status)
        dispatch(setStatus(status))
}


export default profileReducer;