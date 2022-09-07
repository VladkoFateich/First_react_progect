import React from 'react';
import MyPostsClass from "./myPosts.module.css";
import Post from "./post";

const MyPosts = (props) => {

  let postElement = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>) 

  let newPostElem = React.createRef()
  let addNewPost = () => {
    let newPost = newPostElem.current.value
    props.addPost(newPost)
  }
  return (
    <div className={MyPostsClass.content}>
      <h3 className={MyPostsClass.title}>My Posts</h3>
      <div>
        <textarea className={MyPostsClass.input} ref={newPostElem}></textarea>
      </div>
      <div>
        <button className={MyPostsClass.button} onClick={addNewPost}>Add post</button>
      </div>
      <div className={MyPostsClass.posts}>
        {postElement}
      </div>
    </div>
  );
};
export default MyPosts;
