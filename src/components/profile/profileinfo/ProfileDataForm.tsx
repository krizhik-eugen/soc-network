import React from 'react';
import styles from './ProfileDataForm.module.css';
import {Input, Textarea} from '../../common/formControls/FormControls';
import {maxLength, requiredField} from '../../../utils/validators/validators';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UserProfileType} from '../../../redux/profileReducer';

export type ProfileFormDataType = {
    full_name: string
    about_me: string
    lookingForAJob: boolean
    my_skills: string
    handleSubmit: (editMode: boolean) => void
    error: string
}

type extraPropsType = {
    profile: UserProfileType
}

const maxLength30 = maxLength(30)
const maxLength150 = maxLength(150)
const maxLength200 = maxLength(200)

const ProfileDataForm = (props: InjectedFormProps<ProfileFormDataType, extraPropsType> & extraPropsType) => {

    const contacts = props.profile.contacts

    console.log(props)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.contact}> Full name:
                <Field placeholder={'full name'} component={Input} name={'fullName'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div className={styles.contact}> About me:
                <Field placeholder={'about me'} component={Input} name={'aboutMe'}
                       validate={[requiredField, maxLength150]}/>
            </div>
            <div className={styles.contact}> Looking for a job:
                <Field type={'checkbox'} component={Input} name={'lookingForAJob'}/> yes
            </div>
            <div className={styles.contact}> My professional skills:
                <Field placeholder={'my professional skills'} component={Textarea} name={'lookingForAJobDescription'}
                       validate={[requiredField, maxLength200]}/>
            </div>
            <div>
                <div>Contacts:</div>
                {(Object.keys(contacts) as Array<keyof typeof contacts>).map((key) => {
                        return <div key={key} className={styles.contact}> {key}:
                            <Field placeholder={'contacts.' + key} component={Input} name={'contacts.' + key}
                                   validate={[requiredField, maxLength30]}/>
                        </div>
                    }
                )}
            </div>
            {props.error && <div className={styles.formError}>{props.error}</div>}
            <div>
                <button>safe</button>
            </div>
        </form>
    )
}

export const ReduxProfileDataForm = reduxForm<ProfileFormDataType, extraPropsType>({form: 'profileData'})(ProfileDataForm)