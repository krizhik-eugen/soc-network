import React from "react";
import st from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src='https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676'
                    alt=''/>
            </div>
            <div className={st.description}>
                ava+description
            </div>
        </div>
    );
}