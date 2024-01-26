import { v1, v4 } from "uuid";

export type StateRootType = {
  profilePage: ProfileStateType
  navbar: NavbarStateType
}

export type ProfileStateType = {
  posts: PostType[]
}

export type NavbarStateType = {
  navItems: NavItemsType[]
}

export type PostType = {
  id: string
  content: string
  likesCount: number
}

export type NavItemsType = {
  id: string
  title: string
  href: string
}

export const state: StateRootType = {
  profilePage: {
    posts: [
      { id: v4(), content: "My first post", likesCount: 3 },
      { id: v4(), content: "Need your support", likesCount: 2 },
      { id: v4(), content: "Love React", likesCount: 10 },
    ]
  },
  navbar: {
    navItems: [
      {
        title: "Profile",
        id: v1(),
        href: "/profile"
      },
      {
        title: "Messages",
        id: v1(),
        href: "/dialogs"
      },
      {
        title: "News",
        id: v1(),
        href: "/news"
      },
      {
        title: "Music",
        id: v1(),
        href: "/music"
      },
      {
        title: "Settings",
        id: v1(),
        href: "/settings"
      }
    ]
  }
}
