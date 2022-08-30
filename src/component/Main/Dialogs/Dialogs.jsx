import DialogsClass from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const Dialogs = (props) => {
    return(
        <div className={DialogsClass.content}>
            <h2 className={DialogsClass.title}>Dialogs</h2>
            <div className={DialogsClass.dialogs}>
                <div className={DialogsClass.dialogItem}>
                    <div className={DialogsClass.item}><NavLink className={DialogsClass.link} to='/dialogs/Yosya'>Yosya</NavLink></div>
                    <div className={DialogsClass.item + ' ' + DialogsClass.active}><NavLink className={DialogsClass.link} to='/dialogs/Vasa'>Vasa</NavLink></div>
                    <div className={DialogsClass.item}><NavLink className={DialogsClass.link} to='/dialogs/Babich'>Babich</NavLink></div>
                    <div className={DialogsClass.item}><NavLink className={DialogsClass.link} to='/dialogs/Sirock'>Sirock</NavLink></div>
                    <div className={DialogsClass.item}><NavLink className={DialogsClass.link} to='/dialogs/Holod'>Holod</NavLink></div>
                </div>
            <div className={DialogsClass.messages}>
                <div className={DialogsClass.message}>Yo</div>
                <div className={DialogsClass.message}>How are you</div>
                <div className={DialogsClass.message}>My name is Yosya</div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs