import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Routes, Route, Redirect, withRouter} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <div className='app-body'>
                        <HeaderContainer/>
                        <Menu/>
                        <Routes>
                            <Route path="/Dialogs/" element={<DialogsContainer/>}/>
                            <Route path="Dialogs/*" element={<MessagesContainer/>}/>
                            <Route path='Profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='Profile/' element={<ProfileContainer/>}/>
                            <Route path="Users" element={<UsersContainer/>}/>
                            <Route path="Login" element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
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