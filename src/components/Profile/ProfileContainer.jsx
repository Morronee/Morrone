import React from 'react';
import Profile from './Profile';
import {setProfilesThunk, setStatusThunk} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {follow, unfollow} from './../../redux/usersReducer'
import { compose } from 'redux';




class ProfileContainer extends React.Component { 
    
    componentDidMount() {
        this.props.setProfilesThunk(this.props.match.params.userId)
        this.props.setStatusThunk(this.props.match.params.userId)
    }
    
    render() {
       

        return (
            <Profile {...this.props} profiles={this.props.profiles}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles,
    status: state.profilePage.status,
    auth: state.auth.isAuth
})

// let DataUrlConCom = withRouter(ProfileContainer)

// export default WithAuthRedirect(connect(mapStateToProps, {setProfilesThunk, follow, unfollow})(DataUrlConCom))

export default compose(
    connect(mapStateToProps, {setStatusThunk, setProfilesThunk, follow, unfollow}),
    withRouter,
    // WithAuthRedirect
    )(ProfileContainer)