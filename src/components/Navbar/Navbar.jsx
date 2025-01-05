import React, { useState } from "react";
import Theme from "../Theme/Theme.jsx";
import { All_images } from "../All_images/All_images.js";
// import logo from "../../assets/my-image/Maryam Afzal-logo.png";


function Navbar() {
//    const navbarMenu = () => {
//      const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//      const toggleMenu = () => {
//        setIsMenuOpen(!isMenuOpen);
//      };
    
//   const toggle = ()=>{
//     let dropDown = document.getElementById("myDropdown");
//     if(dropDown.classList.contains("hidden")){
//       dropDown.classList.remove("show");
//   }
//   else{
//     dropDown.classList.remove("show");
//     dropDown.classList.add("hidden");
//     }
//   }
//   let toggleBtn = document.getElementById('toggleBtn')
//  toggleBtn && toggleBtn.addEventListener('click', toggle)

 
  return (
    <div className="w-full h-20 px-[100px] fixed bg-[#141c27] ">
         <div className="grow shrink basis-0 h-20 px-3 justify-between items-center flex">
           <div className="w-full h-20 left-[20px] top-0 absolute" />
           <div className="w-[180px] h-20 flex-col justify-center items-start inline-flex">
             <img className="h-20 relative" src={All_images.my_logo} />
           </div>
           <div className="justify-start items-start flex">
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch px-5 pt-8 pb-[31px] justify-start items-start gap-2.5 inline-flex">
                 <div className="justify-start items-start flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Home</div>
                 </div>
                 <div className="w-[11.50px] h-3.5 relative" />
               </div>
             </div>
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
                 <div className="justify-start items-start inline-flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">about</div>
                 </div>
               </div>
             </div>
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
                 <div className="justify-start items-start inline-flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">services</div>
                 </div>
               </div>
             </div>
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
                 <div className="justify-start items-start inline-flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">projects</div>
                 </div>
               </div>
             </div>
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch px-5 pt-8 pb-[31px] justify-start items-start gap-2.5 inline-flex">
                 <div className="justify-start items-start flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Blog</div>
                 </div>
                 <div className="w-[11.50px] h-3.5 relative" />
               </div>
             </div>
             <div className="self-stretch flex-col justify-start items-start inline-flex">
               <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
                 <div className="justify-start items-start inline-flex overflow-hidden">
                   <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Contact</div>
                 </div>
               </div>
             </div>
           </div>
           <div className="w-20 h-20 pl-[26.88px] pr-[26.87px] pt-6 pb-[26px] bg-[#55e6a5] flex-col justify-start items-start inline-flex">
             <div className="w-[26.25px] h-[30px] relative origin-top-left rotate-180" /><Theme/>
           </div>
         </div>
       </div>
  );
//  };
}

export default Navbar;
