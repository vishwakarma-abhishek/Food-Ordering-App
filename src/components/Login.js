import CROSS_ICON from "../util/icons/cross-icon.png"
import { useEffect, useState } from "react";

const Login = ({handleSidebar, sidebar, handleLoginBtn, btnNameReact}) => {
    
    
    
    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState("");

    

        const onCrossClick = (value) =>{
            handleSidebar(value)
        }

        const handleLogin =() =>{
            if((phoneNum === "7722956394" && password === "123123") || (phoneNum === "8770399246" && password === "123123")){
                const result =  {status:"Authentication successful", phoneNumber: phoneNum  }
                console.log(result);
                onCrossClick(false);
                handleLoginBtn("Logout")
            }
        }

// if login === true this component 
// else return empty jsx

        if (sidebar === true){
            
            return (
                <div className="login-component w-1/3 h-full bg-gray-50 fixed top-0 right-0 shadow-2xl">
                    
                    <div className="right-space "></div>
                    <div className="login-container pl-20    pt-8 pr-8">
                        <div>
                            {/* style="padding-left: 40px; padding-right: 84px; width: 486px;" */}
                            <div className="input-fields_lables-container">
                                {/* style="height: 130px;" */}
                                <div className="login-header">
        
                                    <span className="icon-close-thin" onClick={ () => { 
                                        onCrossClick(false);  
                                        console.log("sidebar closed")}}>
                                            
                                        <img className="cross w-9" src={CROSS_ICON}/>
                                    </span>
                                    <div className="login-label text-2xl font-bold py-4">Login</div>
                                    <div className="create-acc">
                                    or 
                                    <a className="_3p4qh text-xl"> create an account</a>
                                    </div>
                                    <img
                                    className="food-icon w-28 ml-72 fixed top-20"
                                    imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                                    alt="img renderer"
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                                    />
                                </div>
                                <form>
                                <div className="flex flex-col gap-5 py-9">
                                    <div className="login-input-container w-64 h-14  px-3 border-2 border-solid border-orange-200 hover:border-green-200">
                                        <input
                                            className="input-box "
                                            type="tel"
                                            name="mobile"
                                            id="mobile"
                                            required
                                            tabIndex="1"
                                            maxLength="10"
                                            autoComplete="off"
                                            value={phoneNum}
                                            onChange={(e)=>{
                                                setPhoneNum(e.target.value)
                                            }}
                                        />
                                        <div className="_2EeI1">
                                            <label className="input-box-label" for="mobile">Phone Number</label>
                                        </div>
                                    </div>
        
                                    <div className="login-input-container w-64 h-14  px-3 border-2 border-solid border-orange-200 hover:border-green-200">
                                        <input
                                            className="input-box"
                                            type="password"
                                            name="password"
                                            id="password"
                                            required
                                            tabIndex="2"
                                            maxLength="16"
                                            autoComplete="off"
                                            value={password}
                                            onChange={(e)=>{
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        <div className="_2EeI1"></div>
                                        <label className="input-box-label" for="mobile">
                                            Enter your password
                                        </label>
                                    </div>
                                </div>
        
        
                                <div className="login-btn w-40 bg-orange-400  rounded-lg text-center  text-white font-bold  text-xl px-4 py-1 my-9 ">
                                    <a className="a-login-btn" onClick={ handleLogin}>
                                        
                                    {/***style="display: none;" */}Login
                                    </a>
                                </div>
        
                                </form>
        
                                <div className="term-condition">
                                    By clicking on Login, I accept the Terms Conditions
                                    &amp;
                                    <a className="IBw2l"style={{fontWeight:600}}> Privacy Policy</a>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
 //  ]
        return (
            <div className="login-component"></div>
        )
};

export default Login;
