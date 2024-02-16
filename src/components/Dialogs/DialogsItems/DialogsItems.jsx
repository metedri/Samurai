import { NavLink } from "react-router-dom";
import style from "./DialogsItems.module.css";

const DialogsItems = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={'/dialogs/' + props.id} className={(navDialog) =>  navDialog.isActive ? style.active : style.item}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItems;
