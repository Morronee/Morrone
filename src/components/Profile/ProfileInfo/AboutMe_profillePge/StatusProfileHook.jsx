import React, {useState} from 'react';
import s from './../ProfileInfo.module.css'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../../../common/FormsControls/FormsControl'

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='status' component={Input} autoFocus={true} placeholder={props.placeStatus}/>
            </div>
        </form>
    )
}

const ReduxStatusForm = reduxForm({form: 'status'})(StatusForm)


const StatusProfileHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivationEditMode = () => {
        setEditMode(false)
        props.setNewStatusThunk(status)
    }

    const onChangeStatus = (formData) => {
        setStatus(formData.status)
    }



        return (
            <div className={s.status} >
                {editMode
                    ? <div className={s.statusItem} onBlur={deactivationEditMode}><b>Edit Status</b><ReduxStatusForm onChange={onChangeStatus} placeStatus={props.status}/></div> 
                    : <div className={s.statusItem} onDoubleClick={activateEditMode}><b>Status</b> {props.status}</div>} 
            </div>
        )
    }
export default StatusProfileHook;

