import React from "react";
import styles from './Users.module.css';
import {UsersPagePropsType} from "./UsersContainer";

export const Users = (props: UsersPagePropsType) => {
    if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: false,
            fullName: 'Eugen',
            status: "i'm a boss",
            location: {city: 'Zaslavl', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: "i'm a boss too",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: true,
            fullName: 'Andrew',
            status: "i'm a boss too",
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])
}
    return (
        <div className={''}>
            {props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoURL} className={styles.usersPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                    <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>)
}
