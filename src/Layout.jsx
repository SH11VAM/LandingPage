import React from "react";
import Header from "./Components/header/Header"
import { Outlet } from "react-router-dom";
import Footer from "./Components/footer/Footer"

function Layout() {
  return (
  <>
  <Header />
  <Outlet />
  <Footer />
  
  </>);
}

export default Layout;
