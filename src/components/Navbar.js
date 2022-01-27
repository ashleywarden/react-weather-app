import { MenuItems } from './MenuItems'

const Navbar = () => {
    return (
        <nav className='NavbarItem'>
            <h1 className="navbar-logo">Weather App</h1>
            <div className="menu-icon">

            </div>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
