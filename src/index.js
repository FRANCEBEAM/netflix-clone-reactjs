import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";


import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

// import { AuthContextProvider } from './context/AuthContext';

const AppLayout = () => {

  return(
    <>
    <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}


ReactDOM.render(
  <Router basename='/'>
    <AppLayout />
  </Router>,
  document.getElementById('root')
)