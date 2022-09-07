import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainClass from './main.module.css'
import Menu from './Menubar/menu'
import Profile from './Profile/profile'
import Dialogs from './Dialogs/dialogs'
import News from './News/news'
import Music from './Music/music'
import Setting from './Setting/setting'
import Friends from './Friends/friends'




const Main = (props) => {
    return (
        <BrowserRouter>
        <div className={MainClass.main}>
            <Menu elemData={props.elemData}/>
            <Routes>
            <Route path='/profile/*' element={<Profile postData={props.postData}/>}/>
            <Route path='/dialogs/*' element={<Dialogs messagesData={props.messagesData} dialogItemData={props.dialogItemData}/>}/>
            <Route path='/news/*' element={<News newsPostData={props.newsPostData} />}/>
            <Route path='/music/*' element={<Music musicData={props.musicData}/>}/>
            <Route path='/setting/*' element={<Setting/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Main