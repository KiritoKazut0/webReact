import React from "react";
import dateHeader from "../../Store/DateHader";
import '../../Components/Atoms/Style/Nav.css'
import Img from "../Atoms/Img";


function Nav() {

  return (
   <>
  
     <nav>
    <Img src={dateHeader.rutaImg} alt="Imagen"> </Img>
      <ul>
        {dateHeader.dateMenu.map((dateMenu, index) => (
          <li key={index}>
            <a href="#">{dateMenu}</a>
          </li>
        ))}
      </ul>
    </nav>
   </>
  );

}


export default Nav;

