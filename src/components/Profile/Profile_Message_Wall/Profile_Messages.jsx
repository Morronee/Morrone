import React from 'react';
import s from '././../Profile_Style/Profile_Messages_Wall/Profile_Message_Wall.module.css';
import ProfileMessageItem from "./Profile_Message_Item/Profile_Message_Item";
import {ReduxMessageWriteForm} from "../../common/FormsControls/FormsControl";

const ProfileMessages = (props) => {

    let propsCopy = [...props.posts]

    let stateReverse = propsCopy.reverse()

    let postEl = stateReverse.map(s => <ProfileMessageItem message={s.message} nick={s.nick} />);

    const onSubmit = (formData) => {
        props.onPostChange(formData.posts)
        props.onPostMessage()
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                 <ReduxMessageWriteForm onSubmit={onSubmit}/>
                {postEl}
            </div>
        </div>
    )
}



export default ProfileMessages;