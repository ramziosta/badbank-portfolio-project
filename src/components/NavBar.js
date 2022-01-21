import React from "react";
import Button  from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  //< this is state for the hamburger menu
  const [click, setClick] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          BadBank
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {/* //< this onClick will change the state of the class if clicked or not and display the fa-icon */}
          <i className={click ? "fa fa-times" : "fas fa-bars"} />
        </div>
                {/* //!...... active is not working? ........*/}
        <ul className={ click? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item' >
            {/* //< this onclick will close and open the nav menu in mobile view  by changing the class name */}
                <Link to='/' className='nav-links' onClick={closeMobileMenu} activeClassName={click?'navbar__link--active':'navbar__link'}>
                    Home
                </Link>
            </li>
            <li 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <Link 
                to='/transactions' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                   Transactions <i className='fa fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
                <Link 
                to='/deposit' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                   Deposit
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/withdraw' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                    Withdraw
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/alldata' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                   All Data
                </Link>
            </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}
