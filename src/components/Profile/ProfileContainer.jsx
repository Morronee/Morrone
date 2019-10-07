import React from 'react';
import Profile from './Profile';
import {setProfilesThunk} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {follow, unfollow} from './../../redux/usersReducer'




class ProfileContainer extends React.Component { 
    
    componentDidMount() {
        this.props.setProfilesThunk(this.props.match.params.userId)
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

export default connect(mapStateToProps, {setProfilesThunk, follow, unfollow})(DataUrlConCom);