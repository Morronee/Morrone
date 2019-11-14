import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { authAPI } from '../../api';





const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'email'} component={'input'} placeholder={'Login'} type="login" /></div>
                <div><Field name={'password'} component={'input'} placeholder={'Password'} type="password" /></div>
                <div><Field name={'rememberMe'} component={'input'} type={"checkbox"} /> Remember me</div>
                <div><button>Login</button></div>
            </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        authAPI.login(formData)
        authAPI.authMe()
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login