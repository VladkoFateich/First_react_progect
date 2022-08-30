import DialogsClass from './Dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={DialogsClass.content}>
            <h2 className={DialogsClass.title}>Dialogs</h2>
            <div className={DialogsClass.dialogs}>
                <div className={DialogsClass.dialogItem}>
                    <div className={DialogsClass.item}>Yosya</div>
                    <div className={DialogsClass.item}>Vasa</div>
                    <div className={DialogsClass.item}>Babich</div>
                    <div className={DialogsClass.item}>Sirock</div>
                    <div className={DialogsClass.item}>Holodock</div>
                </div>
            <div className={DialogsClass.messages}>
                <div className={DialogsClass.message}>Yo</div>
                <div className={DialogsClass.message}>How are you</div>
                <div className={DialogsClass.message}>My name is Yosya</div>
            </div>
        </div>
    )
}

export default Dialogs