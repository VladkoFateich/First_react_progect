import React from 'react';
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
        <img
          className={DialogsClass.ava}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzdxX6cZ5CrZJl1rE6FvzVT5_GFb11AZ9Cg&usqp=CAU"
          alt="ava"
        />
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

  let newMessageElem = React.createRef()
  let addMessage = () => {
    let text = newMessageElem.current.value 
    props.addMessage(text)
  }
  return (
    <div className={DialogsClass.content}>
      <h2 className={DialogsClass.title}>Dialogs</h2>
      <div className={DialogsClass.dialogs}>
        <div className={DialogsClass.dialogItem}>{dialogItemElements}</div>
        <div className={DialogsClass.messages}>{messagesElements}
        <div className={DialogsClass.addMessage}>
        <textarea ref={newMessageElem}></textarea>
        <div>
          <button onClick={addMessage}>send message</button>
        </div>
      </div></div>
      </div>
    </div>
  );
};

export default Dialogs;
