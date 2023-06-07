import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import { AuthContextProvider } from './context/AuthContext';

import { BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

// import { AuthContextProvider } from './context/AuthContext';

const AppLayout = () => {

  return(
    <>
    <Navbar />
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
  <Router basename='/netflix-clone-reactjs'>
    <AppLayout />
  </Router>,
  document.getElementById('root')
)