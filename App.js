import React, {Suspense, lazy} from "react";
import  ReactDOM  from "react-dom/client";
import restList from "./src/util/mockData";
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";
import FooterComponent from "./src/components/FooterComponent";

import Error from "./src/components/Error";   

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "./src/components/Login";
import RestaurantMenau from "./src/components/RestaurantMenu";
import useOnlineStatus from "./src/util/useOnlineStatus";

const About = lazy(()=> import ("./src/components/About"));

const Contact = lazy(()=> import ("./src/components/Contact")) ;

const AppLayout = () =>{
  const [btnNameReact, setBtnNameReact ] = useState("Login");
  const handleLoginBtn = (state)=> {
    setBtnNameReact(state);
  }
  
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar =  (state)=> {
    setSidebar(state);
    console.log("handleSideber called !! "+state)
  }

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus){
    console.log("user if offline");
  return (<h1>Looks like you are offline!!! Please check your internet connect.</h1>);
  }
 return (
   <div className="main-app">
     <Header handleLoginBtn={handleLoginBtn} btnNameReact={btnNameReact} handleSidebar={handleSidebar} sidebar={sidebar} />
     <Outlet/>
     <Login handleSidebar={handleSidebar} sidebar={sidebar} handleLoginBtn={handleLoginBtn} btnNameReact={btnNameReact}/>
     <FooterComponent/>

   </div>
 );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppBody /> 
        
      },
      {
        path: "/restaurants/:resId",
        element: < RestaurantMenau />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>About page is loading..... Please wait.</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>About page is loading..... Please wait.</h1>}><Contact /></Suspense>,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 