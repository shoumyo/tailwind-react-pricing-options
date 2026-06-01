import React from 'react';
import Link from './Link';

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
    return (
        <nav>
            {/* <ul className='flex'>
                <li className='mr-10'><a href=''>Home</a></li>
                <li className='mr-10'><a href=''>About</a></li>
                <li className='mr-10'><a href=''>Blog</a></li>
            </ul> */}

            <ul className='flex'>
                {
                    navigationData.map(route=><Link route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;