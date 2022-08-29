import MenuClass from './Menu.module.css'

const Menu = () => {
    return (
        <div className={MenuClass.menu}>
<ul className={MenuClass.list}>
    <li className={MenuClass.elem}><a className={MenuClass.elemLink} href='/profile'>Profile</a></li>
    <li className={MenuClass.elem}><a className={MenuClass.elemLink} href='/dialogs'>Message</a></li>
    <li className={MenuClass.elem}><a className={MenuClass.elemLink} href='/news'>News</a></li>
    <li className={MenuClass.elem}><a className={MenuClass.elemLink} href='/music'>Music</a></li>
    <li className={MenuClass.elem}><a className={MenuClass.elemLink} href='/setting'>Setting</a></li>
</ul>
        </div>
    )
}
export default Menu