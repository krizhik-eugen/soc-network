import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {maxLength, requiredField} from '../../utils/validators/validators';
import {Input} from "../common/formControls/FormControls";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength15 = maxLength(15)
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={Input} name={'login'}
                       validate={[requiredField, maxLength15]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'}
                       validate={[requiredField, maxLength15]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={'rememberMe'}/> remember me
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