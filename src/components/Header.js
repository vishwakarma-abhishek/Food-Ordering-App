
const Header = () =>{
    return(<div className="header-container">
    <header className="app-header">
      <div className="global-nav">
        <div className="logo">
          <a href="/" className="home-link" title="Food App">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="app logo"></img>
          </a>
        </div>

        <ul className="nav-option-list">
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
              <div className="input-box-wraper">
                <div className="input-container">
                    <input className="search-input" type="text" placeholder="Search for Food or Restaurant"/>
                </div>
              </div>  
              <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="Search"></img>
              <span>Search</span>
            </div>
          </li>
        </ul>

      </div>
    </header>
  </div> );

};


export default Header;