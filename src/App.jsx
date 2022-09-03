import './App.css';
import Header from "./component/Header/Header";
import Main from './component/Main/Main';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header/>
<Main postData={props.postData} messagesData={props.messagesData} dialogItemData={props.dialogItemData} elemData={props.elemData} newsPostData={props.newsPostData} postTitleData={props.postTitleData}/>
    </div>
  );
}

export default App;
