// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
        users: [
            {   
                id: 1,
                name: 'Vladimir Kremlev',
                age: 26
            },
            {
                id: 2,
                name: 'Nikita Nikitin',
                age: 190
            }
        ]
}



const usersReducer = (state = initialState, action) => {


    switch(action.type) {
        
        default :
            return state;
    }
}
// export const updateNewPostInStateActionCreate = (text) => ({ type: 'UPDATE-NEW-POST', newText: text })
// export const addPostInProfileCationCreate = () => ({ type: 'ADD-POST' })

export default usersReducer;