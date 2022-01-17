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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
