import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-body'>
                    <Header/>
                    <Menu/>
                    <Routes>
                        <Route path="/Dialogs/" element={<DialogsContainer />}/>
                        <Route path="Dialogs/*" element={<MessagesContainer />}/>
                        <Route path="Profile/*" element={<ProfileContainer/>}/>
                        <Route path="Users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;