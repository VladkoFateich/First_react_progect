import DialogsClass from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let dialogItemData = [
    { name: "Yosya", id: "Yosya_message" },
    { name: "Vasa", id: "Vasa_message" },
    { name: "Babich", id: "Babich_message" },
    { name: "Sirock", id: "Sirock_message" },
    { name: "Masel", id: "Masel_message" },
    { name: "Holod", id: "Holod_message" },
  ];
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
  let dialogItemData = [
    { id: "Yosya_message", name: "Yosya" },
    { id: "Vasa_message", name: "Vasa" },
    { id: "Babich_message", name: "Babich" },
    { id: "Sirock_message", name: "Sirock" },
    { id: "Masel_message", name: "Masel" },
    { id: "Holod_message", name: "Holod" },
  ];
  let messagesData = [
    { id: 1, message: "Yo" },
    { id: 1, message: "How are you" },
    { id: 1, message: "I am fine" },
    { id: 1, message: "Bye" },
  ];
  return (
    <div className={DialogsClass.content}>
      <h2 className={DialogsClass.title}>Dialogs</h2>
      <div className={DialogsClass.dialogs}>
        <div className={DialogsClass.dialogItem}>
          <DialogItem name={dialogItemData[0].name} id={dialogItemData[0].id}/>
          <DialogItem name={dialogItemData[1].name} id={dialogItemData[1].id}/>
          <DialogItem name={dialogItemData[2].name} id={dialogItemData[2].id}/>
          <DialogItem name={dialogItemData[3].name} id={dialogItemData[3].id}/>
          <DialogItem name={dialogItemData[4].name} id={dialogItemData[4].id}/>
          <DialogItem name={dialogItemData[5].name} id={dialogItemData[5].id}/>
        </div>
        <div className={DialogsClass.messages}>
          <Messages message={messagesData[0].message} />
          <Messages message={messagesData[1].message} />
          <Messages message={messagesData[2].message} />
          <Messages message={messagesData[3].message} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
