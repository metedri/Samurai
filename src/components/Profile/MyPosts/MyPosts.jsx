import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts =[
    {id: 1, message: 'Это мой первый пост.', likesCount: 23},
    {id: 2, message: 'Привет)', likesCount: 2},
    {id: 3, message: 'А это третий пост!', likesCount: 3},
    {id: 4, message: 'Вот уже и четвертый!)', likesCount: 1},
    {id: 5, message: 'Chiric', likesCount: 2},
    {id: 6, message: 'Zac zac!', likesCount: 22},
    {id: 7, message: 'Ну сколько можно', likesCount: 2},
  ];

  let  postElements = posts.map ( p => <Post massage={p.message} likesCount={p.likesCount} /> )

  return (
    <div className={style.myposts}>
      <div className={style.mypoststitle}>My posts</div>
      
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        { postElements }
      </div>
    </div>
  );
};

export default MyPosts;
