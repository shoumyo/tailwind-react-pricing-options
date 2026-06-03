import React, { useState } from 'react';
import Link from './Link';
import { Menu, SquareX } from 'lucide-react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  // Remember to pass a unique key prop when rendering arrays in React!
  const links = navigationData.map(route => <Link key={route.id} route={route} />);

  return (
    // Added 'relative' so the absolute positioned mobile menu targets this nav element container
    <nav className='flex justify-between items-center mx-10 mt-1.5 relative py-2'>
      
      {/* Brand & Mobile Toggle Container */}
      <div className='flex items-center'>
        {/* Toggle Button: The click handler belongs strictly here */}
        <button 
          className='md:hidden block focus:outline-none z-10' 
          onClick={() => setOpen(!open)}
        >
          {open ? <SquareX /> : <Menu />}
        </button>
        
        {/* Mobile Dropdown Menu */}
        {/* Swapped to flex-col so links stack properly, and added left-0 / w-full for positioning */}
        <ul className={`md:hidden absolute left-0 w-full flex flex-col gap-2 p-4 transition-all duration-500 text-black shadow-lg rounded-b-md
          ${open ? 'top-10 opacity-100' : '-top-60 opacity-0 pointer-events-none'}
          bg-amber-200`}
        >
          {links}
        </ul>
        
        <h3 className='ml-4 font-bold'>My navbar</h3>
      </div>

      {/* Desktop Menu */}
      <ul className='md:flex hidden gap-6'>
        {links}
      </ul>

      {/* Action Button */}
      <button className='btn'>Sign In</button>
    </nav>
  );
};

export default NavBar;