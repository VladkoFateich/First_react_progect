import MyPostsClass from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {

  let postElement = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>) 
  return (
    <div className={MyPostsClass.content}>
      <h3 className={MyPostsClass.title}>My Posts</h3>
      <div>
        <textarea className={MyPostsClass.input}></textarea>
      </div>
      <div>
        <button className={MyPostsClass.button}>Add post</button>
      </div>
      <div className={MyPostsClass.posts}>
        {postElement}
      </div>
    </div>
  );
};
export default MyPosts;
