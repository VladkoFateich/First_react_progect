import Avatar from './Avatar/Avatar'
import ProfileClass from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div className={ProfileClass.main}>
            <div className={ProfileClass.background}></div>
            <Avatar/>
            <MyPosts postData={props.postData} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile