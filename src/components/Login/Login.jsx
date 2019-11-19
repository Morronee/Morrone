import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { authAPI } from '../../api';
import { required } from '../../utils/validations/validators';





const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} component={'input'} placeholder={'Login'} type="login" validate={[required]} /></div>
            <div><Field name={'password'} component={'input'} placeholder={'Password'} type="password" /></div>
            <div><Field name={'rememberMe'} component={'input'} type={"checkbox"} /> Remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {

        // Тут происходит обработка и совершение действий 
        // с данными полученными из формы

        authAPI.login(formData)
        authAPI.authMe()
    }

    return (
        <div>
            <h1>Login</h1>

            {/* Тут мы отображаем нашу форму и передаем в нее обработку  */}
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login