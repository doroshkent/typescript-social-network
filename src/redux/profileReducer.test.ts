import { v4 } from "uuid";
import { addPostAC, profileReducer, ProfileStateType } from "redux/profileReducer";

const initialState: ProfileStateType = {
  posts: [
    { id: v4(), content: "My first post", likesCount: 3 },
    { id: v4(), content: "Need your support", likesCount: 2 },
    { id: v4(), content: "Love React", likesCount: 10 },
  ]
}

test('new post should be added', () => {
  const action = addPostAC("new post");
  const endState = profileReducer(initialState, action);

  expect(endState.posts.length).toBe(4);
  expect(endState.posts[0].id).toBeDefined();
  expect(endState.posts[0].content).toBe("new post");
  expect(endState.posts[0].likesCount).toBe(0);
})
