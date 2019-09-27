import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {setProfiles} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



class ProfileContainer extends React.Component { 
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then(response => {
            this.props.setProfiles(response.data)
            debugger
        })
    }
    
    render() {
        return (
            <Profile {...this.props} profiles={this.props.profiles}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles
})

let DataUrlConCom = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfiles})(DataUrlConCom);