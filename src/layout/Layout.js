import React from "react";

import Navbar from "../components/Navbar/Navbar";

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        Copyright © {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
