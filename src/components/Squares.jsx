import { useRef, useEffect, useState } from "react";

const Squares = ({
  borderColor = "#999",
  hoverFillColor = "#222",
}) => {
  const canvasRef = useRef(null);
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const squareSize = 50; // Size of each square
  const numSquaresX = useRef();
  const numSquaresY = useRef();

  const drawGrid = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);

    // Draw the grid and squares
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
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)"); // Transparent center
    gradient.addColorStop(1, "#000"); // Black edge

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size based on its parent container size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;  // Use the current container size
      canvas.height = canvas.offsetHeight;

      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;

      drawGrid(ctx, canvas.width, canvas.height);
    };

    // Call resizeCanvas initially to set up the grid
    resizeCanvas();

    // Track mouse hover
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate which square is being hovered over
      const hoveredSquareX = Math.floor(mouseX / squareSize);
      const hoveredSquareY = Math.floor(mouseY / squareSize);

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });

      drawGrid(ctx, canvas.width, canvas.height); // Redraw the grid on hover
    };

    const handleMouseLeave = () => {
      setHoveredSquare(null);
      drawGrid(ctx, canvas.width, canvas.height); // Redraw without hover state
    };

    // Add event listeners for mouse movement and leaving
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Resize the canvas on window resize
    window.addEventListener("resize", resizeCanvas);

    // Clean up listeners on component unmount
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
