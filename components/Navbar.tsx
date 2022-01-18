import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`absolute w-full md:p-12 p-6`}>
      <NavbarList />
    </nav>
  );
};

const NavbarList = () => {
  return (
    <div className={`flex md:flex-row flex-col justify-between gap-4`}>
      <h2 className="text-3xl text-cyan-500 text-center">John Doe</h2>
      <ul className={`flex md:text-md gap-4 justify-center`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
