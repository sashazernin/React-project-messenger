import React from "react";
import {connect} from "react-redux";
import {getCaptchaUrlTC, login} from "../../redux/AuthReducer";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const mapDispatchToProps =  {
    login,
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)