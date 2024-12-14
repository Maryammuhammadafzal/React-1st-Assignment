import React from "react";
import logo from "../../assets/Logo/my-logo.svg";


function Navbar() {
  const navbarMenu = () => {
    _s2();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return isMenuOpen
  };
  return (
    <div className="bg-red-200 w-full">
      <div className="m-2 w-full p-2 bg-slate-500 flex justify-between">
        <div className="left">
          <div className="w-fit">
            <img src={logo} className="w-12 h-12" alt="logo" />
          </div>
        </div>

        <div className="right w-8 bg-slate-100 mx-3">
          <div className="w-fit">
            <button
              type="button"
              class="relative w-fit inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg
                class="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        
        {isMenuOpen && (<div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a
              href="#"
              class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>)}

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4">
            <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              About
            </a>
            <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Projects
            </a>
            <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Contact
            </a>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
