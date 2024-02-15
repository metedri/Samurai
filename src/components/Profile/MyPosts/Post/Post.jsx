import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
      {props.massage}
      <div className={style.likesCount}>
        {props.likesCount}
        <button className={style.buttonLike}><img src="/images/like.png" /></button>
      </div>
    </div>
  );
};

export default Post;

