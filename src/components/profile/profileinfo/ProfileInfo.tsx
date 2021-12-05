import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {UpdateProfileDataType} from '../../../api/api';
import {ReduxProfileDataForm} from './ProfileDataForm';


type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    setUserPhotos: (file: File) => void
    isOwner: boolean
    safeProfile: (profileData: UpdateProfileDataType)=> Promise<string>
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onLoadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.setUserPhotos(e.target.files[0])
        }
    }

    const onSubmit = (formData: UpdateProfileDataType) => {
        props.safeProfile(formData).then(()=>{
            setEditMode(false)
        })

    }

    return (
        <div className={styles.content}>
            <div className={styles.description}>
                {props.profile.photos.large
                    ? <div className={styles.avatar}><img src={props.profile.photos.large} alt={'user avatar'}/></div> :
                    props.profile.photos.small
                        ?
                        <div className={styles.avatar}><img src={props.profile.photos.small} alt={'user avatar'}/></div>
                        : <div className={styles.avatar}><img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS-e3KADHPl0FNuePNVZKd2q2VMrB7HmsuSjVZeiJjeD1BgCNnBTDwK9T_iwkyMJUdGM&usqp=CAU'}
                            alt={'user avatar'}/>
                        </div>}
                {props.isOwner && <input type={'file'} onChange={onLoadPhoto}/>}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile}/>
                {editMode ? <ReduxProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} enableEditMode={setEditMode}/>}
            </div>
        </div>
    );
})



type ProfileDataType = {
    profile: UserProfileType
    isOwner: boolean
    enableEditMode: (editMode: boolean)=> void
}

const ProfileData = (props: ProfileDataType) => {
    const contacts = props.profile.contacts
    return (
        <div>
            {props.isOwner && <button onClick={()=>{props.enableEditMode(true)}}>edit</button>}
            <div className={styles.contact}>Full name: {props.profile.fullName}</div>
            <div className={styles.contact}>About me: {props.profile.aboutMe}</div>
            <div className={styles.contact}>Looking for a job: {props.profile.lookingForAJob}</div>
            <div className={styles.contact}>My professional skills: {props.profile.lookingForAJobDescription}</div>

            <div>Contacts:</div>
            {(Object.keys(contacts) as Array<keyof typeof contacts>).map((key) =>
                <div key={key} className={styles.contact}>{key}: {contacts[key]} </div>)}
        </div>
    )
}
