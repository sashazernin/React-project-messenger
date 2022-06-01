import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {setAuthUserData} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true}).then(
            response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            }
        )
    }

    render() {
        return(
            <Header isAuth={this.props.isAuth} login = {this.props.login} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let mapDispatchToProps = {
    setAuthUserData
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);