import React from 'react';
import styles from './FormsControl.module.css'

export const Input = ({input, meta, ...props}) => {

    const hintError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hintError ? styles.error : '')}>
            <div>
                <input  {...input } {...props} /> 
            </div>
            <div>
                {hintError && <span >{meta.error}</span>}
            </div>
            
        </div>
    )
}
