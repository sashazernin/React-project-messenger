import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Routes, Route, Redirect, withRouter, HashRouter} from "react-router-dom";
import ProfileEditModeContainer from "./components/ProfileEditMode/ProfileEditModeContainer";
//let DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))


class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className="app-wrapper">
                    <div className='app-body'>
                        <HeaderContainer/>
                        <Menu/>
                        <Routes>
                            <Route path='Edit' element={<ProfileEditModeContainer/>}/>
                            <Route path='' element={<ProfileContainer/>}/>
                                <Route path="/Dialogs/" element={
                                    <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                    </React.Suspense>
                                }/>

                            <Route path="Dialogs/*" element={<MessagesContainer/>}/>
                            <Route path='Profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='Profile/' element={<ProfileContainer/>}/>
                            <Route path="Users" element={<UsersContainer/>}/>
                            <Route path="Login" element={<LoginContainer/>}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => ({
        initialized: state.app.initialized
    }
)

export default compose(
    connect(mapStateToProps,{initializeApp}),
)(App)