import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './State/state'
import {newMesssage} from './State/state'
import {addNewTracks} from './State/state'

export let rerenderTree = (State) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={State}/>
    </React.StrictMode>
  )
}
