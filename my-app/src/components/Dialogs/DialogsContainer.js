import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogs: state.DialogsPage.Dialogs,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;