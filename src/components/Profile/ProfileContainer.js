import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {
    getProfileInfoTC,
    getProfileStatusTC,
    setUserProfile, updateProfilePhotoTC,
    updateProfileStatusTC, updateProfileTC
} from "../../redux/ProfileReducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfileInfoTC(userId)
        this.props.getProfileStatusTC(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            let userId = this.props.router.params.userId
            if (!userId) {
                userId = this.props.userId
            }
            this.props.getProfileInfoTC(userId)
            this.props.getProfileStatusTC(userId);
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.router.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateProfileStatusTC}
                    updatePhoto={this.props.updateProfilePhotoTC}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        userId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
)

const mapDispatchToProps = {
    setUserProfile,
    getProfileInfoTC,
    getProfileStatusTC,
    updateProfileStatusTC,
    updateProfilePhotoTC,
}

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

