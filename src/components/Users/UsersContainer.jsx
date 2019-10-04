import React from 'react';
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setCountTotalUsers, setIsLoading, setIsDisabled } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Preloader from '../common/Preloader';
import {usersAPI} from './../../api.js' 


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.setIsLoading(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.items)
                this.props.setCountTotalUsers(response.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize).then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.items)
            })
    }


    render() {
        return <>
        
            {this.props.usersPage.isLoading ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setIsDisabled={this.props.setIsDisabled}
            />
        </>
    }
}



const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

// const dispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsers: (totalUsers) => {
//             dispatch(setCountTotalUsersAC(totalUsers))
//         },
//         setLoadingUsers: (loading) => {
//             dispatch(setIsLoadingAC(loading))
//         }
//     }
// }


const UsersContainer = connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setCountTotalUsers, setIsLoading, setIsDisabled })(UsersAPIComponent)

export default UsersContainer;