import React from "react";
import './Navbar.css';
import logo from "./youtube-logo2.png";
function Navbar(){
    return(
        <div className="Container_Navbar">
           <div className="Logo_Navbar" >
            <div className="burger" >
                <p> </p>
                <p> </p>
                <p> </p>
            </div>
            <div className="logo_div_Navbar">
                <img src={logo}alt=""
                height={50}
                width={150}/>
                <p className="logo_title_navbar">YouTube</p>
            </div>
            <div>
                Web
            </div>

           </div>
        </div>
    );
}

export default Navbar;  