
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store  from './State/state';
// import {addPost, addMessage, addNewTrack, updateNewPostText} from './State/state'

    const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

  root.render(
    <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} addMessage={store.addMessage.bind(store)} addNewTrack={store.addNewTrack.bind(store)} />
    </React.StrictMode>
  )
}


rerenderTree(store.getState ())
store.subscribe(rerenderTree)
//updateNewPostText={store.updateNewPostText.bind(store)}