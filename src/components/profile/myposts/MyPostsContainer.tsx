import {addPostAC, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";
import React from "react";
import { reset } from "redux-form";
import {getPosts} from '../ProfileSelectors';

type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: getPosts(state)
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
            dispatch(reset('newPost'))
        }
    }
}

export const MyPostsContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(MyPosts))