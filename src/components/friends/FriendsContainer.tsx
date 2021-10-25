import {FriendsType, SideBarType} from "../../redux/sideBarReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {Friends} from "./Friends";
import React from "react";

type MapStateToPropsType = {
    friends: Array<FriendsType>
}

type MapDispatchToProps = {

}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): SideBarType => {
    return {
        friends: state.sideBar.friends
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {

    }
}

export const FriendsContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(Friends))


