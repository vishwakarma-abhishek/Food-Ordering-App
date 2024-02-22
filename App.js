import React from "react";
import  ReactDOM  from "react-dom/client";
import restList from "./src/util/mockData";
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";
import FooterComponent from "./src/components/FooterComponent";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contant from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () =>{
 return (
   <div className="main-app">
     <Header />
     <Outlet/>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contant />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);