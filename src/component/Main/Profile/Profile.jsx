import Avatar from './Avatar/Avatar'
import ProfileClass from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={ProfileClass.main}>
            <div className={ProfileClass.background}></div>
            <Avatar/>
            <MyPosts/>
        </div>
    )
}
export default Profile