import { instance } from "api/users-api";

export const authAPI = {
  me() {
    return instance.get<ResponseType<UserData>>('auth/me')
  }
}


// types
export enum RESULT_CODE {
  SUCCEEDED,
  ERROR,
  CAPTCHA = 10
}
export type ResponseType<D> = {
  resultCode: RESULT_CODE
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}
export type UserData = {
  id: number
  login: string
  email: string
}
