import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunk from "redux-thunk"
import AppReducer from "./AppReducer";

let reducers = combineReducers(
    {
            profilePage: ProfileReducer,
            MessagesPage: MessagesReducer,
            DialogsPage: DialogsReducer,
            UsersPage: UsersReducer,
            auth: AuthReducer,
            app: AppReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store