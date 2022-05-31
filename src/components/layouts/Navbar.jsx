import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
// import {useState} from 'react'
import 'flowbite';
import vasiti from '../../assets/Vasiti-Logo-black 1.png';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [moreOption, setMoreOption] = useState(false);

  return (
    <header className=" flex justify-center text-center items-center flex-col">
      <>
        <nav className="flex  flex-wrap container mx-auto items-center justify-between lg:px-[84px] px-8 py-8 bg-white text-[#242120] ">
          <div className="container px-4  flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/home"
                className="text-xl font-semibold  text-[#242120] uppercase"
              >
                <img src={vasiti} alt="vasati" className="w-[150px] h-[35px]" />
              </Link>
              <button
                button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={
                'lg:flex flex-grow items-center flex-1' +
                (navbarOpen ? ' flex' : ' hidden')
              }
              id="example-navbar-danger"
            >
              <ul className="flex lg:rounded-none rounded-md lg:w-auto lg:mx-0 lg:shadow-none lg:drop-shadow-none flex-col mx-auto my-6 bg-[#f5dcce13] drop-shadow-lg shadow-lg lg:bg-white w-full py-6 lg:flex-row list-none lg:ml-auto text-[13px]">
                <li className="my-y lg:my-3 px-4">
                  <NavLink
                    to="/about"
                    className="text-[#242120] rounded-full hover:cursor-pointer hover:text-[#FF5C00] uppercase"
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="my-y lg:my-3 px-4">
                  <NavLink
                    to="/stories"
                    className="text-[#242120]  rounded-full hover:cursor-pointer hover:text-[#FF5C00] uppercase"
                  >
                    Stories
                  </NavLink>
                </li>
                <li className="my-y lg:my-3 px-4">
                  <NavLink
                    to="/Contact"
                    className="text-[#242120]  rounded-full hover:cursor-pointer hover:text-[#FF5C00] uppercase"
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="my-y lg:my-3 px-4">
                  <NavLink
                    to="/Login"
                    className="text-[#242120]  rounded-full hover:cursor-pointer hover:text-[#FF5C00] uppercase"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="my-y lg:my-3 px-4">
                  <NavLink
                    to="/signup"
                    className="text-white bg-[#FF5C00] px-6 py-3 rounded-md  hover:cursor-pointer uppercase"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
      <section>
         <span className="sr-only">Open main menu</span>
        <span className='flex items-center lg:hidden text-[12px] hover:opacity-80 text-slate-600 cursor-pointer'
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setMoreOption(!moreOption)}> Show More Menus 
        <svg className="w-12 h-12 ml-1 lg:hidden text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

        </span>
       
        <div
          // id="dropdownNavbar"
          className={ moreOption ? ' flex flex-col uppercase mt-4' : ' hidden lg:flex flex-grow flex-1 z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 lg:uppercase text-[#242120] text-[13px] justify-center flex-col xl:flex-row space-x-0 lg:space-x-6  lg:flex-row flex-wrap border-[1px]  items-center text-center lg:w-screen uppercase'
                
              } >
      
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          marketplace
        </a>
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          wholesale center
        </a>
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          seller center
        </a>
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          services
        </a>
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          internships
        </a>
        <a
          href="/#"
          className="py-[17px] px-[16px]  hover:bg-slate-100 hover:text-[#FF5C00]"
        >
          events
          </a>
          </div>
      </section>
    </header>
  );
}

export default Navbar;
