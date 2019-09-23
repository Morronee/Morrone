import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const dispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, dispatchToProps) (Users)

export default UsersContainer;