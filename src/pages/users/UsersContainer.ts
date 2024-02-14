import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import { follow, setUsers, unfollow, UserType } from "redux/usersReducer";
import { AppRootStateType } from "redux/store";

type MapStateToPropsType = {
  users: UserType[]
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  users: state.usersPage.users
})

export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)
