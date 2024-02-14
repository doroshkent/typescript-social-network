import { v1 } from "uuid";

export type NavbarStateType = {
  navItems: NavItemsType[]
}
export type NavItemsType = {
  id: string
  title: string
  href: string
}

type SidebarActionsTypes = {}

const initialState: NavbarStateType = {
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
    },
    {
      title: "Users",
      id: v1(),
      href: "/users"
    }
  ],
}

export const sidebarReducer = (state: NavbarStateType = initialState, action: SidebarActionsTypes): NavbarStateType => {
  return state
}
