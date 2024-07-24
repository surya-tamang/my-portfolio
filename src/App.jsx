import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Animation from "./components/Animation";

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 6000);
  }, []);
  return (
    <>
      <div className="main bg-black text-white min-h-screen w-full font-monster scroll-smooth">
        {intro ? (
          <Animation />
        ) : (
          <>
            <Home />
          </>
        )}
      </div>
    </>
  );
}

export default App;
