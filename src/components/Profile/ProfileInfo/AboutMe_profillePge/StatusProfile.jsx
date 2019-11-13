import React from 'react';
import s from './../ProfileInfo.module.css'


class StatusProfile extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.setNewStatusThunk(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }

    render() {
        let d = this.props.profiles
        return (
            <div className={s.status} >
                {this.state.editMode 
                    ? <div className={s.statusItem} onBlur={this.editStatusDisable}><b>Edit Status</b><input onChange={this.onStatusChange} autoFocus={true} className={s.inputStatus} placeholder={this.state.status}></input> </div> 
                    : <div className={s.statusItem} onDoubleClick={this.editStatusActive}><b>Status</b> {this.props.status}</div>} 
            </div>
        )
    }
}
export default StatusProfile;