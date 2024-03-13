import { Link } from "react-router-dom";
import LOGO_URL from "../util/constants"
// import { useState } from "react";

const Header = ({handleLoginBtn,btnNameReact, handleSidebar, sidebar}) =>{

    // const [btnNameReact, setBtnNameReact ] = useState("Login");

    return(
    
  <div className="header-container shadow-sm">
    <header className="app-header bg-green-50">
      <div className="global-nav flex justify-between">
        <div className="flex gap-8 items-center">

          <Link to="/"><div className="logo w-[75px]">
            <a  className="home-link" title="Food App">
              <img className="  mx-5 mt-2 mb-1"src={LOGO_URL} alt="app logo"></img>
            </a>
            
          </div></Link>
          <div className="text-2xl font-bold">Food App</div>
          
        </div>

        <ul className="nav-option-list flex flex-row-reverse gap-10 items-center px-5">
          <li className="mx-5">
            <div className="bg-orange-400  rounded-lg text-center  text-white font-bold  text-xl px-4 py-1" >
              <button className="" onClick={ () => {

                btnNameReact === "Login" ? handleSidebar(true) : handleLoginBtn("Login");
                console.log("btn clicked !")
                
              }}>{btnNameReact}</button>
            </div>
          </li>

          <li className="mx-5">
            <div className="w-8 flex flex-row gap-2">
              <img   src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt="cart"></img>
              <span>Cart</span>
            </div>
          </li>

          <li  className="mx-5">
            <div className="w-8 flex flex-row gap-2">
              <img  src="https://cdn-icons-png.flaticon.com/128/879/879757.png" alt="Offers"></img>
              <span>Offers</span>
            </div>
          </li>
          <li>
            <div>

            </div>
          </li>
        </ul>

      </div>
    </header>
  </div> );

};


export default Header;