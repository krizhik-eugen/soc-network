import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsItems = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={styles.content}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea>type here</textarea>
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {postsItems}
                </div>
            </div>
        </div>
    );
}