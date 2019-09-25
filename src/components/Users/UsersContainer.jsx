import React from 'react';
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setCountTotalUsersAC } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <Users 
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            />
            
    }
}



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

const UsersContainer = connect(mapStateToProps, dispatchToProps) (UsersAPIComponent)

export default UsersContainer;