import { instance } from "api/users-api";

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<UserProfile>( `profile/${ userId }` )
  }
}

export type UserProfile = {
  aboutMe: string | null
  contacts: {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
  };
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  userId: number
  photos: {
    small: string | null
    large: string | null
  };
};
