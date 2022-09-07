import React from 'react';
import MyPostsClass from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {

  let postElement = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>) 

  let newPostElem = React.createRef()
  let addPost = () => {
    let text = newPostElem.current.value
    props.addPost(text)
  }
  return (
    <div className={MyPostsClass.content}>
      <h3 className={MyPostsClass.title}>My Posts</h3>
      <div>
        <textarea className={MyPostsClass.input} ref={newPostElem}></textarea>
      </div>
      <div>
        <button className={MyPostsClass.button} onClick={addPost}>Add post</button>
      </div>
      <div className={MyPostsClass.posts}>
        {postElement}
      </div>
    </div>
  );
};
export default MyPosts;
