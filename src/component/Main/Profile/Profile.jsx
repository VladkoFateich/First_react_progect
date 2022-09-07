import Avatar from './Avatar/avatar'
import ProfileClass from './profile.module.css'
import MyPosts from './MyPosts/myPosts'

const Profile = (props) => {
    return (
        <div className={ProfileClass.main}>
            <div className={ProfileClass.background}></div>
            <Avatar/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
export default Profile