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
import {addPost, MainStateType} from "./redux/state";
import {Friends} from "./components/friends/Friends";

type AppPropsType = {
    appState: MainStateType
    addPost: (newPostMessage: string) => void

}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsPage}/>}/>
                <Route /*exact*/ path='/profile' render={() => <Profile posts={props.appState.profilePage} addPost={addPost}/>}/>
                <Route /*exact*/ path='/news' render={() => <News/>}/>
                <Route /*exact*/ path='/music' render={() => <Music/>}/>
                <Route /*exact*/ path='/settings' render={() => <Settings/>}/>

            </div>
            <Friends friends={props.appState.sideBar.friends}/>
        </div>
    );
}
