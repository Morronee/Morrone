import React from 'react'
import s from './User.module.css'
import { Button, Card } from 'react-bootstrap'

const User = (props) => {
    debugger;
    return (
        <div className={s.item}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/0c/9d/58/0c9d58852aa21da3825de709a8c55480.jpg" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Age: {props.age}
                    </Card.Text>
                    {props.followed ? <Button variant="primary" onClick={ () => {props.follow(props.userID)}}>UNFOLLOW</Button> 
                                    : <Button variant="primary" onClick={ () => {props.unfollow(props.userID)}}>FOLLOW</Button>}
                    {/* <Button variant="primary">FOLLOW</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default User;