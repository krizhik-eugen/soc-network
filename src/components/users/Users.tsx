import React from 'react';
import {UserType} from '../../redux/usersReducer';
import {User} from './User/User';
import {Paginator} from '../common/paginator/Paginator';

type UserPropsType = {
    usersTotalCount: number
    pageSize: number
    onChangePageHandler: (p: number) => void
    currentPage: number
    users: Array<UserType>
    setUnFollow: (id: number) => void
    setFollow: (id: number) => void
    followingProcess: number[]
}

export const Users = React.memo((props: UserPropsType) => {
    return (
        <div className={''}>
            <Paginator itemsCount={props.usersTotalCount} pageSize={props.pageSize}
                       onChangePageHandler={props.onChangePageHandler} currentPage={props.currentPage}
                       portionSize={10}/>
            {
                props.users.map(u => <User user={u} setUnFollow={props.setUnFollow} setFollow={props.setFollow}
                                           followingProcess={props.followingProcess}/>)
            }

        </div>
    )
})
