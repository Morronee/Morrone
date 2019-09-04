import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    return (
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}><img className={s.chat_img} src="http://s1.iconbird.com/ico/2013/6/271/w513h5131371296185messages.png" alt=""/>
                    {props.nickname}</NavLink>
                </div>
    )
}
export default Dialog;