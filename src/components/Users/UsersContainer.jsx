import React from 'react';
import { connect } from 'react-redux'
import { followSuccess, unfollowSuccess, setCountTotalUsers, setIsLoading, setIsDisabled, getUsers,  } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader'
import {Redirect} from 'react-router-dom'
import { WithAuthRedirect } from '../common/WithAuthRedirect';
import { compose } from 'redux';


class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }

    render() {

        return <>
        
            {this.props.usersPage.isLoading ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.followSuccess}
                unfollow={this.props.unfollowSuccess}
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


// const UsersContainer = WithAuthRedirect(connect(mapStateToProps,
//     { followSuccess, unfollowSuccess, setCountTotalUsers, setIsLoading, setIsDisabled, getUsers })(UsersAPIComponent))

// export default UsersContainer;

export default compose(
    connect(mapStateToProps,
        { followSuccess, unfollowSuccess, setCountTotalUsers, setIsLoading, setIsDisabled, getUsers }),
    // WithAuthRedirect
)(UsersAPIComponent)