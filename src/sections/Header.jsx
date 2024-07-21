import Nav from "../components/NavList";
import { Link } from "react-scroll";
const Header = ({ menu, toggleMenu }) => {
  return (
    <header className="flex w-full justify-between items-center py-5 px-4 lg:px-8">
      <h1 className="text-green md:text-3xl text-2xl font-bold">
        <button onClick={() => handleNavClick(refs.home)}>Portfolio</button>
      </h1>

      <div
        className="hamburger text-green text-3xl md:hidden z-40"
        id="hamBurger"
      >
        <button onClick={toggleMenu}>
          {menu ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      <nav
        className={`md:flex md:static md:h-auto absolute h-screen md:bg-transparent  ${
          menu ? "flex" : "hidden"
        } bg-white top-0 z-30 items-center right-0 md:w-auto w-80 text-green justify-center`}
      >
        <ul className="md:flex md:gap-8 px-6 text-center z-30">
          {Nav.map((item, index) => {
            const { nav, to, offset } = item;
            return (
              <Link
                key={index}
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                onClick={toggleMenu}
                className="navlist block uppercase font-mono py-1 my-5 md:py-0 px-1 md:text-white relative cursor-pointer"
              >
                {nav}
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* <div className={`mobile-nav hidden md:hidden`}>
        <ul className="flex flex-col items-center gap-4">
          {Nav.map((item, index) => {
            const { nav, to } = item;
            return (
              <Link
                key={index}
                to={to}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="uppercase font-mono cursor-pointer"
                onClick={toggleMenu}
              >
                {nav}
              </Link>
            );
          })}
        </ul>
      </div> */}
    </header>
  );
};

export default Header;
