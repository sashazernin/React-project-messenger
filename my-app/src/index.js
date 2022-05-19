import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {AddPost, subs} from "./redux/state";

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App AppState={state} AddPost={AddPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state);

subs(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
