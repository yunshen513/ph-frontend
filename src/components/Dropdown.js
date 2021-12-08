import React,  { useState } from 'react';
import "./Dropdown.css"

function Dropdown(props) {
  const [subDropdown, setSubDropdown] = useState();

  return(
    <ul className={props.cName}>
      {props.dropdownItems.map((item, index) => {
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

export default Dropdown;