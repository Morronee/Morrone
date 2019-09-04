import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
    <div className={s.profileInfo}>
        <img src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt=""/>
        <div className={s.descriptionBlock}>
          ava + disc
          </div>
    </div>
    )
}

export default ProfileInfo;