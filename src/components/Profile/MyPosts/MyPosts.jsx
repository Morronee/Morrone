import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostInProfileCationCreate, updateNewPostInStateActionCreate } from '../../../redux/profileReducer';
import { InputGroup, FormControl, Button, Toast } from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form'


const PostsForm = (props) => {
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

const ReduxPostsForm = reduxForm({form: 'posts'})(PostsForm)


const MyPosts = (props) => {

    let propsCopy = [...props.posts]

    let stateReverse = propsCopy.reverse()

    let postEl = stateReverse.map(s => <Post message={s.message} nick={s.nick} />);

    // let newPostElem = React.createRef();

    // let PostChange = () => {
    //     let text = newPostElem.current.value;
    //     props.onPostChange(text);
    // }

    // let postMessage = () => {
    //     if (newPostElem.current.value != '') {
    //         props.onPostMessage()
    //         // newPostElem.current.value = ''
    //     }
    // }

    const onSubmit = (formData) => {
        props.onPostChange(formData.posts)
        props.onPostMessage()
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                {/* <textarea ref={newPostElem}
                    onChange={PostChange}
                    value={props.newPostText} /> */}
                {/* <button onClick={postMessage}>Add posts</button> */}

            </div>
            <div>
                 <ReduxPostsForm onSubmit={onSubmit}/>   
                {postEl}
            </div>
        </div>
    )
}



export default MyPosts;