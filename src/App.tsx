import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from "./components/music/Music";
import {News} from './components/news/News';
import {MainStateType, updateMessageContent} from "./redux/state";
import {Friends} from "./components/friends/Friends";

type AppPropsType = {
    appState: MainStateType
    addPost: () => void
    updateNewPostContent: (newPostContent: string) => void
    updateMessageContent: (newMessageContent: string) => void
    addMessage: () => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogsPage={props.appState.dialogsPage} addMessage={props.addMessage} updateMessageContent={props.updateMessageContent}/>}/>
                <Route /*exact*/ path='/profile' render={() => <Profile profilePage={props.appState.profilePage} addPost={props.addPost} updateNewPostContent={props.updateNewPostContent}/>}/>
                <Route /*exact*/ path='/news' render={() => <News/>}/>
                <Route /*exact*/ path='/music' render={() => <Music/>}/>
                <Route /*exact*/ path='/settings' render={() => <Settings/>}/>

            </div>
            <Friends friends={props.appState.sideBar.friends}/>
        </div>
    );
}
