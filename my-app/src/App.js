import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import Massages from "./components/Massages/Massages";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-body'>
                    <Header/>
                    <Menu/>
                    <Routes>
                        <Route path="/Dialogs/"element={<Dialogs Dialogs={props.AppState.Dialogs} />}/>
                        <Route path="Dialogs/*" element={<Massages Massages={props.AppState.Massages} />}/>
                        <Route path="Profile" element={<Profile Posts={props.AppState.Posts} AddPost={props.AddPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;