import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-body'>
                    <Header/>
                    <Menu/>
                    <Routes>
                        <Route path="/Dialogs/"
                               element={<Dialogs Dialogs={props.AppState.Dialogs}/>}
                        />
                        <Route path="Dialogs/*"
                               element={<Messages
                                   Messages={props.AppState.MessagePage.Messages}
                                   MessageText = {props.AppState.MessagePage.MessageText}
                                   Dispatch={props.Dispatch}
                               />}
                        />
                        <Route path="Profile"
                               element={<Profile ProfilePage={props.AppState.ProfilePage} Dispatch={props.Dispatch}/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;