import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleWare from 'redux-thunk';
import profileReducer, {
    ProfileReducerActionsTypes
} from './profileReducer';
import dialogsReducer, {DialogsReducerActionsTypes} from './dialogsReducer';
import sideBarReducer, {SideBarReducerActionsTypes} from './sideBarReducer';
import usersReducer, {
    UserReducerActionsTypes
} from './usersReducer';
import authReducer, {AuthReducerActionsTypes} from './authReducer';
import appReducer, {AppReducerActionsTypes} from './appReducer';
import {chatAPI} from '../api/chat-api';
import chatReducer, {ChatReducerActionsTypes} from './chatReducer';

export type DispatchTypes =
    | DialogsReducerActionsTypes
    | AuthReducerActionsTypes
    | ProfileReducerActionsTypes
    | AppReducerActionsTypes
    | SideBarReducerActionsTypes
    | UserReducerActionsTypes
    | ChatReducerActionsTypes

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        chat: chatReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

/*export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))


// @ts-ignore
window.store = store*/

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)
));
