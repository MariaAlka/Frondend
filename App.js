
import { useState } from "react";
import AppLogo from "./components/AppLogo";
import PageTitle from "./components/PageTitle";
import MainLayout from "./components/MainLayout";
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from"./redux/store.js";
import Login from "./pages/login/Login.jsx";
 const router = createBrowserRouter([
 {
 path: "/",
 element: <h1>home page</h1>, 
},
 {
  path:'/login',
  element:<Login/>, 
 }
 ]);

function App() {
  return (  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  );   
}   

export default App;
