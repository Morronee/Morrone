import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import { Button, ButtonToolbar, CardGroup } from 'react-bootstrap';
import * as axios from 'axios';


class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        return <div>
            <h1>Users</h1>
            <CardGroup>
                {this.props.usersPage.users.map(u => <User
                    followed={u.followed}
                    name={u.name}
                    userID={u.id}
                    age={u.id}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    photos={u.photos} />)}
            </CardGroup>
        </div>
    }
}

export default Users;