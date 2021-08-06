import React from "react";
import styles from './Post.module.css';
import {PostType} from "../../../../redux/store";

type PostPropsType = PostType

export function Post(props: PostPropsType) {
    return (
        <div>
            <div className={styles.post}>
                <div className={styles.item}>
                    <img
                        src='https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg'
                        alt={'avatar'}/>
                    {props.message}
                    <div>
                        <span>likes </span>{props.likeCount}
                    </div>
                </div>
            </div>
        </div>
    );
}