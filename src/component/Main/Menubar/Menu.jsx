import MenuClass from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Elem = (props) => {
  return (
    <li className={MenuClass.elem}>
      <NavLink
        className={(navMenu) =>
          navMenu.isActive ? MenuClass.active : MenuClass.elemLink
        }
        to={props.id}
      >
        {props.value}
      </NavLink>
    </li>
  );
};

const Menu = (props) => {
  let elemData = [
    { id: "profile", value: "Profile" },
    { id: "dialogs", value: "Message" },
    { id: "news", value: "News" },
    { id:"music", value:"Music" },
    { id:"setting", value:"Setting" },
  ];
  return (
    <div className={MenuClass.menu}>
      <ul className={MenuClass.list}>
        <Elem id={elemData[0].id} value={elemData[0].value} />
        <Elem id={elemData[1].id} value={elemData[1].value} />
        <Elem id={elemData[2].id} value={elemData[2].value} />
        <Elem id={elemData[3].id} value={elemData[3].value} />
        <Elem id={elemData[4].id} value={elemData[4].value} />
      </ul>
    </div>
  );
};
export default Menu;
