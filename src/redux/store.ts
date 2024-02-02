import { combineReducers, createStore } from "redux";
import { profileReducer } from "redux/profileReducer";
import { dialogsReducer } from "redux/dialogsReducer";
import { sidebarReducer } from "redux/sidebarReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers( {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
} )

export const store = createStore( rootReducer );
