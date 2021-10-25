import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
     const deactivateEditMode = () => {
         setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

   /* ComponentDidUpdate = (prevProps: ProfileStatusPropsType, PrevState: any) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }*/

        return (
            <div>
                {!editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || '--'}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditMode}
                               value={status}
                               onChange={onStatusChange}/>
                    </div>
                }
            </div>
        )

}