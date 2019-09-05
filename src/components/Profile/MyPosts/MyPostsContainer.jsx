import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostInProfileCationCreate, updateNewPostInStateActionCreate } from '../../../redux/profileReducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux'



// const ContainerMyPosts = (props) => {
// debugger;

//     let state = props.store.getState()

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostInStateActionCreate(text));
//     }

//     let onPostMessage = () => {
//             props.store.dispatch(addPostInProfileCationCreate())
//         }
    

//     return (
//         <MyPosts 
//         onPostChange={onPostChange}
//         onPostMessage={onPostMessage}
//         posts={state.profilePage.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.profilePage.posts,
        newPostText: state.profilePage.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updateNewPostInStateActionCreate(text))
        },
        onPostMessage: () => {
            dispatch(addPostInProfileCationCreate())
        }

    }
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default ContainerMyPosts;