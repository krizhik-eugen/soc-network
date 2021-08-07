import React from "react";
import styles from './Friends.module.css'
import StoreContext from "../../StoreContext";

export const Friends = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                return (
                    <div className={styles.friends_wrapper}>
                        <h2>Friends</h2>
                        {state.sideBar.friends.map((f) => <div className={styles.ava}><img src={f.ava}/></div>)}
                    </div>)
            }
            }
        </StoreContext.Consumer>)
}