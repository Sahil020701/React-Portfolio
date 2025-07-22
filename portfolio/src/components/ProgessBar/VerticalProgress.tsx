import { useEffect, useState } from "react";

function VerticalProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed h-[75vh] top-[15vh] left-[2.5vw] w-1 z-50 pointer-events-none">
      {" "}
      <div className="relative h-full w-full">
        {/* Unprogressed area (black) */}{" "}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-black rounded-full" />
        {/* Progressed area (gradient) */}{" "}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px rounded-full transition-all duration-200"
          style={{
            height: `${progress}%`,
            background: "linear-gradient(to bottom, #3b82f6, #a21caf)",
          }}
        />
      {/* Progress dot with outer ring */}{" "}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-200"
          style={{ top: `calc(${progress}% - 10px)` }}
        >
          {" "}
          <div className="relative w-5 h-5 flex items-center justify-center">
            {/* Outer ring */}{" "}
            <div className="absolute w-full h-full rounded-full border-2 border-blue-400/40 animate-pulse backdrop-blur-sm" />
            {/* Inner dot */}{" "}
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-md z-10" />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default VerticalProgress;
