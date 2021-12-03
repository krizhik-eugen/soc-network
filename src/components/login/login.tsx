import React from 'react';
import {connect} from 'react-redux';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, requiredField} from '../../utils/validators/validators';
import {Input} from '../common/formControls/FormControls';
import {login} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import styles from './../common/formControls/FormControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type CaptchaType = { captchaUrl: string | null }

const maxLength30 = maxLength(30)
const LoginForm = (props: InjectedFormProps<FormDataType, CaptchaType> & CaptchaType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={Input} name={'email'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'} type={'password'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&
            <div>
                <Field placeholder={'captcha'} component={Input} name={'captcha'}
                       validate={[requiredField, maxLength30]}/>
            </div>}
            {props.error && <div className={styles.formError}>{props.error}</div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType, CaptchaType>({form: 'login'})(LoginForm)

const Login = React.memo((props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>

    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
})

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginPropsType = MapDispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default (connect(mapStateToProps, {login})(Login))