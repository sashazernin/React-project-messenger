import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-body'>
                    <HeaderContainer/>
                    <Menu/>
                    <Routes>
                        <Route path="/Dialogs/" element={<DialogsContainer />}/>
                        <Route path="Dialogs/*" element={<MessagesContainer />}/>
                        <Route path='Profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='Profile/' element={<ProfileContainer/>}/>
                        <Route path="Users" element={<UsersContainer/>}/>
                        <Route path="Login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;