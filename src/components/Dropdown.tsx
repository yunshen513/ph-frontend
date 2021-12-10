import React,  { useState } from 'react';
import "./Dropdown.css"
import { Item } from "./Navbar/Navbar"

interface Props {
  cName: string;
  dropdownItems: Item[];
}

export const Dropdown: React.FC<Props> = ({cName, dropdownItems}) => {
  const [subDropdown, setSubDropdown] = useState<string>("");

  return(
    <ul className={cName}>
      {dropdownItems.map((item: Item, index: number) => {
        return (
          <li key={index} >
            <a className="dropdownItem" href= {item.link} onClick={() => setSubDropdown(item.title)}>
              {item.title}
            </a>
            {item.title === subDropdown && item.menu && <Dropdown cName={"sub-dropdown"} dropdownItems={item.menu}/>}
          </li>
        )
      }
    )}
    </ul>
  )
}
