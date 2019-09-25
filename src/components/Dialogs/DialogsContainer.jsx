import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { addMessageInStateActionCreate, addMessageInDialogActionCreate } from '../../redux/dialogReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        messageText: (textEl) => {
            dispatch(addMessageInStateActionCreate(textEl))
        },
        sendMessage: () => {
            dispatch(addMessageInDialogActionCreate())
        }
    }
}

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default ContainerDialogs;