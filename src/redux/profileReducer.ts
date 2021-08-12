import {DispatchTypes} from "./redux-store";

export type PostType = {
    id?: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostContent: string
}


const ADD_POST = "ADD-POST"
const ADD_NEW_POST_CONTENT = "UPDATE-NEW-POST-CONTENT"
export const addPostAC = () => ({type: ADD_POST}) as const
export const addNewPostContentAC = (newPostContent: string) =>
    ({type: ADD_NEW_POST_CONTENT, newPostContent: newPostContent}) as const

let initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hello', likeCount: 15},
        {id: 2, message: 'Hey', likeCount: 15},
        {id: 3, message: 'Ho', likeCount: 15},
        {id: 4, message: 'He-he', likeCount: 4}],
    newPostContent: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: DispatchTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostContent, likeCount: 0}],
                newPostContent: ''
            };
        case ADD_NEW_POST_CONTENT:
            return {
                ...state,
                newPostContent: action.newPostContent
            };
        default:
            return state
    }
}
export default profileReducer