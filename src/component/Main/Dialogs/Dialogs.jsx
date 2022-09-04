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
  return <div className={DialogsClass.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogItemElements = props.dialogItemData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((message) => (
    <Messages message={message.message} />
  ));

  return (
    <div className={DialogsClass.content}>
      <h2 className={DialogsClass.title}>Dialogs</h2>
      <div className={DialogsClass.dialogs}>
        <div className={DialogsClass.dialogItem}>{dialogItemElements}</div>
        <div className={DialogsClass.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
