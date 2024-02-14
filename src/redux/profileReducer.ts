import { v4 } from "uuid";

export type ProfileStateType = {
  posts: PostType[]
}

export type PostType = {
  id: string
  content: string
  likesCount: number
}

type AddPostActionType = ReturnType<typeof addPost>

type ProfileActionsTypes = AddPostActionType

const initialState: ProfileStateType = {
  posts: [
    { id: v4(), content: "My first post", likesCount: 3 },
    { id: v4(), content: "Need your support", likesCount: 2 },
    { id: v4(), content: "Love React", likesCount: 10 },
  ]
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsTypes): ProfileStateType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: v4(),
        content: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [ newPost, ...state.posts ]
      }
    }
    default: {
      return state
    }
  }
}

export const addPost = (newPostText: string) => {
  return { type: "ADD-POST", newPostText } as const
}
