import React from "react";
import st from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div>
            <div className={st.post}>
                <div className={st.item}>
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