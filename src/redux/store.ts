import { combineReducers, createStore } from "redux";
import { profileReducer } from "redux/profileReducer";
import { dialogsReducer } from "redux/dialogsReducer";
import { sidebarReducer } from "redux/sidebarReducer";
import { usersReducer } from "redux/usersReducer";
import { authReducer } from "redux/auth-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers( {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
} )

export const store = createStore( rootReducer );

// @ts-ignore
window.store = store
