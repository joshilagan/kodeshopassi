import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/icon.png';
import './Header.css';

export const Header = () => {
  return (
    <header>
        <Link to="/" className='logo'>
        <img src={Logo} alt="Ucode Logo" width="50"/>
        <span>KodeShop</span>
        </Link>
        <nav className='navigation'>
          <NavLink to="/" className={"link"}>
            Home
          </NavLink>
          <NavLink to="/products" className={"link"}>
            Cart
          </NavLink>
        </nav>
        <span className='items'>Cart</span>
    </header>

  )
}
