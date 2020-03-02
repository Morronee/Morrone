import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileMessagesContainer from './Profile_Message_Wall/Profile_Messages_Container.jsx';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profiles={props.profiles}
                follow={props.follow}
                unfollow={props.unfollow}
                setStatus={props.setStatus}
                status={props.status}
                setNewStatusThunk={props.setNewStatusThunk}
                setStatusThunk={props.setStatusThunk}
                 savePhotoOnServer={props.savePhotoOnServer}/>
            <ProfileMessagesContainer />
        </div>
    )
}

export default Profile;