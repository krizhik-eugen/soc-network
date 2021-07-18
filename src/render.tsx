import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addPost, MainStateType} from "./redux/state";
import React from "react";

export const rerenderEntireTree = (state: MainStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={state}
                addPost={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}