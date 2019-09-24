import React from 'react';
import s from './Post.module.css';
import { Badge, Card } from 'react-bootstrap';

const Post = (props) => {
    return (
        // <div className={s.posts}>
        // <Toast>
        //     <Toast.Header>
        //         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        //         <strong className="mr-auto">{props.nick}</strong>
        //         <small>22 mins ago</small>
        //     </Toast.Header>
        //     <Toast.Body>{props.message}</Toast.Body>
        // </Toast>
        // </div>

        <div className={s.posts}>
            <Card>
                <Card.Header>{props.nick}<Badge variant="secondary">New</Badge></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                       
                        {props.message}
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

        // <div className={s.item}>
        //     <img src="http://www.colegioexpressao.com/assets/images/avatar-2.png" alt="" />
        //     <p>{props.message}</p>
        //     <p>Ser {props.nick}</p>
        // </div>
    )
}

export default Post;