const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

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
    }
}



const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST :
            const addPostsId = state.profilePage.posts.length + 1
    
            let newPost = {
                id: addPostsId,
                message: state.profilePage.newPostText,
                nick: 'PropsMan'
            }
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = "";
            return state;
       
        case UPDATE_NEW_POST :
            state.profilePage.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })

export default profileReducer;