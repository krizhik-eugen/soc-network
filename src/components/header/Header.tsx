import React from "react";
import st from './Header.module.css';


export function Header() {
    return (
        <header className={st.header}>
            <img src='https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png' alt='logo'/>
        </header>
    )
}