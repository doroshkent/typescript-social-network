const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
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
    case "SET_USERS_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state
  }
}

// actions
export const follow = (id: number) => ({ type: "FOLLOW", id } as const)
export const unfollow = (id: number) => ({ type: "UNFOLLOW", id } as const)
export const setUsers = (users: UserType[]) => ({ type: "SET_USERS", users } as const)
export const setCurrentPage = (pageNumber: number) => ({ type: "SET_CURRENT_PAGE", currentPage: pageNumber } as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: "SET_TOTAL_USERS_COUNT",
  totalUsersCount
} as const)
export const setUsersIsFetching = (isFetching: boolean) => ({ type: "SET_USERS_IS_FETCHING", isFetching } as const)


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

type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
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
