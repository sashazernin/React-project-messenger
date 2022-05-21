import {combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import DialogsReducer from "./DialogsReducer";

let Redusers = combineReducers(
    {
        ProfilePage: ProfileReducer,
        MessagesPage: MessagesReducer,
        DialogsPage: DialogsReducer
    }
)

let Store = legacy_createStore(Redusers)

export default Store