import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css';
import {Post} from "./post/Post";
import {DispatchTypes, ProfilePageType} from "../../../redux/state";
import {addNewPostContentAC, addPostAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchTypes) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsItems = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const addNewPostContent = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(addNewPostContentAC(e.currentTarget.value))

    return (
        <div className={styles.content}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea placeholder={'type here'} value={props.profilePage.newPostContent}
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