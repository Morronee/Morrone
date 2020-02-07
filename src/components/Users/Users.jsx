import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import { CardGroup, Pagination } from 'react-bootstrap';
import Paginator from "./Paginator";


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


    return (
        <div>
            <h1>Users</h1>
            <div>
            </div>
            <div className={s.pegi}>
                <Paginator totalUsersCount={props.usersPage.totalUsersCount} pageSize={props.usersPage.pageSize} currentPage={props.usersPage.currentPage} onPageChanged={props.onPageChanged}/>
            </div>
            <CardGroup>
                {userElem}
            </CardGroup>
        </div>
    )
}

export default Users;