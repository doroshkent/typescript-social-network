import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  setUsersIsFetching,
  unfollow,
  UsersStateType,
  UserType
} from "redux/usersReducer";
import { AppRootStateType } from "redux/store";
import React from "react";
import { Spin } from "antd";
import { usersAPI } from "api/users-api";

export class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.setUsersIsFetching( true );
    usersAPI.getUsers( this.props.pageSize, this.props.currentPage )
      .then( (res) => {
        this.props.setUsers( res.data.items )
        this.props.setTotalUsersCount( res.data.totalCount )
        this.props.setUsersIsFetching( false )
      } )
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setUsersIsFetching( true );
    this.props.setCurrentPage( pageNumber );
    usersAPI.getUsers( this.props.pageSize, pageNumber )
      .then( (res) => {
        this.props.setUsers( res.data.items )
        this.props.setUsersIsFetching( false );
      } )
  }

  render() {
    return (
      <>{ this.props.isFetching
        ? <Spin size={ "large" } />
        : <Users users={ this.props.users }
                 onPageChanged={ this.onPageChanged }
                 totalUsersCount={ this.props.totalUsersCount }
                 currentPage={ this.props.currentPage }
                 pageSize={ this.props.pageSize }
                 follow={ this.props.follow }
                 unfollow={ this.props.unfollow } />
      }</>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): UsersStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching
})

export default connect( mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setUsersIsFetching
} )( UsersContainer )

// types
type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  setUsersIsFetching: (isFetching: boolean) => void
}
type UsersContainerPropsType = UsersStateType & MapDispatchPropsType
