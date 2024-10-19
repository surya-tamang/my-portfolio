const Footer = () => {
  const year = new Date().getFullYear();
  const author = "Surya Tamang";
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

export default Footer;
