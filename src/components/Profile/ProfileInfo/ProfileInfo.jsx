import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.profileCover}>
        <img src="https://img1.akspic.ru/attachments/crops/2/3/9/2/4/142932/142932-grafika-fialka-risovanie-art-abstraktnoe_iskusstvo-2560x1440.jpg" />
      </div>
      <div className={style.profileInfo}>
        <img src="https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-7-768x768.jpg" />
        <div>ФИО ДР Город Образование сайт</div>
      </div>

    </div>
  );
};

export default ProfileInfo;
