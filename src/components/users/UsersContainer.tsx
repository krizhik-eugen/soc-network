import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, setFetching,
    setUsers,
    setUsersTotalCount, unfollow,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
                this.props.setFetching(false)
            })
    }

    onChangePageHandler = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setFetching(true)
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setFetching(false)
            })
    }

    render() {
        // let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }
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
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
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
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = () => {
    return {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setFetching
    }
}*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setFetching
})(UsersContainer);