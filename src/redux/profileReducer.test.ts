import { v4 } from "uuid";
import { addPost, profileReducer, ProfileStateType, setProfile } from "redux/profileReducer";
import { UserProfile } from "api/profile-api";

const initialState: ProfileStateType = {
  posts: [
    { id: v4(), content: "My first post", likesCount: 3 },
    { id: v4(), content: "Need your support", likesCount: 2 },
    { id: v4(), content: "Love React", likesCount: 10 },
  ],
  profileInfo: {} as UserProfile
}

test('should add new post', () => {
  const action = addPost("new post");
  const endState = profileReducer(initialState, action);

  expect(endState.posts.length).toBe(4);
  expect(endState.posts[0].id).toBeDefined();
  expect(endState.posts[0].content).toBe("new post");
  expect(endState.posts[0].likesCount).toBe(0);
})

test('should set new profile', () => {
  const newProfile: UserProfile = {
    aboutMe: 'aboutMe',
    fullName: 'fullName',
    userId: 1,
    photos: { small: null, large: null },
    contacts: {
      instagram: null,
      website: null,
      facebook: null,
      vk: null,
      github: null,
      mainLink: null,
      twitter: null,
      youtube: null
    },
    lookingForAJobDescription: null,
    lookingForAJob: false
  }
  const endState = profileReducer(initialState, setProfile(newProfile));

  expect(endState.profileInfo).toEqual(newProfile)
})
