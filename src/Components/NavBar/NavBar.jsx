import React, { useState } from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';
import { SquareX } from 'lucide-react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {

    const[open,setOpen]=useState(false);
    const links=navigationData.map(route=><Link route={route}></Link>);

    return (
        <nav className='flex justify-between mx-10 mt-1.5'>
            {/* <ul className='flex'>
                <li className='mr-10'><a href=''>Home</a></li>
                <li className='mr-10'><a href=''>About</a></li>
                <li className='mr-10'><a href=''>Blog</a></li>
            </ul> */}
            <span className='flex'onClick={()=>setOpen(!open)}>
                <span className='md:hidden'>
                    {open?<SquareX></SquareX>:<Menu></Menu>}
                </span>

                <ul className={`md:hidden absolute duration-1000 text-black
                 ${open?'top-9':'-top-40'}
                 bg-amber-200`}>
                    {
                        links
                    }
                </ul>
                
                <h3 className='ml-4'>My navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                 links
                }
            </ul>
            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default NavBar;