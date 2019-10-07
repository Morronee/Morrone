import { profilesAPI } from './../api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'SET_PROFILE'

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
    profiles: null 
}



const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST : {
            debugger;
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
            debugger;
            let stateCopy = {...state};
            console.log(typeof stateCopy.profilePage);
            stateCopy.profilePage.newPostText = action.newText;
            return stateCopy;
        }
        
        case SET_PROFILE: {
            return {
                ...state, profiles: action.profiles
            }
        }

        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })
export const setProfiles = (profiles) => ({ type: SET_PROFILE, profiles })

export const setProfilesThunk = (id) => {
    return (dispatch) => {
        let userId = id
        let myProfile = 1775
        if (!userId) {
            userId = myProfile
        }
        profilesAPI.setProfile(userId)
        .then(response => {
            dispatch(setProfiles(response))
        })
    }
}


export default profileReducer;