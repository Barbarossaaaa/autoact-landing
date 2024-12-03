import React from 'react';
import BgImage from './assets/main_demo.png'
import { useState } from 'react'
import { ReactComponent as GrayLogo } from './assets/automata_logo.svg'
import { ReactComponent as Hamburger } from './assets/hamburger.svg'
import { ReactComponent as Cross } from './assets/cross.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppPage = () => (
  <div
    className="flex items-center justify-center h-screen text-white bg-gray-800"
  >
    <h1 className="text-4xl">Hello World</h1>
  </div>
);


const Navbar = () => {
  // Get current path from useLocation hook
  

  // State to toggle the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full px-6 sm:py-2 -sm:px-0 lg:py-[10px] xl:py-[12.5px] 2xl:py-4">
      {/* LEFT : Logo + Name */}
      <a
        className="flex w-max justify-start items-center gap-4 pointer-events-auto"
        href="/"
      >
        <GrayLogo className="h-[24px] md:h-[28px] xl:h-[36px] mac:h-[40px] 2xl:h-[56px] w-auto" />
        AUTOMATA
      </a>

      {/* Hamburger Menu (Visible on small screens only) */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="flex items-center text-white pointer-events-auto focus:outline-none"
        >
          {isMenuOpen ? (
            <Cross className="w-5 h-5" />
          ) : (
            <Hamburger className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* RIGHT : NavLinks + LaunchBtn (hidden on small screens) */}
      <div className="hidden lg:flex w-max justify-end items-center lg:gap-8 mac:gap-9 2xl:gap-10 font-regular text-sm mac:text-base 2xl:text-lg text-white">
        <a
          className={`hover:underline hover:underline-offset-4 pointer-events-auto`}
          href="/"
        >
          Home
        </a>
        <a
          className={`hover:underline hover:underline-offset-4 pointer-events-auto`}
          href="/about"
        >
          Tutorial
        </a>
        
        <a
          className="hover:underline hover:underline-offset-4 pointer-events-auto"
          href="https://twitter.com/kleo_network"
          target="_blank"
        >
          Twitter ↗
        </a>
        <a
          className="hover:underline hover:underline-offset-4 pointer-events-auto"
          href="https://discord.gg/Qn6ZmecTEw"
          target="_blank"
        >
          Discord ↗
        </a>
        <a
          className="h-fit px-[14px] py-2 lg:px-[18px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-sm mac:text-base 2xl:text-lg text-primary-800 pointer-events-auto"
          href="http://localhost:5173/app"
          target="_blank"
        >
          Launch
        </a>
      </div>

      {/* Mobile Menu (Visible when menu is open) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-full left-0 w-full flex flex-col items-center bg-gray-800 text-white p-6 space-y-4`}
      >
        <a
          className={`block hover:underline pointer-events-auto`}
          href="/"
        >
          Home
        </a>
        <a
          className={`block hover:underline pointer-events-auto`}
          href="/about"
        >
          Tutorial
        </a>
        
        
        <a
          className="block hover:underline pointer-events-auto"
          href="https://twitter.com/kleo_network"
          target="_blank"
        >
          Twitter ↗
        </a>
       
        <a
          className="block h-12 px-5 py-3 rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-base text-primary-800 pointer-events-auto"
          href="http://localhost:5173/app"
          target="_blank"
        >
          Launch
        </a>
      </div>
    </nav>
  )
}

const HomePage = () => (
  <>
      

     
      <section
  className="relative text-white"
  style={{
    backgroundImage: `
      url(${BgImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '105vw', // Use 100vw to cover the entire screen width
    marginLeft: '-8px', // Ensure no unintended margins
    padding: 0, // Ensure no unintended padding
    overflow: 'hidden', // Prevent horizontal scrollbar
  }}
>
</section> 
      
    
    </>
);

function App() {
  return (
    <Router>
      <header className="bg-[#111826] text-white">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;