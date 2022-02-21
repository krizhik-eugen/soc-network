import React from 'react';
import {connect} from 'react-redux';
import {
    changePage, getUsersFromServer, setFollow, setUnFollow,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingProcess,
    getIsFetching,
    getPageSize,
    getUsers,
    getUsersTotalCount
} from './UsersSelectors';

class UsersContainer extends React.PureComponent<UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsersFromServer(this.props.currentPage, this.props.pageSize)
    }

    onChangePageHandler = (p: number) => {
        this.props.changePage(p, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        usersTotalCount={this.props.usersTotalCount}
                        pageSize={this.props.pageSize}
                        onChangePageHandler={this.onChangePageHandler}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        setUnFollow={this.props.setUnFollow}
                        setFollow={this.props.setFollow}
                        followingProcess={this.props.followingProcess}
                    />
                }
            </>
        )
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
    isFetching: boolean
    followingProcess: number[]
}

type MapDispatchToProps = {
    getUsersFromServer: (currentPage: number, pageSize: number) => void
    changePage: (p: number, pageSize: number) => void
    setUnFollow: (id: number) => void
    setFollow: (id: number) => void
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToProps
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        usersTotalCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProcess: getFollowingProcess(state)
    }
}

export default React.memo(
    compose<React.ComponentType>(
        connect(mapStateToProps, {
            getUsersFromServer,
            changePage,
            setUnFollow,
            setFollow
        }),
        WithAuthRedirect
    )(UsersContainer))
