import React from 'react';
import { WithAuthRedirect } from '../common/WithAuthRedirect';
// import s from './Setting.module.css';

const Setting = (props) => {
    return (
        <div>Setting</div>
    )
}

export default (WithAuthRedirect(Setting));