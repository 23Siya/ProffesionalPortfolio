import React from "react";

function Home() {
  return (
    <section
    
      id="home"
      className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Welcome to <span className="text-blue-500">pedro.dev</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl">
        I am a passionate developer who loves building modern, responsive, and
        user-friendly web applications. Explore my projects and get in touch!
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-500 text-gray-100 rounded-lg text-lg hover:bg-blue-600 transition"
      >
        View Projects
      </a>
    </section>
  );
}
