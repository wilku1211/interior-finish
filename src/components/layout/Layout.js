import React from "react";
import classes from "./lauout.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes["main-wrapper"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
