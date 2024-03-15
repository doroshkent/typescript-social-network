import axios from "axios";
import { UserType } from "redux/usersReducer";
import { ResponseType } from "api/auth-api";

export const instance = axios.create( {
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
} )

export const usersAPI = {
  getUsers(pageSize: number, currentPage: number) {
    return instance.get<GetUsersResponseType>( `users?count=${ pageSize }&page=${ currentPage }` )
  },
  getUserIsFollowed(userId: number) {
    return instance.get<boolean>( `follow/${ userId }` )
  },
  follow(userId: number) {
    return instance.post<ResponseType>( `follow/${ userId }` )
  },
  unfollow(userId: number) {
    return instance.delete<ResponseType>( `follow/${ userId }` )
  },
}

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string | null
}
