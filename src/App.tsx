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
import {MainStateType} from "./redux/state";

type AppPropsType = {
    appState: MainStateType
}

export const App: React.FC<AppPropsType> = (props) => {
    return (<BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsPage}/>}/>
                    <Route /*exact*/ path='/profile' render={() => <Profile posts={props.appState.profilePage}/>}/>
                    <Route /*exact*/ path='/news' render={() => <News/>}/>
                    <Route /*exact*/ path='/music' render={() => <Music/>}/>
                    <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
