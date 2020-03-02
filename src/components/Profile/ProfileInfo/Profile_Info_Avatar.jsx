import React from 'react';
import s from './ProfileInfo.module.css'
import {Image} from "react-bootstrap";

const ProfileInfoAvatar = ({uploadAvatar, savePhotoOnServer}) => {



    let defaultUserAvatar = 'https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg'

    let userAvatar = (uploadAvatar === null ? defaultUserAvatar : uploadAvatar)

    const selectAvatar = (e) =>  {
        savePhotoOnServer(e.target.files[0])
    }

    return <div>
                <div className={s.avatarUser}>
                    <Image src={userAvatar} roundedCircle />
                </div>
        { userAvatar === defaultUserAvatar ? <input type={"file"} onChange={selectAvatar}/> : null}
    </div>
}

export default ProfileInfoAvatar