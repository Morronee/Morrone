import React from 'react';
import s from './../ProfileInfo.module.css'
import { profilesAPI } from '../../../../api';


class StatusProfile extends React.Component {

    state = {
        editMode: false
    }

    editStatusActive = () => {
        this.setState({
            editMode: true
        })
    }
    editStatusDisable = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        let d = this.props.profiles
        return (
            <div className={s.status} >
                {this.state.editMode 
                    ? <div className={s.statusItem} onBlur={this.editStatusDisable}><b>Edit Status</b><input autoFocus={true} className={s.inputStatus} placeholder={this.props.status}></input> </div> 
                    : <div className={s.statusItem} onDoubleClick={this.editStatusActive}><b>Status</b> {this.props.status}</div>} 
            </div>
        )
    }
}
export default StatusProfile;