import React from "react";
import {connect} from "react-redux";
import {getMyAuth} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getMyAuth()
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
    getMyAuth: () => void
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

export default connect(mapStateToProps, {getMyAuth})(HeaderContainer)