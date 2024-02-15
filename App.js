import React from "react";
import  ReactDOM  from "react-dom/client";
import restList from "./src/util/mockData";
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";


const AppLayout = () =>{
 return (
   <div className="main-app">
     <Header />
     <AppBody resData={restList}/>
   </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);