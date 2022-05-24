import {combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

let Redusers = combineReducers(
    {
        ProfilePage: ProfileReducer,
        MessagesPage: MessagesReducer,
        DialogsPage: DialogsReducer,
        UsersPage: UsersReducer
    }
)

let store = legacy_createStore(Redusers)

window.store = store

export default store