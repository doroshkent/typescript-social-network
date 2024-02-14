import { v4 } from "uuid";

export type UserType = {
  id: string
  fullName: string
  isFollowed: boolean
  status: string
  location: LocationType
}
type LocationType = {
  country: string
  city: string
}
export type UsersStateType = {
  users: UserType[]
}

type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>

type UsersActionsType = FollowActionType | UnfollowActionType | SetUsersActionType

const initialState: UsersStateType = {
  users: [
    {
      id: v4(),
      fullName: "Anastasiya",
      isFollowed: true,
      status: "creating my own future",
      location: {
        country: "Poland",
        city: "Poznan"
      }
    },
    {
      id: v4(),
      fullName: "Maria",
      isFollowed: false,
      status: "any",
      location: {
        country: "Belarus",
        city: "Minsk"
      }
    } ]
}

export const usersReducer = (state = initialState, action: UsersActionsType) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map( u => u.id === action.id
          ? { ...u, isFollowed: true }
          : u )
      }
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map( u => u.id === action.id
          ? { ...u, isFollowed: false }
          : u )
      }
    }
    case "SET_USERS": {
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }
    }
    default: {
      return state
    }
  }
}

export const follow = (id: string) => ({
  type: "FOLLOW",
  id
} as const)

export const unfollow = (id: string) => ({
  type: "UNFOLLOW",
  id
} as const)

export const setUsers = (users: UserType[]) => ({
  type: "SET_USERS",
  users
} as const)
