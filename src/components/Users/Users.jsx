import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import { Button, ButtonToolbar, CardGroup } from 'react-bootstrap';
import * as axios from 'axios';


const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)


        })
    }

    let userElem = props.usersPage.users.map(u => <User
        followed={u.followed}
        name={u.name}
        userID={u.id}
        age={u.id}
        follow={props.follow}
        unfollow={props.unfollow}
    />)
    return (
        <div>
            <h1>Users</h1>
            <CardGroup>
                {userElem}
            </CardGroup>
        </div>
    )
}

export default Users;