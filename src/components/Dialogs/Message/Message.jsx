import React from 'react';
import s from './Message.module.css';




const Message = (props) => {

    return (
        
        <div>
            <p className={s.item}>{props.textMessage}</p>
        </div>
    )
}
export default Message;