import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import { fetchUsers, follow, unfollow, UsersStateType } from "redux/usersReducer";
import { AppRootStateType } from "redux/store";
import React from "react";
import { Spin } from "antd";

export class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.fetchUsers()
  }

  onPageChanged = (pageNumber: number) => {
    this.props.fetchUsers( pageNumber )
  }

  render() {
    return (
      <>{ this.props.isFetching
        ? <Spin size={ "large" } />
        : <Users { ...this.props }
                 onPageChanged={ this.onPageChanged } />
      }</>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): UsersStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
  isFollowingProgress: state.usersPage.isFollowingProgress
})

export default connect( mapStateToProps, {
  follow, unfollow, fetchUsers
} )( UsersContainer )

// types
type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  fetchUsers: (currentPage?: number, pageSize?: number) => void
}
type UsersContainerPropsType = UsersStateType & MapDispatchPropsType
