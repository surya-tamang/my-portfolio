import { useRef, useEffect, useState } from "react";

const Squares = ({
  borderColor = "#999",
  hoverFillColor = "#222", // Default hover color set to semi-transparent red
}) => {
  const canvasRef = useRef(null);
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const squareSize = 50; // Square size set to 50px
  const numSquaresX = useRef();
  const numSquaresY = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initialize canvas size

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const squareX = x * squareSize;
          const squareY = y * squareSize;

          // Fill square if hovered
          if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          // Set the border color
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Draw radial gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)"); // Transparent center
      gradient.addColorStop(1, "#000"); // Black edge

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    drawGrid(); // Draw the initial grid (no animation)

    // Track mouse hover
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate which square is being hovered over
      const hoveredSquareX = Math.floor(mouseX / squareSize);
      const hoveredSquareY = Math.floor(mouseY / squareSize);

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
    };

    // Clear hover state when mouse leaves the canvas
    const handleMouseLeave = () => {
      setHoveredSquare(null);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [borderColor, hoverFillColor, hoveredSquare]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-none block"
    ></canvas>
  );
};

export default Squares;
