import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: "Hi, how are you", likeCount: 2 },
  { id: 2, message: "My first post", likeCount: 34 },
];

let elemData = [
  { id: "profile", value: "Profile" },
  { id: "dialogs", value: "Message" },
  { id: "news", value: "News" },
  { id:"music", value:"Music" },
  { id:"setting", value:"Setting" },
];
let dialogItemData = [
  { id: "Yosya_message", name: "Yosya" },
  { id: "Vasa_message", name: "Vasa" },
  { id: "Babich_message", name: "Babich" },
  { id: "Sirock_message", name: "Sirock" },
  { id: "Masel_message", name: "Masel" },
  { id: "Holod_message", name: "Holod" },
];
let messagesData = [
  { id: 1, message: "Yo" },
  { id: 1, message: "How are you" },
  { id: 1, message: "I am fine" },
  { id: 1, message: "..." },
  { id: 1, message: "Bye" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogItemData={dialogItemData} elemData={elemData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
