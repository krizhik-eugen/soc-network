import axios from "axios";
import React from "react";
import styles from './Users.module.css';
import {UsersPagePropsType} from "./UsersContainer";
import defaultAva from '../../assets/defaultAva.png'
import {UserType} from "../../redux/usersReducer";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export const Users = (props: UsersPagePropsType) => {
    if (props.users.length === 0) {

        axios.get<UsersResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });

    }
    return (
        <div className={''}>
            {props.users.map(u => <div className={styles.user} key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.large ? u.photos.large : u.photos.small ? u.photos.small : defaultAva}
                                     className={styles.usersPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
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
        </div>)
}
