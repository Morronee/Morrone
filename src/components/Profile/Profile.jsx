import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ContainerMyPosts from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profiles={props.profiles}
                follow={props.follow}
                unfollow={props.unfollow}
                setStatus={props.setStatus}
                status={props.status} />
            <ContainerMyPosts />
        </div>
    )
}

export default Profile;