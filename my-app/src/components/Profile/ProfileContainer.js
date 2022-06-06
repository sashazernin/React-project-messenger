import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import {connect} from "react-redux";
import {getProfileInfoTC, setUserProfile} from "../../redux/ProfileReducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if(this.props.isAuth) {
            let userId = this.props.router.params.userId

            if (!userId) {
                userId = this.props.userId
            }
            this.props.getProfileInfoTC(userId)
            // getProfileInfo(userId).then(
            //     data => {
            //         this.props.setUserProfile(data)
            //     }
            // )
        }
    }
    render() {
        if(!this.props.isAuth){ return (<Navigate to={"/Login"}/>)}
        return (
            <div>
                <Profile profile = {this.props.profile} isAuth = {this.props.isAuth}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile
    }
)

const mapDispatchToProps = {
    setUserProfile,
    getProfileInfoTC
}

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer));