import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dialogs from '../Dialogs/Dialogs'
import MainClass from './Main.module.css'
import Menu from './Menubar/Menu'
import Profile from './Profile/Profile'

const Main = () => {
    return (
        <BrowserRouter>
        <div className={MainClass.main}>
            <Menu/>
            <Routes>
            <Route path='/profile' component={<Profile/>}/>
            <Route path='/dialogs' component={<Dialogs/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Main