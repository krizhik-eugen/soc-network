import React from "react";
import {addNewPostContentAC, addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let dispatch = store.dispatch.bind(state)
                const addPost = () => dispatch(addPostAC())
                const addNewPostContent = (text: string) => dispatch(addNewPostContentAC(text))

                return (<MyPosts
                    addPost={addPost}
                    addNewPostContent={addNewPostContent}
                    posts={state.profilePage.posts}
                    newPostContent={state.profilePage.newPostContent}/>)
            }
            }
        </StoreContext.Consumer>
    );
}