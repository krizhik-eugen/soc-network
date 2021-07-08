import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

export type DialogType = {
    id: string
    name: string
}

let dialogs = [{id: '1', name: 'Dimych'},
    {id: '2', name: 'Eugen'},
    {id: '3', name: 'Margo'},
    {id: '4', name: 'Natali'},
    {id: '5', name: 'Bro'}]

export type MessageType = {
    id: number
    message: string
}

let messages = [{id: 1, message: 'Yo'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Great day!'}]

export type PostType = {
    id: number
    message: string
    likeCount: number
}

let posts = [{id: 1, message: 'Hello', likeCount: 15},
    {id: 2, message: 'Hey', likeCount: 15},
    {id: 3, message: 'Ho', likeCount: 15},
    {id: 4, message: 'He-he', likeCount: 4}]


ReactDOM.render(
    <React.StrictMode>
        <App
            dialogs={dialogs}
            messages={messages}
            posts={posts}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
