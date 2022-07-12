const Layout = ({ children }) => {
  return (
    <>
      <header>
      
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
