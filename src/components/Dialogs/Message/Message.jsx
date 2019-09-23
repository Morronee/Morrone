import React from 'react';
import s from './Message.module.css';
import { Toast } from 'react-bootstrap'




const Message = (props) => {

    return (
        <div className={s.item}>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{props.nick}</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{props.textMessage}</Toast.Body>
            </Toast>
        </div>
        // <div>
        //     <p className={s.item}>{props.textMessage}</p>
        // </div>
    )
}
export default Message;