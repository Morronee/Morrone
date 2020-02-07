import React, {useState} from 'react';
import s from './Users.module.css';
import User from './User/User';
import { CardGroup, Pagination } from 'react-bootstrap';



let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftArrowCount = (portionNumber - 1) * portionSize + 1
    let rightArrowCount = portionNumber * portionSize

    return (
        <div>
                <Pagination>
                    {portionNumber > 1 &&
                    <Pagination.First onClick={() => {setPortionNumber(1)}}/>}
                        {portionNumber > 1 &&
                        <Pagination.Prev onClick={() => {setPortionNumber(portionNumber - 1)}}/>}
                            {pages
                                .filter(p => p >= leftArrowCount && p <= rightArrowCount)
                                .map(p =>
                                    <Pagination.Item
                                        key={p}
                                        onClick={(e) => { onPageChanged(p) }}
                                        active={currentPage === p && true}>{p}
                                    </Pagination.Item>)}

                            {portionNumber < portionCount &&
                            <Pagination.Next onClick={() => {setPortionNumber(portionNumber + 1)}}/>}
                        {portionNumber < portionCount &&
                    <Pagination.Last onClick={() => {setPortionNumber(portionCount)}}/>}
                </Pagination>
        </div>
    )
}

export default Paginator;