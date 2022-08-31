import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainClass from './Main.module.css'
import Menu from './Menubar/Menu'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import Music from './Music/Music'
import Setting from './Setting/Setting'




const Main = () => {
    return (
        <BrowserRouter>
        <div className={MainClass.main}>
            <Menu/>
            <Routes>
            <Route path='/profile/*' element={<Profile/>}/>
            <Route path='/dialogs/*' element={<Dialogs/>}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/setting/*' element={<Setting/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Main