import NewsPostClass from "./NewsPost.module.css";

const NewsPost = (props) => {
  let newsPostElement = props.newsPostData.map((post) => (
    <NewsPost text={post.text} id={post.id} />
  ));
  let newsTitleElement = props.postTitleData.map((title) => (
    <NewsPost title={title.title} id={title.id} />
  ));
  return (
    <div className={NewsPostClass.newsPost}>
      <h3>{newsTitleElement}</h3>
      <img
        className={NewsPostClass.postImg}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtWdO_hXtchoJdzOZwp6RVH9yOnlKvnbPxA&usqp=CAU"
        alt="img"
      ></img>
      <p className={NewsPostClass.news}>{newsPostElement}</p>
    </div>
  );
};

export default NewsPost;

// 