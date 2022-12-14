import NewsClass from "./News.module.css";
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {
    let newsPostElement = props.newsPostData.map(newsPost => (
        <NewsPost id={newsPost.id} title={newsPost.title} text={newsPost.text}/>
      ));
  return (
    <div className={NewsClass.content}>
        {newsPostElement}
    </div>
  );
};

export default News;