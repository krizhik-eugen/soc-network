import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {UserProfileType, getUserProfileById, getUserStatusById, updateUserStatus, setUserPhotos} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getProfile, getStatus} from './ProfileSelectors';

class ProfileContainer extends React.PureComponent <ProfilePagePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // userId = '15667'
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId.toString()
            }
        }
        this.props.getUserProfileById(userId)
        this.props.getUserStatusById((userId))
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePagePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {

        return (
            <div>
                {this.props.authorizedUserId ?
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             isOwner={!this.props.match.params.userId}
                             updateUserStatus={this.props.updateUserStatus}
                             setUserPhotos={this.props.setUserPhotos}/>
                    :
                    <Redirect to={'/Login'}/>
                }

            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfileById: (userId: string) => void
    getUserStatusById: (userId: string) => void
    updateUserStatus: (status: string) => void
    setUserPhotos: (file: File) => void
}
type OwnProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type ParamsType = {
    userId: string
}

type ProfilePagePropsType = RouteComponentProps<ParamsType> & OwnProfilePagePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default React.memo(
    compose<React.ComponentType>(
        connect(mapStateToProps, {getUserProfileById, getUserStatusById, updateUserStatus, setUserPhotos}),
        withRouter,
        // WithAuthRedirect
    )(ProfileContainer))