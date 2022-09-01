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
  let elemElements = props.elemData.map(element => <Elem id={element.id} value ={element.value}/>)
  return (
    <div className={MenuClass.menu}>
      <ul className={MenuClass.list}>
        {elemElements}
      </ul>
    </div>
  );
};
export default Menu;
