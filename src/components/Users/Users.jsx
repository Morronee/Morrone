import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import { Button, ButtonGroup, CardGroup, Pagination } from 'react-bootstrap';
import * as axios from 'axios';


let Users = (props) => {

    let userElem = props.usersPage.users.map(u =>
                

        <User
            followed={u.followed}
            name={u.name}
            userID={u.id}
            age={u.id}
            follow={props.follow}
            unfollow={props.unfollow}
            photos={u.photos}
            setIsDisabled={props.setIsDisabled}
            isDisabled={props.usersPage.isDisabled} />)

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
            </div>
            <div className={s.pegi}>
                {/* <ButtonGroup className="mr-2" aria-label="First group">
                    {pages.map(p => <Button onClick={(e) => { props.onPageChanged(p) }} className={props.usersPage.currentPage === p && s.selected}>{p}</Button>)}
                </ButtonGroup> */}
                <Pagination>
                        {pages.map(p => <Pagination.Item onClick={(e) => { props.onPageChanged(p) }} active={props.usersPage.currentPage === p && true}>{p}</Pagination.Item>)}
                </Pagination>
            </div>
            <CardGroup>
                {userElem}
            </CardGroup>
        </div>
    )
}

export default Users;