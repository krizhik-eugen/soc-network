import React from "react";
import {connect} from "react-redux";
import {AuthDataType, setAuthUsersData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";

type AuthResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    resultCode: number
    messages: string[]
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUsersData( response.data.data )
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