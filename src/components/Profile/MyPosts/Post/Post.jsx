import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="http://www.colegioexpressao.com/assets/images/avatar-2.png" alt=""/>
            <p>{props.message}</p>
            <p>Ser {props.nick}</p>
        </div>
    )
}

export default Post;