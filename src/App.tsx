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


export function App() {
    return (<BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route /*exact*/ path='/dialogs' render={() => <Dialogs/>}/>
                    <Route /*exact*/ path='/profile' render={() => <Profile/>}/>
                    <Route /*exact*/ path='/news' render={() => <News/>}/>
                    <Route /*exact*/ path='/music' render={() => <Music/>}/>
                    <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
