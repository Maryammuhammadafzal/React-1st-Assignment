import React, { useState } from "react";
import Theme from "../Theme/Theme.jsx";
import { All_images } from "../All_images/All_images.js";
import { FaTwitter } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/my-image/Maryam Afzal-logo.png";


function Navbar() {
 

  return (
    <div className="w-full h-20 bg-[#060606] ">
      <div className="h-20 justify-between w-full items-center flex">
        <div className="w-fit h-2 flex justify-between items-center" />
        <div className="w-20 h-20 justify-center items-start inline-flex">
          <img className="text-white bg-white h-20 w-24 rounded-3xl" src={logo} alt="img" />
        </div> 
        <div className="justify-center items-center flex gap-x-7 w-fit h-20">
        <div className="flex-col justify-center items-center flex h- cursor-pointer">
            <div className="flex-col justify-center items-center flex h-full cursor-pointer">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  Home
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h- cursor-pointer">
            <div className="flex-col justify-center items-center flex h-full cursor-pointer">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  about
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  services
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  projects
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  Blog
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                <FaTwitter size={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                <TfiLinkedin size={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full">
            <div className="flex-col justify-center items-center flex h-full">
              <div className="justify-center items-center flex overflow-hidden">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                <FaFacebookF size={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex h-full w-fit">
            <div className="flex-col justify-center items-center flex h-full w-fit">
              <div className="justify-center items-center flex overflow-hidden w-fit">
                <div className="text-white text-sm font-medium font-['Poppins'] w-fit uppercase leading-3 hover:border-b hover:border-white tracking-wide">
                <FaInstagram size={30}/>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="w-20 h-20  bg-[#cececd] justify-center items-center flex">
          <div className="w-full h-full flex justify-center items-center">
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
  //  };
}

export default Navbar;
// relative origin-top-left rotate-180
