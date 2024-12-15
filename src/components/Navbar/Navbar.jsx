import React, { useState } from "react";
import logo from "../../assets/my-image/Maryam Afzal-logo.png";


function Navbar() {
  // const navbarMenu = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };
    
  const toggle = ()=>{
    let dropDown = document.getElementById("myDropdown");
    if(dropDown.classList.contains("hidden")){
      dropDown.classList.remove("show");
  }
  else{
    dropDown.classList.remove("show");
    dropDown.classList.add("hidden");
    }
  }
  let toggleBtn = document.getElementById('toggleBtn')
 toggleBtn && toggleBtn.addEventListener('click', toggle)

 
  return (
    <div className=" w-full h-20 md:px-4 md:py-2">
      <div className="w-full flex justify-between">
        <div className="left">
          <div className="w-fit">
            <img src={logo} className="w-12 xl:w-16 xl:h-16 h-12" alt="logo" />
          </div>
        </div>

        <div className="right w-8 bg-slate-100 mx-3 h-8">
          <div className="w-full md:hidden h-full rounded-md border-2 border-black border-solid flex flex-col justify-center space-y-1 items-center cursor-pointer" id="toggleBtn">
            <div className="line w-6 h-[0.1rem] bg-black">-</div>
            <div className="line w-6 h-[0.1rem] bg-black">-</div>
            <div className="line w-6 h-[0.1rem] bg-black">-</div>
          </div>
          <div class="hidden sm:ml-6 sm:block" id="myDropdown">
          <div class=" space-x-4 hidden">
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
        </div>

       {/* Desktop Menu */}
         <div className="hidden dm space-x-4">
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
// };
}

export default Navbar;
