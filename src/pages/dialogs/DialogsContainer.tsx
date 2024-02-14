import { connect } from "react-redux";
import { AppRootStateType } from "redux/store";
import { DialogType, MessageType, sendMessage } from "redux/dialogsReducer";
import { Dialogs } from "pages/dialogs/Dialogs";

type MapStatePropsType = {
  dialogs: DialogType[]
  messages: MessageType[]
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages
})

const DialogsContainer = connect( mapStateToProps, { sendMessage } )( Dialogs )

export default DialogsContainer
