import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader';
import { Image } from 'react-bootstrap'

const ProfileInfo = (props) => {

    if (!props.profiles) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <img className={s.profileInfo_bg_img} src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt="" />
            <div className={s.descriptionBlock}>
                <div className={s.avatarUser}>
                    <Image src={props.profiles.photos.large} roundedCircle />
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;