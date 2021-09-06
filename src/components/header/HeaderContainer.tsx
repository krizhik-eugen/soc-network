import React from "react";
import {connect} from "react-redux";
import {AuthDataType, setAuthUsersData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        authAPI.meAuth()
        .then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUsersData(data.data )
            }
        })
    }
    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
            />
        )
    }
}

type MapStateToPropsType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

type MapDispatchToProps = {
    setAuthUsersData: (data: AuthDataType) => void
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer)