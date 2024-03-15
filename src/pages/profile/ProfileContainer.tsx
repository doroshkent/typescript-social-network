import React from 'react';
import { Profile } from "pages/profile/Profile";
import { connect } from "react-redux";
import { fetchProfile } from "redux/profileReducer";
import { AppRootStateType } from "redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component<ProfileProps> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '28658'
    }
    this.props.fetchProfile(userId)
  }

  render() {
    return <Profile { ...this.props } />;
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  profileInfo: state.profilePage.profileInfo
})

export default connect( mapStateToProps, { fetchProfile } )( withRouter( ProfileContainer ) )

// types
type MapDispatchProps = {
  fetchProfile: (id: string) => void
}
export type ProfileProps = ReturnType<typeof mapStateToProps> & MapDispatchProps & RouteComponentProps<{userId?: string}>
