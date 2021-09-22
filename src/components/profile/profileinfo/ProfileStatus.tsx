import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

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

    ComponentDidUpdate = (prevProps: ProfileStatusPropsType, PrevState: any) => {
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