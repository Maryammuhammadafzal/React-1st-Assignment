import React, { useState, useEffect } from "react";
import white_bg from "../../assets/my-image/white-background-image.avif"
import black_bg from "../../assets/my-image/background_images.jpg"
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

let main = document.getElementById('root');

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
      setTheme(storedTheme === "dark" ? true : false);
      setThemeIcon(
        storedTheme === "dark" ? (
          <MdWbSunny size={25} color={"#000"} />
        ) : (
          <FaMoon size={25} color={"#000"} />
        )
      );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", themeColor)
   document.body.classList.add(themeColor);
   document.body.classList.remove(themeColor === "dark" ? "light" : "dark");
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
      main.style.backgroundSize = "cover";
      main.style.color = "#fff";
    }
  }, [themeColor]);
  useEffect(() => {
    setThemeIcon(
      theme === true ? (
        <MdWbSunny size={25} color={"#000"} />
      ) : (
        <FaMoon size={25} color={"#000"} />
      )
    );
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(!theme);
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme-container">
      <div className="theme-icon" onClick={handleThemeChange}> {themeIcon} </div>
    </div>
  );
};

export default Theme;

