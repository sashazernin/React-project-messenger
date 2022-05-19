import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {AddPost, MessageTextChange, NewPostText, SendMessage, Subscribe} from "./redux/state";

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                AppState={state}
                MessageTextChange = {MessageTextChange}
                SendMessage = {SendMessage}
                NewPostText = {NewPostText}
                AddPost={AddPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state);

Subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
