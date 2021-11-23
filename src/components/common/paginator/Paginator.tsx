import React, {useState} from 'react';
import styles from './Paginator.module.css';

type UserPropsType = {
    itemsCount: number
    pageSize: number
    onChangePageHandler: (p: number) => void
    currentPage: number
    portionSize: number
}

export const Paginator = React.memo((props: UserPropsType) => {

    let [portionNumber, setPortionNumber] = useState<number>(Math.ceil(props.currentPage/props.portionSize))

    let pagesCount = Math.ceil(props.itemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / props.portionSize)

    let leftBorder = props.portionSize * (portionNumber - 1) + 1;
    let rightBorder = portionNumber * props.portionSize;

    return (
        <div className={styles.pages}>
            <button disabled={(portionNumber === leftBorder)}
                    onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous
            </button>

            {pages
                .filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => <span
                    key={p}
                    className={(props.currentPage === p) ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onChangePageHandler(p)
                    }}>{p}</span>)}
            <button disabled={portionNumber === portionsCount}
                    onClick={() => {setPortionNumber(portionNumber + 1)}}>Next
            </button>
        </div>
    )
})
