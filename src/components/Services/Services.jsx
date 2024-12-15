import React from "react";
import HtmlIcon from "../../assets/my-image/html-icon.png";
import CssIcon from "../../assets/my-image/css-icon.png";
import JSIcon from "../../assets/my-image/js-icon.png";
import ReactIcon from "../../assets/my-image/react-icon.png";


function Services() {
  return (
    <div className="contaner w-full h-full flex flex-col space-y-4 my-5 justify-center items-center">
      <h1 className="text-3xl font-bold text-center my-2 text-slate-700">Expertise</h1>
      <div className="flex xl:min-w-80  xl:flex xl:flex-row border-[1px] rounded-xl w-1/2 min-h-36 m-2 md:p-3 border-gray-400 md:flex-row flex-col space-y-2 flex-wrap">
        <div className="1 w-full xl:w-1/2 xl:space-x-3 h-12 flex flex-row p-2 items-center justify-between">
          <div className="icon w-6 md:w-10">
            <img className="w-7" src={HtmlIcon} alt="icon" />
          </div>
          <div className="progress-bar md:w-[22rem] w-40 h-3  bg-gray-400 rounded-lg">
            <p className="w-full h-3  bg-gray-700 rounded-lg"></p>
          </div>
        </div>

        <div className="2 w-full xl:w-1/2 xl:space-x-3 h-12 flex flex-row p-2 items-center justify-between">
          <div className="icon w-6 md:w-10">
            <img className="w-7" src={CssIcon} alt="icon" />
          </div>
          <div className="progress-bar md:w-[22rem] w-40 h-3  bg-gray-400 rounded-lg">
            <p className="w-5/6 h-3  bg-gray-700 rounded-lg"></p>
          </div>
        </div>

        <div className="3 w-full xl:space-x-3 xl:w-1/2 h-12 flex flex-row p-2 items-center justify-between">
          <div className="icon md:w-10 w-6">
            <img className="w-7" src={JSIcon} alt="icon" />
          </div>
          <div className="progress-bar md:w-[22rem] w-40 h-3  bg-gray-400 rounded-lg">
            <p className="w-4/5 h-3  bg-gray-700 rounded-lg transition-all "></p>
          </div>
        </div>

        <div className="4 xl:w-1/2 xl:space-x-3 w-full h-12 flex flex-row p-2 items-center justify-between">
          <div className="icon w-6 md:w-10">
            <img className="w-7" src={ReactIcon} alt="icon" />
          </div>
          <div className="progress-bar md:w-[22rem] w-40 h-3  bg-gray-400 rounded-lg">
            <p className="w-3/4 h-3  bg-gray-700 rounded-lg"></p>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Services;
