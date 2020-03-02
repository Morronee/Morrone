import React, {useState, useEffect} from 'react';
import s from './../ProfileInfo.module.css'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../../../common/FormsControls/FormsControl'

// const StatusForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name='status' component={Input} autoFocus={true} placeholder={props.placeStatus}/>
//             </div>
//         </form>
//     )
// }
//
// const ReduxStatusForm = reduxForm({form: 'status'})(StatusForm)


const ProfileInformationHook = React.memo(props => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
            <div>
                <h1>Info</h1>
                {!editMode ?
                    <div>
                        {props.aboutMe === null ? null : <div>About me: <span>{props.aboutMe}</span></div>}
                        <div>Loocking for a job: <span>{props.lookingForAJob ? 'Yes, am looking' : 'No'}</span></div>
                        <button onClick={activateEditMode}>Edit profile</button>
                    </div>
                :
                    <div>
                        <div>About me: <input type='text'/></div>
                        <div>Loocking for a job: <span><input type="checkbox"/></span></div>
                        <button onClick={deactivateEditMode}>Save profile</button>
                    </div>}
            </div>
        )
    })
export default ProfileInformationHook;

