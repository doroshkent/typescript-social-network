import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import { follow, setUsers, unfollow, UserType } from "redux/usersReducer";
import { AppRootStateType } from "redux/store";

type MapStatePropsType = {
  users: UserType[]
}

type MapDispatchPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  users: state.usersPage.users
})

const mapDispatchToProps: MapDispatchPropsType = {
  follow, unfollow, setUsers
}

export default connect( mapStateToProps, mapDispatchToProps )( Users )
