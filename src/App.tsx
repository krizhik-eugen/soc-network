import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {FriendsContainer} from './components/friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route /*exact*/ path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route /*exact*/ path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route /*exact*/ path='/users' render={() => <UsersContainer/>}/>
                <Route /*exact*/ path='/news' render={() => <News/>}/>
                <Route /*exact*/ path='/music' render={() => <Music/>}/>
                <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
            </div>
            <FriendsContainer/>
        </div>
    );
}
