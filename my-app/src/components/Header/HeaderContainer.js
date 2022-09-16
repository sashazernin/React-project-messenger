import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthTC, setAuthUserData} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthTC()
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
    setAuthUserData,
    getAuthTC
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);