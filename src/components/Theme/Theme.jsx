import React, { useState, useEffect } from "react";
import white_bg from "../../assets/my-image/white-background-image.avif"
import black_bg from "../../assets/my-image/background_images.jpg"
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { All_images } from "../All_images/All_images";

let main = document.getElementById('root')
const Theme = () => {
  const [theme, setTheme] = useState(true);
  const [themeColor, setThemeColor] = useState("dark");
  const [themeIcon, setThemeIcon] = useState(
    <MdWbSunny size={25} color={"#000"} />
  );
  const [themeText, setThemeText] = useState("Dark");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeColor(storedTheme);
      setTheme(storedTheme === "dark");
      setThemeIcon(
        storedTheme === "dark" ? (
          <MdWbSunny size={25} color={"#000"} />
        ) : (
          <FaMoon size={25} style={{ color: "#fff" }} />
        )
      );
      setThemeText(storedTheme === "dark" ? "Dark" : "Light");
    }
  }, []);
  // useEffect(()=>{
  //       const headerLight = () => { let navbar = document.body.children[0].children[0].children[0].children[0]
  //               return (theme ? navbar.classList.add('bg-white') : navbar.classList.remove('bg-white')) }
  //       const headerDark = () => {let navbar = document.body.children[0].children[0].children[0].children[0]
  //               return (!theme ? navbar.classList.add('bg-black') : navbar.classList.remove('bg-black'))}
  //       setThemeText(theme === true ? headerLight() && headerDark() : headerDark() && headerLight());
  // },[theme])
  useEffect(() => {
    localStorage.setItem("theme", themeColor);
    main.classList.add(themeColor);
    main.classList.remove(themeColor === "dark" ? "light" : "dark");
  }, [themeColor]);
  useEffect(() => {
    if (themeColor === "dark") {
      main.style.backgroundImage = `url(${black_bg})`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundSize = "cover";
      main.style.color = "#000";
    } else {
      main.style.backgroundImage = `url(${white_bg})`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.color = "#fff";
    }
  }, [themeColor]);
  useEffect(() => {
    setThemeIcon(
      theme === true ? (
        <MdWbSunny size={25} color={"#000"} />
      ) : (
        <FaMoon size={25} style={{ color: "#fff" }} />
      )
    );
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(!theme);
    setThemeColor(themeColor === "dark" ? "light" : "dark");
    setThemeText(themeText === "Dark" ? "Light" : "Dark");
  };
  return (
    <div className="theme-container">
      <div className="theme-toggle" onClick={handleThemeChange}>
        <div className="theme-icon">{themeIcon}</div>
      </div>
    </div>
  );
};

export default Theme;
