import NewsClass from "./News.module.css";
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {
  return (
    <div className={NewsClass.content}>
        <NewsPost newsPostData={props.newsPostData} postTitleData={props.postTitleData}/>
    </div>
  );
};

export default News;