import { v4 } from "uuid";

export type PostType = {
  id: string
  content: string
  likesCount: number
}

export type ProfileStateType = {
  posts: PostType[]
}

export type StateRootType = {
  profilePage: ProfileStateType
}

export const state: StateRootType = {
  profilePage: {
    posts: [
      { id: v4(), content: "My first post", likesCount: 3 },
      { id: v4(), content: "Need your support", likesCount: 2 },
      { id: v4(), content: "Love React", likesCount: 10 },
    ]
  }
}
