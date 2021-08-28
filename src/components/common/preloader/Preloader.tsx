import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../../assets/preloader.svg'

export const Preloader = () => {
    return (
        <div className={styles.preloader}><img src={preloader} alt='preloader'/></div>
    )
}