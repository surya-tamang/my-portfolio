import Nav from "../components/NavList";
import { Link } from "react-scroll";
import useNavbar from "../hooks/UseNavbar";
import PropTypes from "prop-types";

const Header = ({ menu, toggleMenu }) => {
  Header.propTypes = {
    menu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

  const { visible } = useNavbar();

  return (
    <header
      className={`flex w-full justify-between items-center py-2 px-4 lg:px-8 z-10 backdrop-blur-sm fixed ${
        visible ? "block" : "hidden"
      }`}
    >
      <Link
        className="text-green md:text-3xl text-2xl font-bold ml-4 z-40"
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        S.T
      </Link>

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
        className={`md:flex bg-black md:static md:h-auto absolute h-screen md:bg-transparent ${
          menu ? "flex" : "hidden"
        } top-0 z-30 items-center right-0 md:w-auto w-full text-green justify-center`}
      >
        <ul className="md:flex md:gap-8 px-6 text-center w-full md:h-auto h-screen items-center justify-center bg-accent md:bg-transparent md:pt-0 pt-36">
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
                className="navlist block uppercase font-mono py-1 my-5 md:py-0 px-1 md:text-white relative cursor-pointer z-30"
              >
                {nav}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
