import React, { lazy,Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import UserContext from "./utils/UserContext.js";

const Grocery= lazy(()=>import("./components/Grocery.jsx"));
const AppLayout = () => {
  const[userName,setUserName]=useState();
  //authentication
  useEffect(()=>{
    //make an api call and send username and password
    const data={
      name: "Samrat Karki",
    };
    setUserName(data.name);
  },[]);
  return ( 
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children :[
      {
      path:"/",
      element:<Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
      }

    ],
    errorElement: <Error/>, 
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
