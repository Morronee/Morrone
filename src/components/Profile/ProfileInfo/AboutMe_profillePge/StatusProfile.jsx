import React from 'react';
import s from './../ProfileInfo.module.css'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../../../common/FormsControls/FormsControl'

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='status' component={Input} />
            </div>
        </form>
    )
}

const ReduxStatusForm = reduxForm({form: 'status'})(StatusForm)
class StatusProfile extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidMount() {
        this.props.setStatusThunk(1775)
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
        this.props.setStatusThunk(1775)
        
    }
    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }

    onChange = (formData) => {
        this.setState({status : formData.status})
    }

    render() {
        let d = this.props.profiles
        return (
            <div className={s.status} >
                {this.state.editMode 
                    ? <div className={s.statusItem} onBlur={this.editStatusDisable}><b>Edit Status</b><ReduxStatusForm onChange={this.onChange}/></div> 
                    : <div className={s.statusItem} onDoubleClick={this.editStatusActive}><b>Status</b> {this.props.status}</div>} 
            </div>
        )
    }
}
export default StatusProfile;

{/* <input onChange={this.onStatusChange} autoFocus={true} className={s.inputStatus} placeholder={this.state.status}></input> */}