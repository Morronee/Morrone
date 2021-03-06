import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageInStateActionCreate, addMessageInDialogActionCreate } from '../../redux/dialogReducer';

const Dialogs = (props) => {
    debugger;
    let dialogsEl = props.dialogsPage.dialogsData.map( d => <Dialog nickname={d.nickname} key={d.id} id={d.id} /> );
    let messageEl = props.dialogsPage.messagesData.map( m => <Message textMessage={m.message} key={m.id} id={m.id} />);
    
    let textMessageElem = React.createRef();
    
    let onMessageText = () => {
        let textEl = textMessageElem.current.value;
        props.messageText(textEl)
    }

    let onSendMessage = () => {
        if (textMessageElem.current.value != '') {
        props.sendMessage();
        textMessageElem.current.value = '';
        }
    }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    { dialogsEl }
                </div>

                <div className={s.mesagges_items}>
                    { messageEl }
                </div>
                <div className={s.message_write}>
                    <textarea 
                        placeholder='Напишите сообщение...' 
                        ref={textMessageElem} 
                        onChange={onMessageText}
                        value={props.dialogsPage.newMessage} >
                    </textarea>
                    <button className={s.message_send} onClick={onSendMessage}>Отправить</button>
                </div>
            </div>
        )
}

export default Dialogs;