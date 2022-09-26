import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps =  {
    login
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)