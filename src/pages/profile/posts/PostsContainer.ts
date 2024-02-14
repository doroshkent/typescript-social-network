import { connect } from "react-redux";
import { Posts } from "pages/profile/posts/Posts";
import { addPost, PostType } from "redux/profileReducer";
import { AppRootStateType } from "redux/store";

type MapStatePropsType = {
  posts: PostType[]
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  posts: state.profilePage.posts
})

const PostsContainer = connect( mapStateToProps, { addPost } )( Posts )

export default PostsContainer
