import AvatarClass from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={AvatarClass.content}>
            <img className={AvatarClass.img} src='https://android-obzor.com/wp-content/uploads/2022/02/13-6.jpg' alt='Avatar'></img>
            <div className={AvatarClass.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae molestias nulla qui non, dignissimos error, iusto nemo doloremque, nesciunt dolore architecto laudantium officiis dolores modi id velit maxime sapiente.</div>
        </div>
    )
}
export default Avatar