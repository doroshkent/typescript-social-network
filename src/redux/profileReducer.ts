import { v4 } from "uuid";
import { UserProfile } from "api/profile-api";

const initialState: ProfileStateType = {
  posts: [
    { id: v4(), content: "My first post", likesCount: 3 },
    { id: v4(), content: "Need your support", likesCount: 2 },
    { id: v4(), content: "Love React", likesCount: 10 },
  ],
  profileInfo: null
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsTypes): ProfileStateType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: v4(),
        content: action.newPostText,
        likesCount: 0
      }
      return { ...state, posts: [ newPost, ...state.posts ] }
    }
    case "SET-PROFILE":
      return {...state, profileInfo: action.profileInfo}
    default: {
      return state
    }
  }
}

// actions
export const addPost = (newPostText: string) => ({ type: "ADD-POST", newPostText } as const)
export const setProfile = (profileInfo: UserProfile) => ({ type: "SET-PROFILE", profileInfo } as const)

// types
export type ProfileStateType = {
  posts: PostType[]
  profileInfo: UserProfile | null
}
export type PostType = {
  id: string
  content: string
  likesCount: number
}
type AddPostActionType = ReturnType<typeof addPost> | ReturnType<typeof setProfile>
type ProfileActionsTypes = AddPostActionType
