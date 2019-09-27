import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {setProfiles} from './../../redux/profileReducer'
import {connect} from 'react-redux'



class ProfileContainer extends React.Component { 
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => {
            this.props.setProfiles(response.data)
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

export default connect(mapStateToProps, {setProfiles})(ProfileContainer);