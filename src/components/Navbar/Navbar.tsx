import React, {useState} from 'react';
import { Button } from "../Button"
import { Dropdown } from '../Dropdown';
import "./Navbar.css";

export interface Item {
    module_type?: string;
    link?: string;
    title: string;
    menu?: Item[];
}

interface Props {
 navItems: Item;
 openModal: () => void;
}

export const Navbar: React.FC<Props> = ({navItems, openModal}) => {
  const [toExpand, setToExpand] = useState<string>("")

  return(
      <nav className="NavbarItems">
          {<h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>}
          <ul className='nav-menu'>
              {navItems.menu && navItems.menu.map((item: Item, index: number) => {
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
          {<Button onClick={openModal}>Login</Button>}
      </nav>
  )
}
