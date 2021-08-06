import {DispatchTypes, PostType, ProfilePageType} from "./store";

const add_post = "ADD-POST"
const add_new_post_content = "UPDATE-NEW-POST-CONTENT"
export const addPostAC = () => ({type: add_post}) as const
export const addNewPostContentAC = (newPostContent: string) =>
    ({type: add_new_post_content, newPostContent: newPostContent}) as const

let initialState = {
        posts: [{id: 1, message: 'Hello', likeCount: 15},
            {id: 2, message: 'Hey', likeCount: 15},
            {id: 3, message: 'Ho', likeCount: 15},
            {id: 4, message: 'He-he', likeCount: 4}],
        newPostContent: ''
    }

const profileReducer = (state: ProfilePageType = initialState, action: DispatchTypes) => {
    switch (action.type) {
        case add_post:
            const newPost: PostType = {id: 5, message: state.newPostContent, likeCount: 0}
            state.posts.push(newPost)
            state.newPostContent = ''
            return state;
        case add_new_post_content:
            state.newPostContent = action.newPostContent
            return state;
        default:
            return state
    }
}
export default profileReducer