import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, MainStateType, updateMessageContent, updateNewPostContent} from "./redux/state";
import React from "react";

export const rerenderEntireTree = (state: MainStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={state}
                addPost={addPost}
                updateNewPostContent={updateNewPostContent}
                addMessage={addMessage}
                updateMessageContent={updateMessageContent}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}