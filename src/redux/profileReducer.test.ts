import profileReducer, {addPostAC, deletePostAC, ProfilePageType, UserProfileType} from './profileReducer';

let initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hello', likeCount: 15},
        {id: 2, message: 'Hey', likeCount: 15},
        {id: 3, message: 'Ho', likeCount: 15},
        {id: 4, message: 'He-he', likeCount: 4}],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}


test('posts count has to be incremented', () => {
    const newPostAction = addPostAC('it-kamasutra the best')
    const updatedState = profileReducer(initialState, newPostAction)

    expect(updatedState.posts.length).toBe(5)
    expect(updatedState.posts[4].message).toBe('it-kamasutra the best')

})

test('posts count has to be decremented', () => {
    const deletePostAction = deletePostAC(3)
    const updatedState = profileReducer(initialState, deletePostAction)

    expect(updatedState.posts.length).toBe(3)
    expect(updatedState.posts[2].message).toBe('He-he')
})
