import React from 'react';
import { Header } from "widgets/header/Header";
import { connect } from "react-redux";
import { AppRootStateType } from "redux/store";
import { setAuthUserData, setIsAuth } from "redux/auth-reducer";
import { authAPI, RESULT_CODE, UserData } from "api/auth-api";

class HeaderContainer extends React.Component<HeaderProps> {
  componentDidMount() {
    authAPI.me()
      .then( (res) => {
        if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
          this.props.setAuthUserData( res.data.data )
          this.props.setIsAuth(true)
        }
      } )
  }

  render() {
    return <Header isAuth={this.props.isAuth} />
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, { setAuthUserData, setIsAuth } )( HeaderContainer )

// types
type MapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
  setAuthUserData: (data: UserData) => void
  setIsAuth: (isAuth: boolean) => void
}
type HeaderProps = MapStateToProps & MapDispatchToProps
