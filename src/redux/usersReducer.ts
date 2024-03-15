import { Dispatch } from "redux";
import { usersAPI } from "api/users-api";
import { RESULT_CODE } from "api/auth-api";

const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: [] as number[]
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
  switch (action.type) {
    case "FOLLOW":
      return { ...state, users: state.users.map( u => u.id === action.id ? { ...u, followed: true } : u ) }
    case "UNFOLLOW":
      return { ...state, users: state.users.map( u => u.id === action.id ? { ...u, followed: false } : u ) }
    case "SET_USERS":
      return { ...state, users: action.users }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage }
    case "SET_TOTAL_USERS_COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount }
    case "SET_USERS_IS_FETCHING":
      return { ...state, isFetching: action.isFetching }
    case "SET_IS_FOLLOWING_PROGRESS": {
      return { ...state, isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.id]
          : state.isFollowingProgress.filter(id => action.id !== id)}
    }
    default:
      return state
  }
}

// actions
export const followAC = (id: number) => ({ type: "FOLLOW", id } as const)
export const unfollowAC = (id: number) => ({ type: "UNFOLLOW", id } as const)
export const setUsers = (users: UserType[]) => ({ type: "SET_USERS", users } as const)
export const setCurrentPage = (pageNumber: number) => ({ type: "SET_CURRENT_PAGE", currentPage: pageNumber } as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: "SET_TOTAL_USERS_COUNT",
  totalUsersCount
} as const)
export const setUsersIsFetching = (isFetching: boolean) => ({ type: "SET_USERS_IS_FETCHING", isFetching } as const)
export const setIsFollowingProgress = (isFetching: boolean, id: number) => ({ type: "SET_IS_FOLLOWING_PROGRESS", isFetching, id } as const)

// thunks
export const fetchUsers = (currentPage: number = 1, pageSize: number = 10) => (dispatch: Dispatch) => {
  dispatch(setUsersIsFetching( true ));
  usersAPI.getUsers( pageSize, currentPage )
    .then( (res) => {
      dispatch(setUsers( res.data.items ))
      dispatch(setTotalUsersCount( res.data.totalCount ))
      dispatch(setUsersIsFetching( false ))
    } )
}
export const follow = (id: number) => (dispatch: Dispatch) => {
  dispatch( setIsFollowingProgress( true, id ) );
  usersAPI.follow( id ).then( (res) => {
    if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
      dispatch( followAC( id ) );
    }
    dispatch( setIsFollowingProgress( false, id ) );
  } )
}
export const unfollow = (id: number) => (dispatch: Dispatch) => {
  dispatch( setIsFollowingProgress( true, id ) )
  usersAPI.unfollow( id ).then( (res) => {
    if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
      dispatch( unfollowAC( id ) );
    }
    dispatch( setIsFollowingProgress( false, id ) )
  } )
}


// types
export type UsersStateType = typeof initialState
export type UserType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>

type UsersActionsType =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ReturnType<typeof setUsersIsFetching>
  | ReturnType<typeof setIsFollowingProgress>
