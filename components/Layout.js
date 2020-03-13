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
            font-family: "Poppins", sans-serif;
          }
          li {
            list-style: none;
          }
          a {
            text-decoration-skip-ink: auto;
            transition: all 0.15s;
          }
          a:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </>
  );
};

export default Layout;
