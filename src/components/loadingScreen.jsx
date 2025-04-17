import React, { useEffect, useState } from "react";
function LoadingScreen({onComplete}) {   
    const [text,setText]=useState("");
    const fullText ="...Loading Please Wait..";
useEffect(()=>{
    let index = 0;
    const interval = setInterval(() => {
        setText(fullText.substring(0, index ));
   index++;
        if (index > fullText.length) {
            clearInterval(interval);

            setTimeout(() => {
                onComplete(); // Call the onComplete function after the text is fully displayed
            }, 1000); // Delay before calling onComplete
        }
    },
    100)
return () => clearInterval(interval); // Cleanup interval on component unmount
},[onComplete]
);

    return(

 <div className="fixed inset-0 z-50  bg-black text-gray-100 flex flex-col items-center justify-center">

<div className="mb-4 text-4xl font-mono font-bold">{text}<span className ="animate-blink ml-12">| </span></div>

<div className= "w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
  <div>
    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
 {" "}
  </div>
</div>
    </div>
    );
    
}

export default LoadingScreen;