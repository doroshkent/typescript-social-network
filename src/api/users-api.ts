import axios from "axios";
import { UserType } from "redux/usersReducer";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
})

export const usersAPI = {
  getUsers(pageSize: number, currentPage: number) {
    return instance.get<GetUsersResponseType>( `users?count=${ pageSize }&page=${ currentPage }` )

  }
}

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string | null
}
