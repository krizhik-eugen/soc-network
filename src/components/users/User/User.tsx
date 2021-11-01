import React from 'react';
import styles from './User.module.css';
import defaultAva from '../../../assets/defaultAva.png'
import {UserType} from '../../../redux/usersReducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserType
    setUnFollow: (id: number) => void
    setFollow: (id: number) => void
    followingProcess: number[]
}

export const User = React.memo((props: UserPropsType) => {

    const u = props.user

    return (
        <div className={styles.user} key={u.id}>
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
        </div>
)
})
