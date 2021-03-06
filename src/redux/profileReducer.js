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

    let stateCopy = {...state}

    switch(action.type) {
        case ADD_POST : {
            let addPostsId = state.profilePage.posts.length + 1
    
            let newPost = {
                id: addPostsId,
                message: state.profilePage.newPostText,
                nick: 'PropsMan'
            }
<<<<<<< Updated upstream
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

            // stateCopy.profilePage.posts = [...state.profilePage.posts];
            // stateCopy.profilePage.posts.push(newPost);
            // stateCopy.profilePage.newPostText = '';
=======
            stateCopy.profilePage.posts = [...state.profilePage.posts];
            stateCopy.profilePage.posts.push(newPost);
            stateCopy.profilePage.newPostText = '';
>>>>>>> Stashed changes
            return stateCopy;
        }
        
        case UPDATE_NEW_POST : {
<<<<<<< Updated upstream
            let stateCopy = {
                ...state,
                newPostText: action.newText

            };
=======
>>>>>>> Stashed changes
            stateCopy.profilePage.newPostText = action.newText;
            return stateCopy;
        }
        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })

export default profileReducer;