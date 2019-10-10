import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {
    let dialogsEl = props.dialogsPage.dialogsPage.dialogsData.map( d => <Dialog nickname={d.nickname} id={d.id} /> );
    let messageEl = props.dialogsPage.dialogsPage.messagesData.map( m => <Message nick={m.nick} textMessage={m.message} id={m.id} />);
    
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
                    {/* <textarea 
                        placeholder='Напишите сообщение...' 
                        ref={textMessageElem} 
                        onChange={onMessageText}
                        value={props.dialogsPage.dialogsPage.newMessage} >
                    </textarea>
                    <button className={s.message_send} onClick={onSendMessage}>Отправить</button> */}
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Write you message"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        ref={textMessageElem}
                        onChange={onMessageText}
                        value={props.dialogsPage.dialogsPage.newMessage}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={onSendMessage}>SEND</Button>
                    </InputGroup.Append>
                </InputGroup>
                </div>
            </div>
        )
}

export default Dialogs;