import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader';
import SocialIcon from './CocialButton/SocialIcon';
import StatusProfileHook from './AboutMe_profillePge/StatusProfileHook';
import ProfileInfoBackground from "./Profile_Info_Background";
import ProfileInfoAvatar from "./Profile_Info_Avatar";
import ProfileInformationHook from "./ProfileInformation/ProfileOnformayionHook";



const ProfileInfo =  React.memo(function ProfileInfo (props)  {

    if (!props.profiles) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <ProfileInfoBackground />
            <div className={s.descriptionBlock}>
                <ProfileInfoAvatar uploadAvatar={props.profiles.photos.large}
                                   savePhotoOnServer={props.savePhotoOnServer}/>
                <SocialIcon {...props.profiles} />
            </div>
            <StatusProfileHook {...props}/>
            <ProfileInformationHook lookingForAJob={props.profiles.lookingForAJob}
                                    aboutMe={props.profiles.aboutMe}/>
        </div>


    )
})
export default ProfileInfo