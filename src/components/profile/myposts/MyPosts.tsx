import React from "react";
import st from './MyPosts.module.css';
import {Post} from "./post/Post";

type PostType = {
    id?: number
    message: string
    likeCount: number
}

let posts: Array<PostType> = [{id: 1, message: 'Hello', likeCount: 15},
    {id: 2, message: 'Hey', likeCount: 15},
    {id: 3, message: 'Ho', likeCount: 15},
    {id: 4, message: 'He-he', likeCount: 4},]


export function MyPosts() {
    return (
        <div className={st.content}>
            <div className={st.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea>type here</textarea>
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
                <div className={st.posts}>
                    {posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)}
                </div>
            </div>
        </div>
    );
}