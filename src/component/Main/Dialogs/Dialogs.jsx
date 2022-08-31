import DialogsClass from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={DialogsClass.item}>
      <NavLink
        className={(navItem) =>
          navItem.isActive ? DialogsClass.active : DialogsClass.link
        }
        to={"/dialogs/" + props.id}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
const Messages = (props) => {
    return(
        <div className={DialogsClass.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={DialogsClass.content}>
      <h2 className={DialogsClass.title}>Dialogs</h2>
      <div className={DialogsClass.dialogs}>
        <div className={DialogsClass.dialogItem}>
          <DialogItem name="Yosya" id="Yosya" />
          <DialogItem name="Vasa" id="Vasa" />
          <DialogItem name="Babich" id="Babich" />
          <DialogItem name="Sirock" id="Sirock" />
          <DialogItem name="Masel" id="Masel" />
          <DialogItem name="Holod" id="Holod" />
        </div>
        <div className={DialogsClass.messages}>
            <Messages message = 'Yo'/>
            <Messages message = 'How are you'/>
            <Messages message = 'I am fine'/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
