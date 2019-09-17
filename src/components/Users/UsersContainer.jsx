import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';

debugger;
const mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users
    }
}
debugger
const mapDispatchToProps = (dispatch) => {
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

const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users)

export default ContainerUsers;