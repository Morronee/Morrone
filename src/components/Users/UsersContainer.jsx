import React from 'react';
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setCountTotalUsers, setIsLoading } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Preloader from '../common/Preloader';


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setCountTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
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
    { follow, unfollow, setUsers, setCurrentPage, setCountTotalUsers, setIsLoading}) (UsersAPIComponent)

export default UsersContainer;