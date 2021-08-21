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

class Users extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        axios.get<UsersResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    };

    render() {
        return (
            <div className={''}>
                {this.props.users.map(u => <div className={styles.user} key={u.id}>
                        <span>
                            <div>
                                <img alt={'user photo'}
                                     src={u.photos.large ? u.photos.large : u.photos.small ? u.photos.small : defaultAva}
                                     className={styles.usersPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        this.props.follow(u.id)
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

}

export default Users
