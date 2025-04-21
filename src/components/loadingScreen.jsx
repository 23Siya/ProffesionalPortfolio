import React, { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const [showLogo, setShowLogo] = useState(true); // State to control logo visibility
  const fullText = "...Loading Please Wait..";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          console.log("Hiding logo and calling onComplete");
          setShowLogo(false); // Hide the logo after loading
          onComplete(); // Call the onComplete function
        }, 1000); // Delay before calling onComplete
      }
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [onComplete]);

  useEffect(() => {
    console.log("showLogo:", showLogo); // Debugging state updates
  }, [showLogo]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Logo at the top left */}
      {showLogo && (
        <div className="absolute top-4 left-4 text-2xl font-bold text-gray-100">
          Matsysol<span className="text-blue-500">.dev</span>
        </div>
      )}

      {/* Loading text */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-12">|</span>
      </div>

      {/* Loading bar */}
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div>
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;