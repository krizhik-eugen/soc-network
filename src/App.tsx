import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from "./components/music/Music";
import {News} from './components/news/News';
import {Friends} from "./components/friends/Friends";
import { DialogsContainer } from './components/dialogs/DialogsContainer';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route /*exact*/ path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route /*exact*/ path='/profile' render={() => <Profile/>}/>
                <Route /*exact*/ path='/news' render={() => <News/>}/>
                <Route /*exact*/ path='/music' render={() => <Music/>}/>
                <Route /*exact*/ path='/settings' render={() => <Settings/>}/>

            </div>
            <Friends />
        </div>
    );
}
