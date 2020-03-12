import Link from "next/link";

const Nav = () => (
  <>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/how">
        <a>How</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </>
);

export default Nav;
