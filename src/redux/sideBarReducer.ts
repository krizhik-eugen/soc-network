import {DispatchTypes} from "./redux-store";
import john from "./avatars/john.jpg";
import lika from "./avatars/lika.jpg";
import kuka from "./avatars/kuka.jpg";

export type FriendsType = {
    id: number
    name: string
    ava: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}

let initialState: SideBarType = {
    friends: [
        {id: 1, name: 'John', ava: john},
        {id: 2, name: 'Lika', ava: lika},
        {id: 3, name: 'Kuka', ava: kuka},
    ]
}

const sideBarReducer = (state: SideBarType = initialState, action: DispatchTypes): SideBarType => {

    return state
}

export default sideBarReducer