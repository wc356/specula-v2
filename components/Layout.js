import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
          }
          a,
          p {
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
