import PropTypes from "prop-types";

const Footer = ({ year, author }) => {
  return (
    <footer
      className="bg-transparent border-t border-stone-700 w-full text-center"
      aria-label="Footer"
    >
      <div className="mx-auto px-2 py-4 md:py-6 flex items-center justify-center text-sm">
        <p>
          &copy; {year} {author}, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  year: new Date().getFullYear(),
  author: "Surya Tamang",
};

export default Footer;
