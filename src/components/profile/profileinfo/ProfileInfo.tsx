import React, { ChangeEvent } from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    setUserPhotos: (file: File) => void
    isOwner: boolean
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

   const onLoadPhoto = (e: ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files) {
            props.setUserPhotos(e.target.files[0])
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.description}>
                {props.profile.photos.large
                    ? <div className={styles.avatar}><img src={props.profile.photos.large} alt={'user avatar'}/></div> :
                    props.profile.photos.small
                        ? <div className={styles.avatar}><img src={props.profile.photos.small} alt={'user avatar'}/></div>
                        : <div className={styles.avatar}><img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS-e3KADHPl0FNuePNVZKd2q2VMrB7HmsuSjVZeiJjeD1BgCNnBTDwK9T_iwkyMJUdGM&usqp=CAU'}
                            alt={'user avatar'}/>
                        </div>}
                {props.isOwner && <input type={'file'} onChange={onLoadPhoto}/>}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <span>{props.profile.fullName}</span>
                <div>Contacts:</div>
                <div>Site: {props.profile.contacts.mainLink}</div>
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>Instagram: {props.profile.contacts.instagram}</div>
                <div>GitHub: {props.profile.contacts.github}</div>
            </div>
        </div>
    );
})