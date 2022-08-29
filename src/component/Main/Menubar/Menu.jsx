import MenuClass from './Menu.module.css'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <div className={MenuClass.menu}>
<ul className={MenuClass.list}>
    <li className={MenuClass.elem}><NavLink className={MenuClass.elemLink} to='/profile'>Profile</NavLink></li>
    <li className={MenuClass.elem}><NavLink className={MenuClass.elemLink} to='/dialogs'>Message</NavLink></li>
    <li className={MenuClass.elem}><NavLink className={MenuClass.elemLink} to='/news'>News</NavLink></li>
    <li className={MenuClass.elem}><NavLink className={MenuClass.elemLink} to='/music'>Music</NavLink></li>
    <li className={MenuClass.elem}><NavLink className={MenuClass.elemLink} to='/setting'>Setting</NavLink></li>
</ul>
        </div>
    )
}
export default Menu