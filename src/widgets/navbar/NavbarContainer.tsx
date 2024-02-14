import { connect } from "react-redux";
import { AppRootStateType } from "redux/store";
import { NavItemsType } from "redux/sidebarReducer";
import { Navbar } from "widgets/navbar/Navbar";

type MapStatePropsType = {
  navItems: NavItemsType[]
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  navItems: state.sidebar.navItems
})

const NavbarContainer = connect( mapStateToProps)( Navbar )

export default NavbarContainer
