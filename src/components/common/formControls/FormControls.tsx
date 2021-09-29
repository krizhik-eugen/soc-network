import React from "react";
import styles from "./FormControls.module.css";


const FormControl = ({input, meta, ...restProps}: any) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {restProps.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input}{...restProps}/>
        </FormControl>
    )
}
export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input}{...restProps}/>
        </FormControl>
    )
}