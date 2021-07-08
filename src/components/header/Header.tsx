import React from "react";
import styles from './Header.module.css';


export function Header() {
    return (
        <header className={styles.header}>
            <img src='https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png' alt='logo'/>
        </header>
    )
}