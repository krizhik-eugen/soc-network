import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {UserProfileType, getUserProfileById, getUserStatusById, updateUserStatus} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component <ProfilePagePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '15667'
        }
        this.props.getUserProfileById(userId)
        this.props.getUserStatusById((userId))
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileType,
    status: string
}
type MapDispatchToPropsType = {
    getUserProfileById: (userId: string) => void
    getUserStatusById: (userId: string) => void
    updateUserStatus: (status: string) => void
}
type OwnProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type ParamsType = {
    userId: string
}

type ProfilePagePropsType = RouteComponentProps<ParamsType> & OwnProfilePagePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileById, getUserStatusById, updateUserStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)