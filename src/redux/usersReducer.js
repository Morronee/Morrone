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




const usersReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST : 
         
        default :
            return state;
    }
}
export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })

export default usersReducer;