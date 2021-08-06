import {DispatchTypes, SideBarType} from "./store";
import john from "./avatars/john.jpg";
import lika from "./avatars/lika.jpg";
import kuka from "./avatars/kuka.jpg";

let initialState = {
    friends: [
        {id: 1, name: 'John', ava: john},
        {id: 2, name: 'Lika', ava: lika},
        {id: 3, name: 'Kuka', ava: kuka},
    ]
}

const sideBarReducer = (state: SideBarType = initialState, action: DispatchTypes) => {

    return state
}

export default sideBarReducer