import { v1, v4 } from "uuid";
import yula from "assets/img/avatars/Yuli.png";
import pan from "assets/img/avatars/Pan.png";
import olga from "assets/img/avatars/Olga.png";
import mariya from "assets/img/avatars/Masha.png";
import nikita from "assets/img/avatars/Nikita.png";
import me from "assets/img/photo.webp";
import { ProfileStateType } from "redux/profileReducer";

// common state type
export type RootStateType = {
  profilePage: ProfileStateType
  navbar: NavbarStateType
  dialogsPage: DialogsStateType
}

// navbar types
export type NavbarStateType = {
  navItems: NavItemsType[]
}
export type NavItemsType = {
  id: string
  title: string
  href: string
}

//dialogs page types
export type DialogsStateType = {
  dialogs: DialogType[]
  messages: MessageType[]
}
export type MessageType = {
  id: string,
  content: string,
  isSent: boolean,
  authorAvatar: string
}
export type DialogType = {
  id: string
  name: string
  avatar: string
  isOnline: boolean
}

export const state: RootStateType = {
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
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: v1(),
        name: "Yula",
        avatar: yula,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Pan",
        avatar: pan,
        isOnline: false,
      },
      {
        id: v1(),
        name: "Olga",
        avatar: olga,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Masha",
        avatar: mariya,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Nikita",
        avatar: nikita,
        isOnline: false,
      },
      {
        id: v1(),
        name: "Yula",
        avatar: yula,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Pan",
        avatar: pan,
        isOnline: false,
      },
      {
        id: v1(),
        name: "Olga",
        avatar: olga,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Masha",
        avatar: mariya,
        isOnline: true,
      },
      {
        id: v1(),
        name: "Nikita",
        avatar: nikita,
        isOnline: false,
      },
    ],
    messages: [
      {
        id: v1(),
        content: "Hey, how is your education?",
        isSent: false,
        authorAvatar: pan
      },
      {
        id: v1(),
        content: "Hey, trying my best",
        isSent: true,
        authorAvatar: me
      },
      {
        id: v1(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        isSent: false,
        authorAvatar: pan
      },
      {
        id: v1(),
        content: "see you later",
        isSent: false,
        authorAvatar: pan
      },
    ],
  }
}
