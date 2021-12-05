import john from './avatars/john.jpg';
import lika from './avatars/lika.jpg';
import kuka from './avatars/kuka.jpg';

// Обработка ошибок!!!


export type FriendsType = {
    id: number
    name: string
    ava: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}

const newSideBarAction = 'SIDEBAR_REDUCER/NEW_ACTION'
const sideBarAC = () => ({type: newSideBarAction} as const)


export type SideBarReducerActionsTypes = ReturnType<typeof sideBarAC>

let initialState: SideBarType = {
    friends: [
        {id: 1, name: 'John', ava: john},
        {id: 2, name: 'Lika', ava: lika},
        {id: 3, name: 'Kuka', ava: kuka},
    ]
}

const sideBarReducer = (state = initialState, action: SideBarReducerActionsTypes): SideBarType => {

    return state
}

export default sideBarReducer