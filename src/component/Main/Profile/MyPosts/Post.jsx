import PostClass from './Post.module.css'

const Post = (props) => {
    return (<div className={PostClass.content}>
        <img className={PostClass.img} src='https://android-obzor.com/wp-content/uploads/2022/02/1-6.jpg' alt='ava'></img>
    {props.message}
    <div>
        <span className={PostClass.like}>like </span>{props.likeCount}
    </div>
    </div>
    )
}
export default Post