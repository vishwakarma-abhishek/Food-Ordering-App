import React from "react";
import  ReactDOM  from "react-dom/client";
import restList from "./src/util/mockData";
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";
import FooterComponent from "./src/components/FooterComponent";



const AppLayout = () =>{
 return (
   <div className="main-app">
     <Header />
     <AppBody resData={restList}/>
     <FooterComponent/>

   </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);