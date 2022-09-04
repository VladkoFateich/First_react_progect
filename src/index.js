import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './State/State'

// let postData = [
//   { id: 1, message: "Hi, how are you", likeCount: 2 },
//   { id: 2, message: "My first post", likeCount: 34 },
// ];

// let elemData = [
//   { id: "profile", value: "Profile" },
//   { id: "dialogs", value: "Message" },
//   { id: "news", value: "News" },
//   { id:"music", value:"Music" },
//   { id:"setting", value:"Setting" },
// ];
// let dialogItemData = [
//   { id: "Yosya_message", name: "Yosya" },
//   { id: "Vasa_message", name: "Vasa" },
//   { id: "Babich_message", name: "Babich" },
//   { id: "Sirock_message", name: "Sirock" },
//   { id: "Masel_message", name: "Masel" },
//   { id: "Holod_message", name: "Holod" },
// ];
// let messagesData = [
//   { id: 1, message: "Yo" },
//   { id: 2, message: "How are you" },
//   { id: 3, message: "I am fine" },
//   { id: 4, message: "..." },
//   { id: 5, message: "Bye" },
// ];
// let musicData = [
//   {id:1, author: 'Yosya', track: 'Какой-то трек № 1', time: '3:33'},
//   {id:2, author: 'Vasa', track: 'Какой-то трек № 2', time: '3:43'},
//   {id:3, author: 'Babich', track: 'Какой-то трек № 3', time: '3:39'},
//   {id:4, author: 'Sirock', track: 'Какой-то трек № 4', time: '3:12'},
//   {id:5, author: 'Masel', track: 'Какой-то трек № 5', time: '3:23'},
//   {id:6, author: 'Holod', track: 'Какой-то трек № 6', time: '3:57'},
//   {id:7, author: 'MC Petyx', track: 'Какой-то трек № 7', time: '3:45'},
//   {id:8, author: 'Niga', track: 'Какой-то трек № 8', time: '3:21'},
//   {id:9, author: 'Egorka', track: 'Какой-то трек № 9', time: '3:55'},
//   {id:10, author: 'Alesha', track: 'Какой-то трек № 10', time: '4:33'},
// ]
// let newsPostData = [
//   {
//     id:1,
//     title : 'Title 1',
//     text: "Итальянский винный дом Antinori приостановил поставки в Россию, выяснил «Ъ». Дистрибутор заверяет, что сформировал запасы для выполнения планов продаж.",
//   },
//   {
//     id:2,
//     title : 'Title 2',
//     text: "UnionPay ограничила прием в России своих карт, выпущенных за границей, сообщили источники РБК. По их словам, это решение связано с опасением вторичных санкций.",
//   },
//   {
//     id: 3,
//     title : 'Title 3',
//     text: "Минсельхоз прорабатывает возможность запрета импорта из ЕС растительных жиров, используемых кондитерами, узнал «Ъ». Серьезные проблемы возникнут у Ferrero и «Объединенных кондитеров», выпускающих шоколад «Аленка» и «Вдохновение».",
//   },
//   {
//     id: 4,
//     title : 'Title 4',
//     text: "Вооруженный мужчина попытался застрелить вице-президента Аргентины Кристину Киршнер. Нападавшего задержали, госпожа Киршнер не пострадала. Мотивы преступника не установлены.",
//   },
//   {
//     id: 5,
//     title : 'Title 5',
//     text: "«Яндекс» попросил АвтоВАЗ о поставках автомобилей для такси, сообщает Forbes. Для обновления автопарка «Яндексу» ежегодно нужно 50 тыс. машин. Компания опасается, что через год может возникнуть дефицит автомобилей.",
//   },
//   {
//     id: 6,
//     title : 'Title 6',
//     text: "Канцлер Германии Олаф Шольц считает, что было бы безответственно отказываться от российского газа. Но если Россия сама решит прекратить поставки, то ФРГ будет получать газ из других стран, отметил он.",
//   },
//   {
//     id: 7,
//     title : 'Title 7',
//     text: "Иран отправил ответ на предложения США по ядерной сделке. Вашингтон назвал полученный ответ Тегерана неконструктивным.",
//   },
//   {
//     id: 8,
//     title : 'Title 8',
//     text: "В Босфорском проливе сняли с мели сухогруз, вышедший накануне из украинского порта. Из-за ЧП в Босфоре приостановлено движение судов.",
//   },
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={State}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// postData={postData} messagesData={messagesData} dialogItemData={dialogItemData} elemData={elemData} newsPostData={newsPostData} musicData={musicData}