import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Projects", link: "/Projects" },
    { name: "Tech Stack", link: "/TechStack" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/uditmathur2001" },
    { name: "Chat", link: "/Chat" },
  ];

  return (
    <header className=" text-white px-6 sm:px-10 py-4 sm:py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">

        <div>
          <img src="/umLogo.svg" alt="Logo" className="w-8 sm:w-8" />
        </div>
                </Link>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/hamburger.svg" alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <span className="text-[#BABABB] text-sm hover:text-white transition">
                {item.name}
              </span>
            </Link>
          ))}
          <button  className=" bg-[#161515] border border-[#434343] text-sm px-4 py-2 rounded-full hover:bg-[#1d1d1d] transition">
            <a className='flex items-center gap-2' href="/resume.pdf" download>
                        <img src="/download.svg" alt="Download" className="w-4 h-4" />
            Resume
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col items-start mt-4 gap-4 sm:hidden">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-[#BABABB] text-sm hover:text-white transition">
                {item.name}
              </span>
            </Link>
          ))}
          <button className="flex items-center gap-2 bg-[#161515] border border-[#434343] text-sm px-4 py-2 rounded-full hover:bg-[#1d1d1d] transition">
            <img src="/download.svg" alt="Download" className="w-4 h-4" />
            Resume
          </button>
        </div>
      )}
    </header>
  );
}
