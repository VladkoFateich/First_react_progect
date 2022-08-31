import MyPostsClass from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you", likeCount: 2 },
    { id: 2, message: "My first post", likeCount: 34 },
  ];
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
        <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
        <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
      </div>
    </div>
  );
};
export default MyPosts;
