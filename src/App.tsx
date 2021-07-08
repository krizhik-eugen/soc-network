import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from "./components/music/Music";
import {News} from './components/news/News';
import {DialogType, MessageType, PostType} from "./index";

type AppPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

export const App: React.FC<AppPropsType> = (props) => {
    return (<BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route /*exact*/ path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route /*exact*/ path='/news' render={() => <News />}/>
                    <Route /*exact*/ path='/music' render={() => <Music/>}/>
                    <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
