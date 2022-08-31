import MenuClass from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Elem = (props) => {
  return (
    <li className={MenuClass.elem}>
      <NavLink
        className={(navMenu) =>
          navMenu.isActive ? MenuClass.active : MenuClass.elemLink
        }
        to={"" + props.id} //Проблема 100% в том что доолжно быть в кавычках
      >
        {props.value}
      </NavLink>
    </li>
  );
};

const Menu = (props) => {
  return (
    <div className={MenuClass.menu}>
      <ul className={MenuClass.list}>
        <Elem id="profile" value="Profile" />
        <Elem id="message" value="Message" />
        <Elem id="news" value="News" />
        <Elem id="music" value="Music" />
        <Elem id="setting" value="Setting" />
      </ul>
    </div>
  );
};
export default Menu;
