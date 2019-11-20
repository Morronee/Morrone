import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validations/validators';
import { Input } from '../common/FormsControls/FormsControl';
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'





const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} component={Input} placeholder={'Login'} type="login" validate={[required]} /></div>
            <div><Field name={'password'} component={Input} placeholder={'Password'} type="password" validate={[required]}/></div>
            <div><Field name={'rememberMe'} component={Input} type={"checkbox"} /> Remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {

        // Тут происходит обработка и совершение действий 
        // с данными полученными из формы

        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }


    return (
        <div>
            <h1>Login</h1>

            {/* Тут мы отображаем нашу форму и передаем в нее обработку  */}
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

const maStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(maStateToProps, {login}) (Login)