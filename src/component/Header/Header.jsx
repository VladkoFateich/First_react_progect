import HeaderClass from './header.module.css'

const Header = () => {
    return (
        <div className={HeaderClass.header}>
            <img className={HeaderClass.logo} src="https://upload.wikimedia.org/wikipedia/ru/thumb/6/6c/Bentley_logo.svg/1280px-Bentley_logo.svg.png" alt='logo'/>
            </div>
    )
}

export default Header