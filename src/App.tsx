import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Settings} from './components/settings/Settings';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {FriendsContainer} from './components/friends/FriendsContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import {connect, Provider} from 'react-redux';
import {AppStateType, store} from './redux/redux-store';
import {appInitializing} from './redux/appReducer';
import {Preloader} from './components/common/preloader/Preloader';
import {ProfileStatusWithHooks} from './components/profile/profileinfo/ProfileStatusWithHooks';
import ChatPage from './components/pages/ChatPage';



const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));

class App extends React.PureComponent<AppPropsType> {
    //Закоментирован глобальный перехватчик ошибок, лучше реализовать в санках
    // catchAllUnhandledErrors = (PromiseRejectionEvent: PromiseRejectionEvent) => {
    //     alert(PromiseRejectionEvent)
    //     console.error(PromiseRejectionEvent)
    // }

    componentDidMount() {
        this.props.appInitializing()
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    // componentWillUnmount() {
    //     window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    // }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route /*exact*/ path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route /*exact*/ path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route /*exact*/ path="/users" render={() => <Suspense fallback={<Preloader/>}>
                            <UsersContainer/>
                        </Suspense>
                        }/>
                        <Route /*exact*/ path="/login" render={() => <Login/>}/>
                        <Route /*exact*/ path="/news" render={() => <News/>}/>
                        <Route /*exact*/ path="/music" render={() => <Music/>}/>
                        <Route /*exact*/ path="/settings" render={() => <Settings/>}/>
                        <Route /*exact*/ path="/chat" render={() => <ChatPage/>}/>
                        <Route /*exact*/ path="*" render={() => <div>404 not found</div>}/>
                    </Switch>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp
