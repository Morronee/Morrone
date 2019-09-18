import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const dispatchToProps = (dispatch) => {

}

const UsersContainer = connect(mapStateToProps, dispatchToProps) (Users)

export default UsersContainer;