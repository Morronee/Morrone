import React from 'react';
import styles from './FormsControl.module.css'

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
