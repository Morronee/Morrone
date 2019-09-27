import React from 'react';
import s from './Post.module.css';
import { Badge, Card } from 'react-bootstrap';

const Post = (props) => {
    return (

        <div className={s.posts}>
            <Card>
                <Card.Header>{props.nick}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {props.message}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post;