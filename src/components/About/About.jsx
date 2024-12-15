import React from "react";
import frontendIcon from "../../assets/my-image/code-icon.png";

function About() {
  return (
    <div className="container w-full min-h-40 flex flex-col justify-center space-y-5 ">
      <div className="about xl:w-full flex flex-col  justify-center space-y-2 items-center py-3">
        <h1 className="text-3xl font-bold text-center text-gray-700 p-5">
          About Me
        </h1>
        <p className="text-[#556B2F] text-center text-2xl w-48 md:w-full font-bold capitalize">
          I am a software developer with a passion
        </p>
        <hr className="border-b-2 w-16 border-[#464646] border-solid" />
      </div>

      <div className="speciality xl:w-full xl:p-3 flex flex-col justify-center items-center py-2">
        <div className="cards xl:w-full flex md:flex-row md:space-x-3 flex-col justify-center items-center py-3 space-y-3">
          <div className="card xl:w-1/3 border-gray-400 rounded-2xl border-[1px] p-2 flex flex-col justify-center items-center">
            <div className="text  flex flex-col justify-center space-y-5 items-center py-3">
              <h1 className="text-2xl font-bold text-center text-gray-700">
                Frontend
              </h1>
              <div className="icon border-2 p-2 rounded-lg border-black flex flex-col justify-center items-center">
                <img src={frontendIcon} className="w-5 h-5" alt="code-icon" />
              </div>
              <p className="text-[#717170] xl:w-full xl:text-center text-1xl w-48">
                Say goodbye to the hassle of managing multiple providers and get
                an all-in-one website solution that covers design, development,
                and content creation.
              </p>
            </div>
          </div>

          <div className="card xl:w-1/3 border-gray-400 rounded-2xl border-[1px] p-2 flex flex-col justify-center items-center">
            <div className="text  flex flex-col justify-center space-y-5 items-center py-3">
              <h1 className="text-2xl font-bold text-center text-gray-700">
              UI/UX Designer
              </h1>
              <div className="icon border-2 p-2 rounded-lg border-black flex flex-col justify-center items-center">
                <img src={frontendIcon} className="w-5 h-5" alt="code-icon" />
              </div>
              <p className="text-[#717170] xl:w-full xl:text-center text-1xl w-48">
                Say goodbye to the hassle of managing multiple providers and get
                an all-in-one website solution that covers design, development,
                and content creation.
              </p>
            </div>
          </div>

          <div className="card xl:w-1/3 border-gray-400 rounded-2xl border-[1px] p-2 flex flex-col justify-center items-center">
            <div className="text  flex flex-col justify-center space-y-5 items-center py-3">
              <h1 className="text-2xl font-bold text-center text-gray-700">
              User Research
              </h1>
              <div className="icon border-2 p-2 rounded-lg border-black flex flex-col justify-center items-center">
                <img src={frontendIcon} className="w-5 h-5" alt="code-icon" />
              </div>
              <p className="text-[#717170] text-1xl xl:w-full xl:text-center w-48">
                Say goodbye to the hassle of managing multiple providers and get
                an all-in-one website solution that covers design, development,
                and content creation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-b border-[#c1c0c0] border-solid" />
    </div>
  );
}

export default About;
