

// import React, { useState, useEffect } from "react";
// import white_bg from "../../assets/my-image/white-background-image.avif"
// import black_bg from "../../assets/my-image/background_images.jpg"
// import { MdWbSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa6";

// let main = document.getElementById('root');

// const Theme = () => {
//   const [theme, setTheme] = useState('dark');
// //   const [themeColor, setThemeColor] = useState("dark");
//   const [themeIcon, setThemeIcon] = useState(
//     <MdWbSunny size={25} color={"#000"} />
//   );
// //   const [themeText, setThemeText] = useState("Dark");
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setTheme(storedTheme === "dark" ? 'light' : 'dark');
//       setThemeIcon(
//         storedTheme === "dark" ? (
//           <MdWbSunny size={25} color={"#000"} />
//         ) : (
//           <FaMoon size={25} color={"#000"} />
//         )
//       );
//       storedTheme === "dark" ? document.body.style.backgroundImage = `url(${black_bg})` : document.body.style.backgroundImage = `url(${white_bg})`;
//       storedTheme === "dark" ? document.body.style.color = "#000" : document.body.style.color = "#fff";
//       document.body.style.backgroundRepeat = "no-repeat";
//           document.body.style.backgroundSize = "cover";
          
//     }
//   }, []);
// //   useEffect(() => {
// //     localStorage.setItem("theme", themeColor)
// //    document.body.classList.add(themeColor);
// //    document.body.classList.remove(themeColor === "dark" ? "light" : "dark");
// //   }, [themeColor]);
//   // useEffect(() => {
//   //   if (theme === "dark") {
//   //     main.style.backgroundImage = `url(${black_bg})`;
//   //     main.style.backgroundRepeat = "no-repeat";
//   //     main.style.backgroundSize = "cover";
//   //     main.style.color = "#000";
//   //   } else {
//   //     main.style.backgroundImage = `url(${white_bg})`;
//   //     main.style.backgroundRepeat = "no-repeat";
//   //     main.style.backgroundSize = "cover";
//   //     main.style.color = "#fff";
//   //   }
//   // }, [theme]);
//   // useEffect(() => {
//   //   setThemeIcon(
//   //     theme === 'dark' ? (
//   //       <MdWbSunny size={25} color={"#000"} />
//   //     ) : (
//   //       <FaMoon size={25} color={"#000"} />
//   //     )
//   //   );
//   // }, [theme]);
// const handleThemeChange = () => {
//   const newTheme = theme === "dark" ? "light" : "dark"; 
//   setTheme(newTheme); // Update theme state
//   setThemeIcon(
//     newTheme === "dark" ? (
//       <FaMoon size={25} color={"#fff"} />
//     ) : (
//       <MdWbSunny size={25} color={"#000"} />
//     )
//   ); 
//   if(newTheme === "dark"){
//     document.body.style.backgroundImage = `url(${white_bg})`;
//      document.body.style.backgroundRepeat = "no-repeat";
//      document.body.style.backgroundSize = "cover";
//      document.body.style.color = "#fff";
   
//     } else {
//       document.body.style.backgroundImage = `url(${black_bg})`;
//       document.body.style.backgroundRepeat = "no-repeat";
//       document.body.style.backgroundSize = "cover";
//       document.body.style.color = "#000";
//     }

// };



  
//   return (
//     <div className="theme-container">

//       <div className="theme-toggle" onClick={handleThemeChange}> 
//         <button className="theme-icon ">
//        <span> {themeIcon} </span>
//         </button>
//         </div>
//     </div>
//   );
// };

// export default Theme;



import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import white_bg from "../../assets/my-image/white-background-image.avif"
import black_bg from "../../assets/my-image/background_images.jpg"

const Theme = () => {
  const [theme, setTheme] = useState("dark"); 
  const [bg , setBg] = useState(white_bg);

  useEffect(()=>{
    if(theme === "dark"){
      document.body.style.backgroundImage = `url(${black_bg})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.color = "#fff";
      document.body.style.transition = "background-color 0.5s ease-in-out";
    } else {
      document.body.style.backgroundImage = `url(${white_bg})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.color = "#000";
      document.body.style.transition = "background-color 0.5s ease-in-out";

    }
    }, [theme]);
  
  const handleThemeChange = (event) => {
    const isDarkTheme = event.target.checked; 
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);

    if (isDarkTheme) {
      document.body.style.backgroundImage = `url(${black_bg})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundImage = `url(${white_bg})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.color = "#000";
    }
  };

  return (
    
    <div className="theme-container flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        className="hidden"
        onChange={handleThemeChange}
      />
      <label
        htmlFor="theme-toggle"
        className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-full relative">
        <span className="absolute left-1 text-black">
          {theme === "light" ? <MdWbSunny size={20} /> : <FaMoon size={20} />}
        </span>
      </label>
    </div>
  );
};

export default Theme;



