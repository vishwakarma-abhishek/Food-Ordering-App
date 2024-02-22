import LOGO_URL from "../util/constants"
import { useState } from "react";

const Header = () =>{

    const [btnNameReact, setBtnNameReact ] = useState("Login");

    return(<div className="header-container">
    <header className="app-header">
      <div className="global-nav">
        <div className="logo">
          <a  className="home-link" title="Food App">
            <img src={LOGO_URL} alt="app logo"></img>
          </a>
        </div>

        <ul className="nav-option-list">
          <li>
            <div>
              <button className="login-logout-btn" onClick={ () => {
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                console.log("btn clicked !")
              }}>{btnNameReact}</button>
            </div>
          </li>

          <li>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt="cart"></img>
              <span>Cart</span>
            </div>
          </li>

          <li>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="sign In"></img>
              <span>Sign In</span>
            </div>
          </li>
          <li>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/879/879757.png" alt="Offers"></img>
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