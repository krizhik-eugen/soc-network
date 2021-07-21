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
import {StoreType} from "./redux/state";
import {Friends} from "./components/friends/Friends";

type AppPropsType = {
    appState: StoreType
}


export const App: React.FC<AppPropsType> = (props) => {
    const state = props.appState.getState()
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}
                                                                        addMessage={props.appState.addMessage.bind(props.appState)}
                                                                        updateMessageContent={props.appState.updateMessageContent.bind(props.appState)}/>}/>
                <Route /*exact*/ path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                        addPost={props.appState.addPost.bind(props.appState)}
                                                                        updateNewPostContent={props.appState.updateNewPostContent.bind(props.appState)}/>}/>
                <Route /*exact*/ path='/news' render={() => <News/>}/>
                <Route /*exact*/ path='/music' render={() => <Music/>}/>
                <Route /*exact*/ path='/settings' render={() => <Settings/>}/>

            </div>
            <Friends friends={state.sideBar.friends}/>
        </div>
    );
}
