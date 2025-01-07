import { useState, useEffect } from "react";
import "./App.css";

import Loading from "./components/Loading/Loading.jsx";
import { All_images } from "./components/All_images/All_images.js";
import Theme from "./components/Theme/Theme.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setisLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main w-full min-h-full flex-col flex items-center">
          <Home/>
          </div>
      )}
    </>
  );
}

export default App;
