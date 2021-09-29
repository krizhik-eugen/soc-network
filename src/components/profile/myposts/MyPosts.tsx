import React from "react";
import styles from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formControls/FormControls";

type ValuesType = {
    newPost: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsItems = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
    const addNewPost = (values: ValuesType) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={styles.content}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <ReduxMyNewPostForm onSubmit={addNewPost}/>
                <div className={styles.posts}>
                    {postsItems}
                </div>
            </div>
        </div>
    );
}
const maxLengthValue10 = maxLength(10)
const MyNewPostForm = (props: InjectedFormProps<ValuesType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type here'}
                       component={Textarea} name={'newPost'}
                validate={[requiredField, maxLengthValue10]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const ReduxMyNewPostForm = reduxForm<ValuesType>({form: 'newPost'})(MyNewPostForm)