import React from 'react';
import styles from './FormsControl.module.css'
import {InputGroup} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";

export const Input = ({input, meta, ...props}) => {


    const hintError = meta.touched && meta.error
    //создадим переменную что бы не дублировать код
    //услвоия: если есть текст ошибки и или поле было активированно


    return (
        <div className={styles.formControl + ' ' + (hintError ? styles.error : '')}>
            {/* проверяем, если есть ошибка и или мы бросили форму, то добавим клас styles.error
            который окрасит наш input красным цветом */}
            <div>
                <input  {...input } {...props} />
                {/* раскукоживаем все данные */}
            </div>
            <div>
                {hintError && <span >{meta.error}</span>}
                {/* проверяем, если есть ошибка и или мы бросили форму, то
                отобразим span с текстом ошибки */}
            </div>
            
        </div>
    )
}
const MessageWriteForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <InputGroup className="mb-3">
                <Field
                    name={'posts'}
                    component={'input'}
                    placeholder="Write you message"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <button>SEND POST</button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    )
}

export const ReduxMessageWriteForm = reduxForm({form: 'posts'})(MessageWriteForm)
