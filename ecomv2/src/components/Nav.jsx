import { React, useState} from "react";
import './Nav.css';
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Nav() {

// isActive orginal set to false using useState
// handleHamburgerClick gives us the logic to set the state of isActive to true
// pass the function to the hamburger button through onClick 

const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav-head">
      <nav className="main-nav">
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
		<FontAwesomeIcon icon={faBars} className="card-icon" />
        </div>
        <ul className={`nav-left ${isActive ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link">HOME</NavLink></li>
          <li><NavLink to="/shop" className="nav-link">SHOP</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">CONTACT</NavLink></li>
        </ul>
        <ul className="nav-middle">
          <li className="middle-link"><Link to="/"><img src="/images/hglogo.avif" alt="" className="head-logo" /></Link></li>
        </ul>
        <ul className="nav-right">
          <li><FontAwesomeIcon icon={faShoppingBag} /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;