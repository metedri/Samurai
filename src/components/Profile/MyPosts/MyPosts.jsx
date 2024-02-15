import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData =[
    {id: 1, message: 'Это мой первый пост.', likesCount: 23},
    {id: 2, message: 'Привет)', likesCount: 2},
    {id: 3, message: 'А это третий пост!', likesCount: 3},
    {id: 4, message: 'Вот уже и четвертый!)', likesCount: 1},
    {id: 5, message: 'Chiric', likesCount: 2},
    {id: 6, message: 'Zac zac!', likesCount: 22},
  ];

  return (
    <div className={style.myposts}>
      <div className={style.mypoststitle}>My posts</div>
      
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post massage={postData[0].message} likesCount={postData[0].likesCount} />
        <Post massage={postData[1].message} likesCount={postData[1].likesCount} />
        <Post massage={postData[2].message} likesCount={postData[2].likesCount} />
        <Post massage={postData[5].message} likesCount={postData[5].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
