import React from 'react'
import {Redirect} from 'react-router-dom'

const UnLoginRedirect = (props) => {
        if (!props.auth) return <Redirect to='/login' />
}


export default UnLoginRedirect