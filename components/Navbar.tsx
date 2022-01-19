import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <nav className={`absolute w-full md:p-12 p-6`} id="top">
      <NavbarList />
    </nav>
  );
};

const NavbarList = () => {
  const Router = useRouter();
  return (
    <div className={`flex md:flex-row flex-col justify-between gap-4`}>
      <h2 className="text-3xl text-blue-500 text-center">Somnath Das</h2>
      <ul className={`flex md:text-md gap-4 justify-center`}>
        <li>
          <Link href="/">
            <a
              className={`${
                Router.pathname === "/"
                  ? "underline decoration-2 decoration-gray-600 underline-offset-8 font-bold"
                  : ""
              }  `}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={`${
                Router.pathname === "/about"
                  ? "underline decoration-2 decoration-gray-600 underline-offset-8 font-bold"
                  : ""
              }`}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={`${
                Router.pathname === "/contact"
                  ? "underline decoration-2 decoration-gray-600 underline-offset-8 font-bold"
                  : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
