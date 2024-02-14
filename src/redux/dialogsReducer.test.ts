import { v1 } from "uuid";
import yula from "assets/img/avatars/Yuli.png";
import pan from "assets/img/avatars/Pan.png";
import me from "assets/img/photo.webp";
import { dialogsReducer, DialogsStateType, sendMessage } from "redux/dialogsReducer";

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
      }
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
    ],
}

test('new message should be sent', () => {
  const action = sendMessage("Hello");
  const endState = dialogsReducer(initialState, action);

  expect(endState.messages.length).toBe(3);
  expect(endState.messages[2].id).toBeDefined();
  expect(endState.messages[2].content).toBe("Hello");
  expect(endState.messages[2].isSent).toBeTruthy();
  expect(endState.messages[2].avatar).toBe(me);
})
