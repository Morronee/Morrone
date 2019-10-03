import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader';
import { Image, Card, Button } from 'react-bootstrap'


const ProfileInfo = (props) => {

    if (!props.profiles) {
        return <Preloader />
    }
    let d = props.profiles

    let defaultUserAvatar = 'https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg'
    debugger
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
                <div className={s.socialBlock}>
                    <ul className={s.socialList}>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-globe-3.png&r=0&g=0&b=0" alt="12312"/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0" alt=""/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-facebook-4.png&r=0&g=0&b=0" alt=""/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-instagram-4.png&r=0&g=0&b=0" alt=""/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-twitter-4.png&r=0&g=0&b=0" alt=""/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-vk-4.png&r=0&g=0&b=0" alt=""/></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-youtube-9.png&r=0&g=0&b=0" alt=""/></li>
                    </ul>
                </div>
            </div>
            <div className={s.aboutMe}>
            <Card>
                <Card.Body><b>You worked?</b> {d.lookingForAJobDescription}</Card.Body>
            </Card> 
            </div>
        </div>
    )
}
export default ProfileInfo;