import React, {useState} from 'react';
import { Button } from "../Button"
import "./Navbar.css";

function Navbar(props) {
  const [toExpand, setToExpand] = useState()

  return(
      <nav className="NavbarItems">
          {props.submenu.title === "My Site" && <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>}
          <ul className='nav-menu'>
              {props.submenu.menu.map((item, index) => {
                  return(
                      <li key={index}>
                          <a className= "nav-links" href= {item.link} onClick={() => setToExpand(item.title)}>
                              {item.title}
                          </a>
                          {toExpand === item.title && item.menu && <Navbar submenu={item}/>}
                      </li>
                  )
              })}        
          </ul>
          {props.submenu.title === "My Site" && <Button onClick={props.openModal}>Login</Button>}
      </nav>
  )
}

export default Navbar