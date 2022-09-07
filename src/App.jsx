import './App.css';
import Header from "./component/Header/header";
import Main from './component/Main/main';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header/>
<Main postData={props.state.postData} messagesData={props.state.messagesData} dialogItemData={props.state.dialogItemData} elemData={props.state.elemData} newsPostData={props.state.newsPostData} musicData={props.state.musicData} addPost={props.addPost} addMessages={props.addMessages} addNewTrack={props.addNewTrack}/>
    </div>
  );
}

export default App;
