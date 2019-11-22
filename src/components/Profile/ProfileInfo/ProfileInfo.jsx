import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader';
import { Image, Card, Button } from 'react-bootstrap'
import SocialIcon from './CocialButton/SocialIcon';
import StatusProfile from './AboutMe_profillePge/StatusProfile';


const ProfileInfo = (props) => {

    if (!props.profiles) {
        return <Preloader />
    }
    let d = props.profiles

    let defaultUserAvatar = 'https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg'
    return (

        <div className={s.profileInfo}>
            <img className={s.profileInfo_bg_img} src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt="" />
            <div className={s.descriptionBlock}>
                <div className={s.avatarUser}>
                    <Image src={d.photos.large != null ? d.photos.large : defaultUserAvatar} roundedCircle />
                </div>
                <div className={s.blockFullName}><h1>{d.fullName}</h1></div>
                <div className={s.followBlock}>
                    {props.followed ? <Button variant="primary" onClick={() => { props.follow(props.profiles.userId) }}>UNFOLLOW</Button>
                        : <Button variant="primary" onClick={() => { props.unfollow(props.profiles.userId) }}>FOLLOW</Button>}
                </div>
                
                <div className={s.profileStatus}></div>

                <SocialIcon {...props.profiles} />

            </div>
            <div className={s.aboutMe}>
                
                <StatusProfile {...props}/>
            </div>
        </div>
    )
}
export default ProfileInfo;