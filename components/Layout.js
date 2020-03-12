import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="layout">{children}</div>
      <style jsx>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
