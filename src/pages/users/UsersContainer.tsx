import { connect } from "react-redux";
import { Users } from "pages/users/Users";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UsersStateType,
  UserType
} from "redux/usersReducer";
import { AppRootStateType } from "redux/store";
import React from "react";
import axios from "axios";

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }&page=${ this.props.currentPage }` )
      .then( (res) => {
        this.props.setUsers( res.data.items )
        this.props.setTotalUsersCount( res.data.totalCount )
      } )
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage( pageNumber );
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }&page=${ pageNumber }` )
      .then( (res) => {
        this.props.setUsers( res.data.items )
      } )
  }

  render() {
    return <Users users={ this.props.users }
                  onPageChanged={ this.onPageChanged }
                  totalUsersCount={ this.props.totalUsersCount }
                  currentPage={ this.props.currentPage }
                  pageSize={ this.props.pageSize }
                  follow={ this.props.follow }
                  unfollow={ this.props.unfollow } />
  }
}


type UsersContainerPropsType = UsersStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): UsersStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize
})

const mapDispatchToProps: MapDispatchPropsType = {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount
}

export default connect( mapStateToProps, mapDispatchToProps )( UsersContainer )
