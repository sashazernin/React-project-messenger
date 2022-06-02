import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {setAuthUserData} from "../../redux/AuthReducer";
import {getAuth} from "../../redux/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuth().then(
            data => {
                if(data.resultCode === 0){
                    let {id, email, login} = data.data
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