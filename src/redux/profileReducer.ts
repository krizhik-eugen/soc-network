import {DispatchTypes, PostType, ProfilePageType} from "./state";

const add_post = "ADD-POST"
const add_new_post_content = "UPDATE-NEW-POST-CONTENT"
export const addPostAC = () => ({type: add_post}) as const
export const addNewPostContentAC = (newPostContent: string) =>
    ({type: add_new_post_content, newPostContent: newPostContent}) as const
const profileReducer = (state: ProfilePageType, action: DispatchTypes) => {
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