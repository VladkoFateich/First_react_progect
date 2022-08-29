import MyPostsClass from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () => {
    return (
        <div className={MyPostsClass.content}>
            <h3 className={MyPostsClass.title}>My Posts</h3>
            <textarea className={MyPostsClass.input}></textarea>
            <button className={MyPostsClass.button}>Add post</button>
            <div className={MyPostsClass.posts}>
                <Post message ='Hi, how are you' likeCount = '2'/>
                <Post message ='My first post' likeCount = '34'/> 
            </div>
        </div>
    )
}
export default MyPosts
