import { UserData } from "api/auth-api";

const initialState = {
  id: 0,
  login: '',
  email: '',
  isAuth: false
}

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "auth/SET-USER-DATA":
      return { ...state, ...action.data }
    case "auth/SET-IS-AUTH": {
      return { ...state, isAuth: action.isAuth }
    }
    default:
      return state
  }
}

// actions
export const setAuthUserData = (data: UserData) => ({ type: 'auth/SET-USER-DATA', data }) as const
export const setIsAuth = (isAuth: boolean) => ({ type: 'auth/SET-IS-AUTH', isAuth }) as const

// types
type AuthState = typeof initialState
type AuthActions = ReturnType<typeof setAuthUserData> | ReturnType<typeof setIsAuth>
