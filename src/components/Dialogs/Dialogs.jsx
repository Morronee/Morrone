import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form'

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
                <Field name={'message'} component={'input'}
                    placeholder="Write you message"
                    // aria-label="Recipient's username"
                    // aria-describedby="basic-addon2"
                    // ref={textMessageElem}
                    // onChange={onMessageText}
                    // value={props.dialogsPage.dialogsPage.newMessage}
                />
                <InputGroup.Append>
                    <button>SEND</button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'dialogs'})(MessageForm)

const Dialogs = (props) => {
    let dialogsEl = props.dialogsPage.dialogsPage.dialogsData.map(d => <Dialog nickname={d.nickname} id={d.id} />);
    let messageEl = props.dialogsPage.dialogsPage.messagesData.map(m => <Message nick={m.nick} textMessage={m.message} id={m.id} />);

    const onSubmit = (formData) => {
        console.log(props)
        props.messageText(formData.message)
        props.sendMessage()
    }



    // let textMessageElem = React.createRef();

    // let onMessageText = () => {
    //     let textEl = textMessageElem.current.value;
    //     props.messageText(textEl)
    // }

    // let onSendMessage = () => {
    //     if (textMessageElem.current.value != '') {
    //         props.sendMessage();
    //         textMessageElem.current.value = '';
    //     }
    // }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsEl}
            </div>

            <div className={s.mesagges_items}>
                {messageEl}
            </div>
            <div className={s.message_write}>
                <ReduxMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Dialogs;