import NewsPostClass from "./NewsPost.module.css";

const NewsPost = (props) => {
  return (
    <div className={NewsPostClass.newsPost}>
      <h3 className={NewsPostClass.title}>{props.title}</h3>
      <img
        className={NewsPostClass.postImg}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtWdO_hXtchoJdzOZwp6RVH9yOnlKvnbPxA&usqp=CAU"
        alt="img"/>
      <p className={NewsPostClass.news}>{props.text}</p>
    </div>
  );
};

export default NewsPost;

