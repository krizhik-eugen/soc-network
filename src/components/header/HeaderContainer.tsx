import React from "react";
import {connect} from "react-redux";
import {getMyAuth, logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    logout={this.props.logout}
            />
        )
    }
}

type MapStateToPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type MapDispatchToProps = {
    logout: () => void
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

export default connect(mapStateToProps, {logout})(HeaderContainer)