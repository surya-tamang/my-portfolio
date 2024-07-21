import "../styling/glowButton.css";
const Button = ({ onClick, first, second, third }) => {
  return (
    <button className="glowing-btn text-1xl py-3" onClick={onClick}>
      <span className="glowing-txt">
        {first}
        <span className="faulty-letter">{second}</span> {third}
      </span>
    </button>
  );
};

export default Button;
