import React from "react";
import {connect} from "react-redux";
import { Users } from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import { Dispatch } from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userID: number)=>{dispatch(followAC(userID))},
        unfollow: (userID: number)=>{dispatch(unfollowAC(userID))},
        setUsers: (users: Array<UserType>)=>{dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)