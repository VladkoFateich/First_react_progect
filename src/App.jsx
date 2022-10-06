import './App.css';
import Header from "./component/Header/Header";
import Main from './component/Main/Main';
import State from './State/state';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header/>
<Main postData={props.state.postData} messagesData={props.state.messagesData} dialogItemData={props.state.dialogItemData} elemData={props.state.elemData} newsPostData={props.state.newsPostData} musicData={props.state.musicData} dispatch={props.dispatch} addMessage={props.addMessage} addNewTrack={props.addNewTrack}  />
    </div>
  );
}

export default App;

// updateNewPostText={props.updateNewPostText}