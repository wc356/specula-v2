import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Specula</title>
        <meta charSet="UTF-8" />
        <meta author="Woo Young Choi" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
      </Head>
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
            text-decoration: none;
            transition: all 0.15s;
          }
          a:visited {
            color: none;
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
