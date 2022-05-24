import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
                        <Route path="Profile" element={<Profile/>}/>
                        <Route path="Users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;