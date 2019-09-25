import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setCountTotalUsersAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setCountTotalUsersAC(totalUsers))
        }
    }
}

const UsersContainer = connect(mapStateToProps, dispatchToProps) (Users)

export default UsersContainer;