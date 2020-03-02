import React from 'react';
import { addPostInProfileCationCreate, updateNewPostInStateActionCreate } from '../../../redux/profileReducer';
import { connect } from 'react-redux'
import ProfileMessages from "./Profile_Messages";

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

const ProfileMessagesContainer = connect(mapStateToProps, mapDispatchToProps) (ProfileMessages);


export default ProfileMessagesContainer;