import React, {useState} from 'react';
import { Button } from "../Button"
import Dropdown from '../Dropdown';
import "./Navbar.css";

function Navbar(props) {
  const [toExpand, setToExpand] = useState()

  return(
      <nav className="NavbarItems">
          {<h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>}
          <ul className='nav-menu'>
              {props.navItems.menu.map((item, index) => {
                  return(
                      <li key={index}>
                          <a className= "nav-links" href= {item.link} onClick={() => setToExpand(item.title)}>
                              {item.title}
                          </a>
                          {toExpand === item.title && item.menu && <Dropdown cName={"dropdown"} dropdownItems={item.menu}/>}
                      </li>
                  )
              })}        
          </ul>
          {<Button onClick={props.openModal}>Login</Button>}
      </nav>
  )
}

export default Navbar