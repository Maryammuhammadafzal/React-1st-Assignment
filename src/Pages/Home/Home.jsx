import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-96 flex justify-center items-center">
        <div className="w-[95%] h-80 flex justify-center items-center">
          <div className="border "></div>
          <div className="cards w-[90%] h-fit flex gap-3 justify-center">
            <Card title="Weather App" description="Check the weather" image="" />
            <Card title="Weather App" description="Check the weather" image="" />
            <Card title="Weather App" description="Check the weather" image="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
{
  /* */
}
