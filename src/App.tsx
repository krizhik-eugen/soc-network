import React, { Suspense } from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {FriendsContainer} from './components/friends/FriendsContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from "./components/login/login";
import {connect, Provider} from 'react-redux';
import {AppStateType, store} from './redux/redux-store';
import {appInitializing} from "./redux/appReducer";
import {Preloader} from "./components/common/preloader/Preloader";

const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));

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
                    <Route /*exact*/ path='/users' render={() => <Suspense fallback={<Preloader/>}>
                        <UsersContainer/>
                        </Suspense>
                        }/>
                    <Route /*exact*/ path='/login' render={() => <Login/>}/>
                    <Route /*exact*/ path='/news' render={() => <News/>}/>
                    <Route /*exact*/ path='/music' render={() => <Music/>}/>
                    <Route /*exact*/ path='/settings' render={() => <Settings/>}/>
                </div>
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

const AppContainer = React.memo(connect(mapStateToProps, {appInitializing})(App))

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp