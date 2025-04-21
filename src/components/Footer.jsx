import React from "react";

function Footer() {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] text-gray-100 py-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Matsysol<span className="text-blue-500">.dev</span>. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;