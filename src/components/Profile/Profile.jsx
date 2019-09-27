import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ContainerMyPosts from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    
    return (
    <div className={s.content}>
        <ProfileInfo profiles={props.profiles} />
        <ContainerMyPosts />
    </div>
    )
}

export default Profile;