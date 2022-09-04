import './App.css';
import Header from "./component/Header/Header";
import Main from './component/Main/Main';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header/>
<Main postData={props.state.postData} messagesData={props.state.messagesData} dialogItemData={props.state.dialogItemData} elemData={props.state.elemData} newsPostData={props.state.newsPostData} musicData={props.state.musicData}/>
    </div>
  );
}

export default App;
