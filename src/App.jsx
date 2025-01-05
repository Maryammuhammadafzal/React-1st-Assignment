import { useState , useEffect} from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Services from "./Services";

// import Hero from "./Pages/Hero/hero.jsx";
// import About from "./Pages/About/About.jsx";
// import Services from "./Pages/Services/services.jsx";
// import Contact from "./Pages/Contact/Contact.jsx";
import Loading from "./components/Loading/Loading.jsx";
import { All_images } from "./components/All_images/All_images.js"; 
import Theme from "./components/Theme/Theme.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [isLoading , setisLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => setisLoading(false) , 2000);
    return () => clearTimeout(timer);
  },[])
  return (
    <>
    {isLoading ? 
      <Loading /> :
       (<div className="main w-full min-h-full flex-col flex items-center">
          <Navbar/>
        </div>)
    }   
    </>
  );
}

export default App;
