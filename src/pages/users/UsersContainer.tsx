import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, setUsersIsFetching,
  unfollow,
  UsersStateType,
  UserType
} from "redux/usersReducer";
import { AppRootStateType } from "redux/store";
import React from "react";
import axios from "axios";
import { Spin } from "antd";

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  setUsersIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.setUsersIsFetching(true);
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }&page=${ this.props.currentPage }` )
      .then( (res) => {
        this.props.setUsers( res.data.items )
        this.props.setTotalUsersCount( res.data.totalCount )
        this.props.setUsersIsFetching(false)
      } )
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setUsersIsFetching(true);
    this.props.setCurrentPage( pageNumber );
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }&page=${ pageNumber }` )
      .then( (res) => {
        this.props.setUsers( res.data.items )
        this.props.setUsersIsFetching(false);
      } )
  }

  render() {
    return (
      <>{ this.props.isFetching
        ? <Spin size={"large"} />
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


type UsersContainerPropsType = UsersStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): UsersStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching
})

const mapDispatchToProps: MapDispatchPropsType = {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setUsersIsFetching
}

export default connect( mapStateToProps, mapDispatchToProps )( UsersContainer )
