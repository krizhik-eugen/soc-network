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
}

const maxLength30 = maxLength(30)
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={Input} name={'name'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'} type={'password'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
            </div>
            {props.error && <div className={styles.formError}>{props.error}</div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = React.memo((props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>

    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
})

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapDispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default React.memo(connect(mapStateToProps, {login})(Login))