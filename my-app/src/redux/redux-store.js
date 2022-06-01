import {combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

let Redusers = combineReducers(
    {
        profilePage: ProfileReducer,
        MessagesPage: MessagesReducer,
        DialogsPage: DialogsReducer,
        UsersPage: UsersReducer,
        auth: AuthReducer
    }
)

let store = legacy_createStore(Redusers)

window.store = store

export default store