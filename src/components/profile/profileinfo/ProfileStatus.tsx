import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}
export class ProfileStatus extends React.PureComponent<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    /* shouldComponentUpdate(nextProps: Readonly<ProfileStatusPropsType>, nextState: Readonly<{}>): boolean {
        return nextProps != this.props || nextState != this.state
     }*/

    ComponentDidUpdate = (prevProps: ProfileStatusPropsType, PrevState: ProfileStatusStateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '--'}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        )
    }
}