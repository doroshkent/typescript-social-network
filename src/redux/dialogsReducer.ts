import { v1 } from "uuid";
import yula from "assets/img/avatars/Yuli.png";
import pan from "assets/img/avatars/Pan.png";
import olga from "assets/img/avatars/Olga.png";
import mariya from "assets/img/avatars/Masha.png";
import nikita from "assets/img/avatars/Nikita.png";
import me from "assets/img/photo.webp";

export type DialogsStateType = {
  dialogs: DialogType[]
  messages: MessageType[]
}
export type MessageType = {
  id: string,
  content: string,
  isSent: boolean,
  avatar: string
}
export type DialogType = {
  id: string
  name: string
  avatar: string
  isOnline: boolean
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
type DialogsActionsTypes = SendMessageActionType

const initialState: DialogsStateType = {
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
  ],
  messages: [
    {
      id: v1(),
      content: "Hey, how is your education?",
      isSent: false,
      avatar: pan
    },
    {
      id: v1(),
      content: "Hey, trying my best",
      isSent: true,
      avatar: me
    },
    {
      id: v1(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isSent: false,
      avatar: pan
    },
    {
      id: v1(),
      content: "see you later",
      isSent: false,
      avatar: pan
    },
  ],
}

export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionsTypes): DialogsStateType => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      const newMessage: MessageType = {
        id: v1(),
        content: action.newMessageText,
        isSent: true,
        avatar: me
      }
      return {
        ...state,
        messages: [ ...state.messages, newMessage ]
      }
    }
    default: {
      return state
    }
  }
}

export const sendMessageAC = (newMessageText: string) => ({
  type: "SEND-MESSAGE", newMessageText
} as const)
