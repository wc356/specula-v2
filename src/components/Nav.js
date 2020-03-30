import Link from "next/link";
import PhoneListFilters from "../components/PhoneListFilters";

const Nav = () => (
  <div className="navbar">
    <div className="title">
      <Link href="/">
        <a className="logo">specula</a>
      </Link>
    </div>
    <PhoneListFilters />
    <div className="nav-flexend">
      <div className="navitems">
        <Link href="/add">
          <a className="navlink">Add Phone</a>
        </Link>
        <Link href="/help">
          <a className="navlink">Help</a>
        </Link>
      </div>
    </div>

    <style jsx>
      {`
        .navbar {
          display: flex;
          position: sticky;
          top: 0;
          border-bottom: 1px solid lightgray;
          background: #fff;
          height: 15vh;
          width: 100%;
          align-items: center;
          z-index: 2;
          box-shadow: 3px 3px 6px #eee;
        }
        .logo {
          display: inline;
          padding: 15px;
          margin-left: 15px;
          font-size: 25px;
          background: linear-gradient(to right, #5834db, #e60073);
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
