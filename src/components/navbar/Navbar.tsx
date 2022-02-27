import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';
import {FriendsContainer} from '../friends/FriendsContainer';


export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/chat' activeClassName={styles.active}>Chat</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
                <FriendsContainer />
            </div>
        </nav>
    )
}
