import React from 'react';
import Dialogs from './Dialogs';
import { addMessageInStateActionCreate, addMessageInDialogActionCreate } from '../../redux/dialogReducer';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../common/WithAuthRedirect';
import { compose } from 'redux';



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
        sendMessage: (textEl) => {
            dispatch(addMessageInDialogActionCreate(textEl))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
    )(Dialogs)


// const ContainerDialogs = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps) (Dialogs));

// export default ContainerDialogs;