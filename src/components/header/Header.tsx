import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export function Header(props: HeaderPropsType) {
    const logoutHandler = () => {
        props.logout()
    }
    return (
        <header className={styles.header}>
            <img src='https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png' alt='logo'/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        <span>{props.login}</span>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}