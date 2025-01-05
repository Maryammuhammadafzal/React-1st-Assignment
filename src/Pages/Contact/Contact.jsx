import React from "react";
import facebookIcon from "../../assets/my-image/facebook-icon.png"
import LinkedInIcon from "../../assets/my-image/linkedin-icon.png"
import githubIcon from "../../assets/my-image/github-icon.png"

function Contact() {
  return (
    <div className="container bg-slate-800 w-full min-h-80">
      <div className="footer w-full h-full p-3 flex flex-col items-center">
        <h2 className="text-3xl text-white font-bold my-3">Contact Us</h2>
        <div className="footer-top w-full min-h-96 py-2 my-2 flex flex-col">
          <div className="form w-full h-full flex flex-col rounded-2xl border-[1px] bg-gray-500 bg-opacity-10">
            <form className="w-full h-full p-3 flex flex-col space-y-5 text-base ">
              <div className="form-group w-full min-h-40 p-2">
                 <div className="social-links w-full h-20 flex justify-center items-center space-x-4 ">
                        <a href="https://www.facebook.com/profile.php?id=61557444029142" className="rounded-lg bg-white w-[4.3rem] flex justify-center items-center h-[4.3rem] text-2xl">
                                <img src={facebookIcon} className="cursor-pointer w-16" alt="facebook-icon" />

                        </a>
                        <a href="https://www.linkedin.com/in/marium-afzal-916b012bb/" className="rounded-lg bg-white w-[4.3rem] flex justify-center items-center h-[4.3rem] text-2xl">
                        <img src={LinkedInIcon} className="cursor-pointer w-14" alt="facebook-icon" />
                        </a>
                        <a href="https://github.com/Maryammuhammadafzal" className="text-2xl">
                        <img src={githubIcon} className="cursor-pointer w-[4.5rem] rounded-lg" alt="facebook-icon" />
                        </a>

                 </div>

                <label className="text-white font-bold">Name:</label>
                <input
                  type="text"
                  className="w-full h-2 p-3 my-2 rounded-xl font-mono"
                />
              </div>
              <div className="form-group w-full h-12 p-3">
                <label className="text-white font-bold">Email:</label>
                <input
                  type="text"
                  className="w-full h-2 p-3 my-2 rounded-xl font-mono"
                />
              </div>

              <div className="w-full h-17 py-4 my-2 flex justify-center">
              <button className='w-1/2  bg-[#556B2F] text-white p-2 cursor-pointer' >Send</button>
              </div>
            </form>

          </div>

        <div className="footer-bottom w-full h-1/2 py-2 flex flex-col text-wrap text-xs md:text-lg md:pl-6">
        <h3 className="text-2xl text-white font-bold my-3">Contact Details</h3>
                <p className="text-white font-bold my-3">Phone: 03323355899</p>
                <p className="text-white font-bold my-3">Email: bibimariummuhammadafzal@gmail
                        .com</p>
                <p className="text-white font-bold my-3">Address: Commercial Area, Bhains Colony, Landhi, Karachi</p>
        </div>
      </div>
      <div className="border-t border-gray-400 w-full h-10 py-2 flex items-center justify-center">
        <p className="text-gray-300 text-sm">	&copy; 2023 copyright all right reserved</p>
      </div>
      </div>
    </div>
  );
}

export default Contact;
