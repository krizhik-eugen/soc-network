import {addNewPostContentAC, addPostAC, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostContent: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    addNewPostContent: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostContent: state.profilePage.newPostContent
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        addNewPostContent: (text: string) => dispatch(addNewPostContentAC(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)