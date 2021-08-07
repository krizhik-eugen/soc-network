import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    addPost: () => void
    addNewPostContent: (text: string) => void
    posts: Array<PostType>
    newPostContent: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsItems = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    const addPost = () => props.addPost()
    const addNewPostContent = (e: ChangeEvent<HTMLTextAreaElement>) => props.addNewPostContent(e.currentTarget.value)

    return (
        <div className={styles.content}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea placeholder={'type here'} value={props.newPostContent}
                                  onChange={addNewPostContent}/>
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