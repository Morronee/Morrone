import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import { Button, ButtonGroup, CardGroup } from 'react-bootstrap';
import * as axios from 'axios';


class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let userElem = this.props.usersPage.users.map(u =>
            <User
                followed={u.followed}
                name={u.name}
                userID={u.id}
                age={u.id}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                photos={u.photos} />)

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)

        let pages = [ ]
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <h1>Users</h1>
            <div>

            </div>
            <div className={s.pegi}>
                <ButtonGroup className="mr-2" aria-label="First group">
                    {pages.map(p => <Button onClick={ (e) => {this.onPageChanged(p)} } className={this.props.usersPage.currentPage === p && s.selected}>{p}</Button>)}
                </ButtonGroup>
            </div>
            <CardGroup>
                {userElem}
            </CardGroup>
        </div>
    }
}

export default Users;