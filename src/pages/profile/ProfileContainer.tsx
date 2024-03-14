import React from 'react';
import { Profile } from "pages/profile/Profile";
import { connect } from "react-redux";
import { profileAPI, UserProfile } from "api/profile-api";
import { setProfile } from "redux/profileReducer";
import { AppRootStateType } from "redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component<ProfileProps> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '28658'
    }
    profileAPI.getProfile( userId )
      .then( (res) => {
        this.props.setProfile( res.data )
      } )
  }

  render() {
    return <Profile { ...this.props } />;
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  profileInfo: state.profilePage.profileInfo
})

export default connect( mapStateToProps, { setProfile } )( withRouter( ProfileContainer ) )

// types
type MapDispatchProps = {
  setProfile: (profileInfo: UserProfile) => void
}
export type ProfileProps = ReturnType<typeof mapStateToProps> & MapDispatchProps & RouteComponentProps<{userId?: string}>
