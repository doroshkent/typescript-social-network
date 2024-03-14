import React from 'react';
import { Profile } from "pages/profile/Profile";
import { connect } from "react-redux";
import { profileAPI, UserProfile } from "api/profile-api";
import { setProfile } from "redux/profileReducer";
import { AppRootStateType } from "redux/store";

class ProfileContainer extends React.Component<ProfileProps> {
  componentDidMount() {
    profileAPI.getProfile( 2 )
      .then( (res) => {
        this.props.setProfile( res.data )
      } )
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  profileInfo: state.profilePage.profileInfo
})

export default connect( mapStateToProps, { setProfile } )( ProfileContainer )

// types
type MapDispatchProps = {
  setProfile: (profileInfo: UserProfile) => void
}
export type ProfileProps = ReturnType<typeof mapStateToProps> & MapDispatchProps
