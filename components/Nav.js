import Link from "next/link";

const Nav = () => (
  <div className="navbar">
    <div className="title">
      <Link href="/">
        <a className="logo">SPECULA</a>
      </Link>
    </div>
    <div className="nav-flexend">
      <div className="navitems">
        <Link href="/about">
          <a className="navlink">About</a>
        </Link>
        <Link href="/how">
          <a className="navlink">How</a>
        </Link>
        <Link href="/contact">
          <a className="navlink">Contact</a>
        </Link>
      </div>
    </div>

    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        .navbar {
          display: flex;
          position: sticky;
          top: 0;
          background-color: pink;
          height: 15vh;
          width: 100%;
          align-items: center;
        }
        .logo {
          display: block;
          padding: 15px;
        }
        .nav-flexend {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .navitems {
          display: flex;
          justify-content: flex-end;
          margin-right: 50px;
        }
        .navlink {
          display: block;
          padding: 15px;
        }
      `}
    </style>
  </div>
);

export default Nav;
