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
      className={`flex w-full justify-between items-center py-2 px-4 lg:px-8 z-10 md:backdrop-blur-sm fixed ${visible ? "block" : "hidden"}`}
    >
      <h1 className="text-green md:text-3xl text-2xl font-bold ml-4 ">
        <a href="#">S.T.</a>
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
        className={`md:flex md:static md:h-auto absolute h-screen bg-transparent ${
          menu ? "flex" : "hidden"
        } bg-black top-0 z-30 items-center right-0 md:w-auto w-80 text-green justify-center`}
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
    </header>
  );
};

export default Header;
