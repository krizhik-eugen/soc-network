import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {FriendsContainer} from './components/friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from "./components/login/login";
import { connect } from 'react-redux';
import {getMyAuth} from "./redux/authReducer";
import {AppStateType} from "./redux/redux-store";
import {appInitializing} from "./redux/appReducer";
import {Preloader} from "./components/common/preloader/Preloader";

class App extends React.PureComponent<AppPropsType> {
    componentDidMount() {
        this.props.appInitializing()
    }
    render() {
        if(!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route /*exact*/ path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route /*exact*/ path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route /*exact*/ path='/users' render={() => <UsersContainer/>}/>
                    <Route /*exact*/ path='/login' render={() => <Login/>}/>
                    <Route /*exact*/ path='/news' render={() => <News/>}/>
                    <Route /*exact*/ path='/music' render={() => <Music/>}/>
                    <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
                </div>
                <FriendsContainer/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToProps = {
    appInitializing: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized
    }

}

export default React.memo(connect(mapStateToProps, {appInitializing})(App))