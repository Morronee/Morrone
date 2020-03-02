import React from 'react';
import s from './../../Profile_Style/Profile_Messages_Wall/Profile_Message_Wall_Item.module.css';
import { Badge, Card } from 'react-bootstrap';

const ProfileMessageItem = (props) => {
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

export default ProfileMessageItem;