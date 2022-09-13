
import State, { subscribe } from './State/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addMessage, addNewTrack, updateNewPostText} from './State/state'

    const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = () => {

  root.render(
    <React.StrictMode>
    <App state={State} addPost={addPost} addMessage={addMessage} addNewTrack={addNewTrack} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  )
}


rerenderTree(State)
subscribe(rerenderTree)