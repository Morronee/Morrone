import React from 'react';
import axios from "axios";
// import s from './News.module.css';

class News extends React.Component {

    componentDidMount() {
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
           console.log(response)
           alert('123')
       })
    }

    render() {


        return (
            <div>
                {this.response}
            </div>
        )
    }
}



export default News;