import React from 'react'
import s from './User.module.css'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import {followedAPI} from './../../../api'

const User = (props) => {
    let userPhoto = 'https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png'
    return (
        <div className={s.item}>
            <Card style={{ width: '18rem' }}>
                <NavLink to={`/profile/${props.userID}`}>
                    <Card.Img variant="top" src={props.photos.large != null ? props.photos.large : userPhoto} />
                </NavLink>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        ID: {props.age}
                    </Card.Text>

                    {props.followed
                        ? <Button variant="primary" onClick={() => {
                           followedAPI.unfollow(props.userID)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.unfollow(props.userID)
                                    }
                                })
                        }}>UNFOLLOW</Button>
                        : <Button variant="primary" onClick={() => {
                            followedAPI.follow(props.userID)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.follow(props.userID)
                                    }
                                })
                        }}>FOLLOW</Button>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default User;    