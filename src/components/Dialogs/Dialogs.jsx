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

  let DialogsData =[
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Polina'},
    {id: 4, name: 'Mama'},
    {id: 5, name: 'Luda'},
    {id: 6, name: 'Tanya'},
  ];

  let messagesData =[
    {id: 1, message: "Hi"},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Bla bla'},
    {id: 5, message: 'Chiric'},
    {id: 6, message: 'Zac zac!'},
  ];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogsItems name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogsItems name={DialogsData[1].name} id={DialogsData[1].id} />
        <DialogsItems name={DialogsData[2].name} id={DialogsData[2].id} />
        <DialogsItems name={DialogsData[3].name} id={DialogsData[3].id} />
        <DialogsItems name={DialogsData[4].name} id={DialogsData[4].id} />
        <DialogsItems name={DialogsData[5].name} id={DialogsData[5].id} />
      </div>
      <div className={style.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
