import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';


type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <img src='https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png' alt='logo'/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}