import React from "react";
import {NavLink} from "react-router-dom";
import st from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <NavLink to='/profile' activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/dialogs' activeClassName={st.active}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/news' activeClassName={st.active}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/music' activeClassName={st.active}>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/settings' activeClassName={st.active}>Settings</NavLink>
            </div>
        </nav>
    )
}