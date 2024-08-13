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
        className="text-green md:text-3xl text-2xl font-bold ml-4 z-40 cursor-pointer"
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <svg
          version="1.1"
          viewBox="0 0 2048 1135"
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(715,15)"
            d="m0 0 5 1 13 15 24 28 9 11 9 10 9 11 13 15 11 13 24 28 9 11 9 10 9 11 13 15 11 13 36 42 8 10 5-2 14-9 16-8 3-1 1 16 6 30v13l-4 5-13 10-11 12-11 18-6 16-3 12-1 8v21l4 20 6 15 8 14 11 13 11 10 11 8 1 1 1 14v48l-10-3-19-9-15-10-10-8-10-9-7-7-11-14-10-16-9-19-6-19-4-23v-34l3-18 6-21 8-18 5-9-2-4-24-28-9-11-9-10-9-11-13-15-12-14-11-13-12-14-11-13-24-28-9-11-9-10-9-11-13-15-8 6-14 14-9 11-11 15-12 19-11 21-11 27-9 30-6 29-3 21-2 26v39l3 36 6 36 7 30 7 24 10 29 13 31 14 28-1 3-19 9-16 12-7 5-7 1-15-30-13-30-13-36-10-34-8-36-5-30-3-28-1-15v-50l3-34 6-35 7-28 10-30 13-30 10-19 12-19 10-14 11-14 11-12 9-10 14-13 4-5 8-7 8-8 10-13 8-4z"
            fill="#41eca5"
          />
          <path
            transform="translate(1343,15)"
            d="m0 0 11 2 8 7 9 12 10 10 7 6 6 7 8 7 11 11 7 8 12 15 12 17 12 20 12 23 11 26 9 27 7 28 5 28 3 26 1 14v55l-3 33-5 34-9 40-10 34-12 33-9 21-8 18-8 16-5 8-9-4-14-11-14-8-12-6 9-19 11-24 10-26 11-33 9-36 6-33 3-27 1-13v-47l-2-24-5-32-6-25-11-33-9-20-12-23-8-12-14-19-14-15-13-13-4 2-9 11-13 15-11 13-12 14-11 13-24 28-9 11-9 10-9 11-13 15-12 14-11 13-12 14-11 13-7 8 1 6 8 16 6 16 4 16 2 13 1 13v11l-2 21-4 18-6 18-8 16-7 12-9 12-9 10-12 12-16 12-18 10-14 6-6 2v-62l9-7 10-8 10-10 9-13 7-14 5-16 2-11v-26l-4-18-5-13-7-13-9-12-11-11-12-9-1-5v-9l5-25 2-14v-7l6 1 17 9 13 9 4-2 12-14 9-11 9-10 9-11 13-15 12-14 11-13 12-14 11-13 24-28 9-11 9-10 9-11 13-15 11-13 24-28 7-8z"
            fill="#41eca5"
          />
          <path
            transform="translate(68,603)"
            d="m0 0h148l13 4 8 6 5 8 2 7v108h-64v-79l-77-1 1 78 10 9 32 30 13 12 16 15 13 12 17 16 13 12 16 15 7 11 3 11v124l-4 11-5 6-9 5-12 3h-146l-13-4-8-6-5-8-2-6-1-8v-106l1-1h63v86h77v-84l-10-10-8-7-17-16-7-7-8-7-17-16-7-7-8-7-34-32-14-13-7-11-3-10-1-8v-103l2-12 4-8 8-7 10-4z"
            fill="#41eca5"
          />
          <path
            transform="translate(1878,751)"
            d="m0 0h76l34 1 11 4 6 5 5 9 2 7v249h-59l-1-4 1-5-56 9-18 2h-19l-10-3-8-6-5-7-3-12v-112l2-9 5-8 8-7 9-3 8-1h87v-63h-59v38l-12 1h-44l-1-1v-54l3-12 5-8 8-6 9-3zm16 151v78h27l32-1v-77z"
            fill="#41eca5"
          />
          <path
            transform="translate(531,751)"
            d="m0 0h14l31 1v223l5-1 53-2v-162l1-58 29-1 33 1v274h-62v-9l-54 9-20 2h-21l-12-4-7-6-5-10-2-12v-244z"
            fill="#41eca5"
          />
          <path
            transform="translate(1405,751)"
            d="m0 0h20l22 1 26 131 8 40v7h2l1-9 21-104 13-65 20-1h19l25 1-4 17-21 84-18 71-20 79-25 98-6 23-1 1h-63l2-10 24-86 1-6-23-91-19-74-26-103v-3z"
            fill="#41eca5"
          />
          <path
            transform="translate(1088,750)"
            d="m0 0h26l10 4 8 7 4 7 2 10v88h-62v-63l-48 1-1 222h-62v-274l17-1h18l27 1v10l12-3 35-7z"
            fill="#41eca5"
          />
        </svg>
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
