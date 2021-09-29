import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/formControls/FormControls";
export type ValuesType = {
    newMessage: string
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsItems = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesItems = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values: ValuesType) => {
        props.addMessage(values.newMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                <div>{messagesItems}</div>
                <ReduxAddNewMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength150 = maxLength(150)
const AddNewMessageForm = (props: InjectedFormProps<ValuesType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type here'}
                       component={Textarea} name={'newMessage'}
                validate={[requiredField, maxLength150]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>

    )
}

const ReduxAddNewMessageForm = reduxForm<ValuesType>({form: 'newMessage'})(AddNewMessageForm)