import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsItems = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    const newTextRef = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newTextRef.current) {
            props.addPost(newTextRef.current.value)
            newTextRef.current.value = ''
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newTextRef} placeholder={'type here'}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add</button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {postsItems}
                </div>
            </div>
        </div>
    );
}