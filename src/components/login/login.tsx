import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'password'}component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={"checkbox"}component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: "login"})(LoginForm)
export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}