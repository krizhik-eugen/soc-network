import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {UserProfileType, getUserProfileById} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component <ProfilePagePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileById(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    getUserProfileById: (userId: string) => void
}
type OwnProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type ParamsType = {
    userId: string
}

type ProfilePagePropsType = RouteComponentProps<ParamsType> & OwnProfilePagePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

let withURLDataProfileContainer = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {getUserProfileById})(withURLDataProfileContainer))