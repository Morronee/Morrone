import React from 'react';
import s from './../ProfileInfo.module.css'
import { InputGroup, FormControl, Button }  from 'react-bootstrap';


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
                    ? <div className={s.statusItem} onBlur={this.editStatusDisable}><b>Edit Status</b><input autoFocus={true} className={s.inputStatus} placeholder={d.lookingForAJobDescription}></input> </div> 
                    : <div className={s.statusItem} onDoubleClick={this.editStatusActive}><b>Status</b> {d.lookingForAJobDescription}</div>} 
            </div>
        )
    }
}
export default StatusProfile;