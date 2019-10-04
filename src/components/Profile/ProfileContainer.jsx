import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {setProfiles} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {follow, unfollow} from './../../redux/usersReducer'
import { profilesAPI } from '../../api';




class ProfileContainer extends React.Component { 
    
    componentDidMount() {
        let userId = this.props.match.params.userId

        let myProfile = 2

        if (!userId) {
            userId = myProfile
        }

        profilesAPI.setProfile(userId)
        .then(response => {
            this.props.setProfiles(response)
        })
    }
    
    render() {
        debugger
        return (
            <Profile {...this.props} profiles={this.props.profiles}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles
})

let DataUrlConCom = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfiles, follow, unfollow})(DataUrlConCom);