import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainClass from './Main.module.css'
import Menu from './Menubar/Menu'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import Music from './Music/Music'
import Setting from './Setting/Setting'
import Friends from './Friends/Friends'




const Main = (props) => {
    return (
        <BrowserRouter>
        <div className={MainClass.main}>
            <Menu elemData={props.elemData}/>
            <Routes>
            <Route path='/profile/*' element={<Profile postData={props.postData} dispatch={props.dispatch} />}/>
            <Route path='/dialogs/*' element={<Dialogs messagesData={props.messagesData} dialogItemData={props.dialogItemData} addMessage={props.addMessage}/>}/>
            <Route path='/news/*' element={<News newsPostData={props.newsPostData} />}/>
            <Route path='/music/*' element={<Music musicData={props.musicData} addNewTrack={props.addNewTrack}/>}/>
            <Route path='/setting/*' element={<Setting/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Main
//updateNewPostText={props.updateNewPostText}