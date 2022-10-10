import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import ProfileEditMode from "./ProfileEditMode";
import {getProfileInfoTC, updateProfileTC} from "../../../redux/ProfileReducer";
import Preloader from "../../common/Preloader/Preloader";

class ProfileEditModeContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileInfoTC(this.props.userId)
    }

    render() {
        return (
            <div>
                {this.props.profile
                    ? <ProfileEditMode
                        userId={this.props.userId}
                        profile={this.props.profile}
                        save={this.props.updateProfileTC}
                        isSavingProgress={this.props.isSavingProgress}
                    />
                    : <Preloader/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        profile: state.profilePage.profile,
        isSavingProgress: state.profilePage.isSavingProgress
    }
}


const mapDispatchToProps = {
    updateProfileTC,
    getProfileInfoTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileEditModeContainer)