import React from 'react';
import {connect} from 'react-redux';
import {
    changePage, getUsers, setFollow, setUnFollow,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
                        // setFollowingProcess={this.props.setFollowingProcess}
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
    // setFollowingProcess: (inProcess: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (p: number, pageSize: number) => void
    setUnFollow: (id: number) => void
    setFollow: (id: number) => void
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProcess: state.usersPage.followingProcess
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {
    // setFollowingProcess,
    getUsers,
    changePage,
    setUnFollow,
    setFollow
})(UsersContainer));