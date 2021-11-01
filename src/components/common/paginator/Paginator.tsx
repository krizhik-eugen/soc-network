import React from 'react';
import styles from './Paginator.module.css';

type UserPropsType = {
    usersTotalCount: number
    pageSize: number
    onChangePageHandler: (p: number) => void
    currentPage: number
}

export const Paginator = React.memo((props: UserPropsType) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div className={styles.pages}>
                {pages.map(p => <span
                    className={(props.currentPage === p) ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onChangePageHandler(p)
                    }}>{p}</span>)}
            </div>
    )
})
