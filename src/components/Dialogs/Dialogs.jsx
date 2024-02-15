import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogsItems = (props) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
};

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: 'Sasha' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Polina' },
    { id: 4, name: 'Mama' },
    { id: 5, name: 'Luda' },
    { id: 6, name: 'Tanya' },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Bla bla' },
    { id: 5, message: 'Chiric' },
    { id: 6, message: 'Zac zac!' },
  ];

  let DialogsElement = dialogs.map(d => <DialogsItems name={d.name} id={d.id} />)
  let MessagesElements = messages.map((m) => <Message message={m.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {DialogsElement}

      </div>
      <div className={style.messages}>

        {MessagesElements}


      </div>
    </div>
  );
};

export default Dialogs;
