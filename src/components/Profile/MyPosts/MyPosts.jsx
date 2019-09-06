import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostInProfileCationCreate, updateNewPostInStateActionCreate } from '../../../redux/profileReducer';




const MyPosts = (props) => {
    // let postEl = props.profilePage.profilePage.posts.map(s => <Post message={s.message} nick={s.nick} />);
    let postEl = props.posts.map(s => <Post message={s.message} nick={s.nick} />);

    let newPostElem = React.createRef();

    let PostChange = () => {
        let text = newPostElem.current.value;
        props.onPostChange(text);
    };

    let postMessage = () => {
        if (newPostElem.current.value != '') {
            props.onPostMessage()
            // newPostElem.current.value = ''
        }
    };

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElem}
                    onChange={PostChange}
                    value={props.newPostText} />
                <button onClick={postMessage}>Add posts</button>
            </div>
            <div>
                {postEl}
            </div>
        </div>
    )
}



export default MyPosts;