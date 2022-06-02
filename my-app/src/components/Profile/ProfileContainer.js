import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {
    useLocation,
        useNavigate,
        useParams,
} from "react-router-dom";
import {getProfileInfo} from "../../redux/api";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.router.params.userId

        if(!userId){
            userId = this.props.userId
        }
        getProfileInfo(userId).then(
            data => {
                this.props.setUserProfile(data)
            }
        )
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        userId: state.auth.userId,
        profile: state.profilePage.profile
    }
)

const mapDispatchToProps = {
    setUserProfile
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