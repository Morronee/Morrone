import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostInProfileCationCreate, updateNewPostInStateActionCreate } from '../../../redux/profileReducer';
import { InputGroup, FormControl, Button, Toast }  from 'react-bootstrap';



const MyPosts = (props) => {
    
    let propsCopy = [...props.posts]

    let stateReverse =  propsCopy.reverse()

    let postEl = stateReverse.map(s => <Post message={s.message} nick={s.nick} />);

    let newPostElem = React.createRef();

    let PostChange = () => {
        let text = newPostElem.current.value;
        props.onPostChange(text);
    }

    let postMessage = () => {
        if (newPostElem.current.value != '') {
            props.onPostMessage()
            // newPostElem.current.value = ''
        }
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                {/* <textarea ref={newPostElem}
                    onChange={PostChange}
                    value={props.newPostText} /> */}
                {/* <button onClick={postMessage}>Add posts</button> */}

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Write you message"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        ref={newPostElem}
                        onChange={PostChange}
                        value={props.newPostText}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={postMessage}>SEND POST</Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
            <div>
                
                {postEl}
            </div>
        </div>
    )
}



export default MyPosts;