import React from 'react';
import styles from './Users.module.css';
import defaultAva from '../../assets/defaultAva.png'
import {UserType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    usersTotalCount: number
    pageSize: number
    onChangePageHandler: (p: number) => void
    currentPage: number
    users: Array<UserType>
    setUnFollow: (id: number) => void
    setFollow: (id: number) => void
    followingProcess: number[]
    // setFollowingProcess: (inProcess: boolean, id: number) => void
}

export const Users = (props: UserPropsType) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={''}>
            <div className={styles.pages}>
                {pages.map(p => <span
                    className={(props.currentPage === p) ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onChangePageHandler(p)
                    }}>{p}</span>)}
            </div>
            {props.users.map(u => <div className={styles.user} key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt={'user avatar'}
                                         src={u.photos.large ? u.photos.large : u.photos.small ? u.photos.small : defaultAva}
                                         className={styles.usersPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button disabled={props.followingProcess.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.setUnFollow(u.id)
                                                      }}>Unfollow</button> :
                                    <button disabled={props.followingProcess.some(id => id === u.id)}
                                            onClick={() => {
                                                props.setFollow(u.id)
                                            }}>Follow</button>}
                            </div>
                        </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}
