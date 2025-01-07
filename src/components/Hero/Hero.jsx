import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";

import Profile_Image from "../../assets/my-image/my-image-01.png";
import Banner_Image from "../../assets/my-image/banner_shape.png";

function Hero() {
  const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 100; // Deleting speed in ms
  const pauseTime = 1000; // Pause time before deleting in ms

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const type = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full py-5 flex flex-col justify-center items-center px-9 space-y-8">
          <div className="h-36 flex-col justify-start items-center flex">
            <div>
              <span class="text-white text-6xl font-bold font-['Poppins'] uppercase leading-[72px]">
                HI, I'M ZYAN!
                <br />
                Creative{" "}
              </span>
              <span class="text-[#fde4a0] text-6xl font-black font-['Poppins'] uppercase leading-[72px]">
                Player
              </span>
            </div>
          </div>
          <div className="w-full h-[108.80px] flex items-center px-10 justify-start text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">
            I'm a passionate UI/UX designer with a mission to create delightful
            and
            <br />
            intuitive digital experiences. With a strong foundation in design
            principles and
            <br />a keen eye for detail, I specialize in translating complex
            ideas into user-
            <br />
            friendly interfaces that captivate and engage.
          </div>
          <div className="w-full h-fit px-10 gap-[30px] flex">
            <div className="px-10 py-5 bg-[#fde4a0] justify-center items-center flex">
              <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7 ">
                Download CV
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-50 flex justify-center items-center relative ">
          <img
            className="w-[430px] h-[430px] flex justify-center items-center animate-bounceNew "
            src={Banner_Image}
          />
          <img
            className="w-[550px] h-[520.11px] left-[100px] absolute "
            src={Profile_Image}
          />
        </div>
      </div>
    </>

//     //  <div className="w-[1920px] h-[8865.25px] relative">
//     //     <div className="w-[1920px] h-[1200px] left-0 top-0 absolute">
//     //       <div className="h-36 left-[312px] top-[418.53px] absolute flex-col justify-start items-start inline-flex">
//     //         <div><span class="text-white text-6xl font-bold font-['Poppins'] uppercase leading-[72px]">HI, I'M ZYAN!<br/>Creative </span><span class="text-[#55e6a5] text-6xl font-black font-['Poppins'] uppercase leading-[72px]">Player</span></div>
//     //       </div>
//     //       <div className="w-[627.03px] h-[108.80px] left-[312px] top-[592.41px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">I'm a passionate UI/UX designer with a mission to create delightful and<br/>intuitive digital experiences. With a strong foundation in design principles and<br/>a keen eye for detail, I specialize in translating complex ideas into user-<br/>friendly interfaces that captivate and engage.</div>
//     //       <div className="w-[636px] left-[312px] top-[766.28px] absolute justify-start items-center gap-[30px] inline-flex">
//     //         <div className="px-10 py-5 bg-[#55e6a5] justify-center items-center gap-2.5 flex">
//     //           <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Download CV</div>
//     //           <div className="w-3 h-4 relative" />
//     //         </div>
//     //         <div className="h-[50px] justify-center items-center gap-2.5 flex">
//     //           <div className="text-[#55e6a5] text-[50px] font-black font-['Font Awesome 5 Free'] capitalize leading-[50px]"></div>
//     //           <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-7">Watch The Video</div>
//     //         </div>
//     //       </div>
//     //       <img className="w-[526px] h-[585px] left-[1082px] top-[347.50px] absolute" src="https://via.placeholder.com/526x585" />
//     //       <img className="w-[456px] h-[502.11px] left-[1117px] top-[382.50px] absolute" src="https://via.placeholder.com/456x502" />
//     //     </div>
//     //     <div className="w-[1320px] h-[583px] left-[300px] top-[1330px] absolute">
//     //       <div className="h-6 px-[583.34px] left-[12px] top-0 absolute flex-col justify-start items-center inline-flex overflow-hidden">
//     //         <div className="text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY SERIVCE</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] pl-[343.38px] pr-[343.37px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Crafting stories through</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] px-[362.17px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">design and innovation</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[12px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[173.61px] h-6 left-[121.36px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Website Design</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[452px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[144.12px] h-6 left-[136.09px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Logo Design</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[892px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[210.69px] h-6 left-[102.83px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Apps Development</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[555px] left-[300px] top-[2043px] absolute">
//     //       <div className="w-[770px] h-[545px] left-0 top-0 absolute">
//     //         <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //           <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">ABOUT ME</div>
//     //         </div>
//     //         <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //             <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Transforming visions into</div>
//     //           </div>
//     //           <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //             <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">exceptional portfolios</div>
//     //           </div>
//     //         </div>
//     //         <div className="w-[444.92px] h-[108.80px] left-[142px] top-[258.88px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem quim voluptas sit<br/>aspernatur aut odit auting fugit sed thisnquia<br/>consequuntur magni dolores eos designer heresm qui<br/>ratione</div>
//     //         <div className="px-10 py-5 left-[142px] top-[462.75px] absolute bg-[#55e6a5] justify-center items-center gap-2.5 inline-flex">
//     //           <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Download Cv</div>
//     //           <div className="w-3 h-4 relative" />
//     //         </div>
//     //         <div className="w-[100px] h-0.5 left-[12px] top-[269px] absolute bg-[#a2a2a2]" />
//     //       </div>
//     //       <div className="w-[375.25px] h-[380px] left-[931.75px] top-0 absolute bg-[#55e6a5]" />
//     //       <img className="w-[395px] h-[480px] left-[892px] top-[20px] absolute" src="https://via.placeholder.com/395x480" />
//     //       <div className="w-[266.58px] h-[96.38px] left-[956.21px] top-[455px] absolute bg-[#232323]">
//     //         <div className="w-[65px] h-[65px] px-[11.25px] left-[30px] top-[15.69px] absolute bg-white/5 rounded-[32.50px] flex-col justify-start items-center inline-flex">
//     //           <div className="text-center text-[#a2a2a2] text-[40px] font-black font-['Font Awesome 5 Free'] leading-[65px]"></div>
//     //         </div>
//     //         <div className="w-[106.74px] h-[19.20px] left-[105px] top-[14.90px] absolute text-white text-base font-semibold font-['Poppins'] leading-tight">Daily Activity</div>
//     //         <div className="w-[131.88px] h-[27.20px] left-[105px] top-[44.09px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Loream is ispam</div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] pt-[5px] left-[300px] top-[2728px] absolute justify-start items-start gap-3 inline-flex">
//     //       <div className="w-[660px] h-[894.68px] relative">
//     //         <div className="w-[636px] h-[166px] left-[12px] top-[85px] absolute">
//     //           <div className="w-[478.34px] h-[60px] left-0 top-[-0.50px] absolute text-white text-9xl font-semibold font-['Poppins'] leading-[60px]">Design </div>
//     //           <div className="w-[121.42px] h-[60px] left-[477.95px] top-[23px] absolute text-white text-6xl font-semibold font-['Poppins'] leading-[60px]">and</div>
//     //           <div className="w-[329.14px] h-[60px] left-0 top-[106px] absolute text-white text-6xl font-semibold font-['Poppins'] leading-[60px]">Innovation</div>
//     //         </div>
//     //         <div className="w-[613.31px] h-[108.80px] left-[12px] top-[290.88px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting<br/>fugit sed thisnquia consequuntur magni dolores eos designer heresm qui<br/>ratione voluptatem sequi nesciuNeque porro quisquam est, oursqui dolorem<br/>ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</div>
//     //         <div className="h-[279.79px] px-10 pt-10 pb-[50.79px] left-[12px] top-[444.75px] absolute bg-[#09101a] flex-col justify-start items-center gap-[15px] inline-flex">
//     //           <div className="w-[75px] h-[60px] relative">
//     //             <div className="w-[75px] h-[60px] left-0 top-0 absolute">
//     //               <div className="w-[75px] h-[60.03px] left-[-0.03px] top-[-0.03px] absolute">
//     //               </div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch px-[75.03px] justify-center items-center gap-[0.01px] inline-flex">
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[68px]">0</div>
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[48px]">k+</div>
//     //           </div>
//     //           <div className="text-center text-white text-lg font-normal font-['Poppins'] leading-[30.60px]">Complete project</div>
//     //         </div>
//     //         <div className="h-[279.79px] px-10 pt-10 pb-[50.79px] left-[342px] top-[444.75px] absolute bg-[#09101a] flex-col justify-start items-center gap-[15px] inline-flex">
//     //           <div className="w-[75px] h-[60px] relative">
//     //             <div className="w-[75px] h-[60px] left-0 top-0 absolute">
//     //               <div className="w-[75px] h-[60.06px] left-0 top-[-0.05px] absolute">
//     //               </div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch px-[87.39px] justify-center items-center gap-[0px] inline-flex">
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[68px]">0</div>
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[48px]">+</div>
//     //           </div>
//     //           <div className="text-center text-white text-lg font-normal font-['Poppins'] leading-[30.60px]">Client review</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[636px] p-[60px] bg-[#09101a] flex-col justify-start items-start gap-[24.90px] inline-flex">
//     //         <div className="self-stretch h-12 flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[40px] font-medium font-['Poppins'] leading-[48px]">GET TOUCH ME?</div>
//     //         </div>
//     //         <div className="text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">For your car we will do everything advice design in us repairs<br/>and maintenance We are the some preferred.</div>
//     //         <div className="h-[621.88px] relative">
//     //           <div className="px-10 py-5 left-0 top-[554.68px] absolute bg-[#55e6a5] justify-center items-center inline-flex overflow-hidden">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">submit now</div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-6 pb-[24.19px] left-0 top-[30px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Your Name</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-6 pb-[24.19px] left-0 top-[133.18px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Your Email</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] pl-[21px] pr-9 pt-6 pb-[24.19px] left-0 top-[236.37px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Phone Number</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-[22.90px] pb-[131.84px] left-0 top-[339.56px] absolute border border-[#55e6a5] justify-start items-start inline-flex overflow-hidden">
//     //             <div className="text-[#a6a6ac] text-base font-medium font-['Poppins'] leading-7">Message</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="h-[1313.50px] px-[300px] pt-[105px] pb-[60px] left-0 top-[3742.25px] absolute bg-[#09101a] flex-col justify-start items-center inline-flex">
//     //       <div className="w-[1320px] h-[1148.50px] relative">
//     //         <div className="h-6 px-[432.08px] left-[122px] top-0 absolute flex-col justify-start items-center inline-flex overflow-hidden">
//     //           <div className="text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">EDUCATION & SKILL</div>
//     //         </div>
//     //         <div className="h-[130px] left-[122px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[65px] pl-[238.22px] pr-[238.23px] flex-col justify-start items-center flex overflow-hidden">
//     //             <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Showcasing your talent</div>
//     //           </div>
//     //           <div className="self-stretch h-[65px] px-[238.36px] flex-col justify-start items-center flex overflow-hidden">
//     //             <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">amplifying your impact</div>
//     //           </div>
//     //         </div>
//     //         <div className="px-[25px] py-3 left-[12px] top-[269px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2014 - 2018</div>
//     //         </div>
//     //         <div className="w-[457.29px] h-9 left-[12px] top-[343.59px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">WordPress and End Developer</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[12px] top-[389.48px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[672px] top-[269px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2012 - 2014</div>
//     //         </div>
//     //         <div className="w-[269.22px] h-9 left-[672px] top-[343.59px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">Python Developer</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[672px] top-[389.48px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[12px] top-[523.97px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2005 - 2009</div>
//     //         </div>
//     //         <div className="w-[317.04px] h-9 left-[12px] top-[598.56px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">Kent State University</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[12px] top-[644.46px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[672px] top-[523.97px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2009 - 2012</div>
//     //         </div>
//     //         <div className="w-[353.78px] h-9 left-[672px] top-[598.56px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">User Experience Design</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[672px] top-[644.46px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="h-[73.99px] pl-10 pr-[555.58px] pt-[14.90px] pb-[31.09px] left-[12px] top-[778.94px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">HTML</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[541.17px] pt-[14.90px] pb-[31.09px] left-[672px] top-[778.94px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Python</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[564.86px] pt-[14.90px] pb-[31.09px] left-[12px] top-[902.13px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">CSS</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[510.53px] pt-[14.90px] pb-[31.09px] left-[672px] top-[902.13px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Photoshop</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[506.98px] pt-[14.90px] pb-[31.09px] left-[12px] top-[1025.31px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Java Script</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[545.87px] pt-[14.90px] pb-[31.09px] left-[672px] top-[1025.31px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Figma</div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[1359px] left-[300px] top-[5185.75px] absolute">
//     //       <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //         <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY RECENT PORTFOLIO</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Elevate your brand to new</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">heights with our portfolio expertise</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[856px] h-[550px] left-[12px] top-[234px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/856x550" />
//     //       </div>
//     //       <div className="w-[416px] h-[550px] left-[892px] top-[234px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/416x550" />
//     //       </div>
//     //       <div className="w-[636px] h-[550px] left-[12px] top-[809px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/636x550" />
//     //       </div>
//     //       <div className="w-[636px] h-[550px] left-[672px] top-[809px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/636x550" />
//     //       </div>
//     //     </div>
//     //     <div className="h-[454.75px] left-[300px] top-[6659.75px] absolute flex-col justify-start items-center gap-[15px] inline-flex">
//     //       <div className="self-stretch h-6 px-[340.23px] flex-col justify-start items-center flex overflow-hidden">
//     //         <div className="self-stretch text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">CLIENTS REVIEW</div>
//     //       </div>
//     //       <div className="self-stretch h-[65px] px-[230.48px] flex-col justify-start items-center flex overflow-hidden">
//     //         <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">My testomonial</div>
//     //       </div>
//     //       <div className="self-stretch px-3 pt-[90px] justify-center items-start gap-6 inline-flex overflow-hidden">
//     //         <div className="w-[636px] h-[245.75px] relative border-2 border-[#333f4d]">
//     //           <div className="w-[18px] h-4 left-[32px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[59.28px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[86.56px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[113.84px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[141.13px] top-[53px] absolute" />
//     //           <div className="w-[194.82px] h-[26.40px] left-[32px] top-[75.49px] absolute text-white text-[22px] font-medium font-['Poppins'] leading-relaxed">Alexander Walker</div>
//     //           <div className="w-[146.13px] h-[16.80px] left-[32px] top-[113.18px] absolute text-[#a2a2a2] text-sm font-normal font-['Poppins'] uppercase leading-none tracking-wide">Graphic Designer</div>
//     //           <img className="w-[100px] h-[100px] left-[484px] top-[-48px] absolute rounded-[50px]" src="https://via.placeholder.com/100x100" />
//     //           <div className="w-[459.37px] h-[54.40px] left-[32px] top-[149.27px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Beautiful minimalist design and great, fast response with<br/>support. Highly recommend. Thanks Marketify!</div>
//     //           <img className="w-[50px] h-[35px] left-[559px] top-[154.38px] absolute" src="https://via.placeholder.com/50x35" />
//     //         </div>
//     //         <div className="w-[636px] h-[245.75px] relative border-2 border-[#333f4d]">
//     //           <div className="w-[18px] h-4 left-[32px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[59.28px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[86.56px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[113.84px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[141.13px] top-[53px] absolute" />
//     //           <div className="w-[201.72px] h-[26.40px] left-[32px] top-[75.49px] absolute text-white text-[22px] font-medium font-['Poppins'] leading-relaxed">Armin Van Buuren</div>
//     //           <div className="w-[150.25px] h-[16.80px] left-[32px] top-[113.18px] absolute text-[#a2a2a2] text-sm font-normal font-['Poppins'] uppercase leading-none tracking-wide">Content Manager</div>
//     //           <img className="w-[100px] h-[100px] left-[484px] top-[-48px] absolute rounded-[50px]" src="https://via.placeholder.com/100x100" />
//     //           <div className="w-[459.37px] h-[54.40px] left-[32px] top-[149.27px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Beautiful minimalist design and great, fast response with<br/>support. Highly recommend. Thanks Marketify!</div>
//     //           <img className="w-[50px] h-[35px] left-[559px] top-[154.38px] absolute" src="https://via.placeholder.com/50x35" />
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1920px] h-[242px] left-0 top-[7234.50px] absolute bg-[#55e6a5]">
//     //       <div className="w-[2792.61px] pl-5 pt-[25px] pb-[30px] left-0 top-0 absolute justify-start items-start gap-5 inline-flex">
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* PHP</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Python</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* design</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* world</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Development</div>
//     //       </div>
//     //       <div className="w-[2792.61px] pl-5 pt-[25px] pb-[30px] left-[2792.61px] top-0 absolute justify-start items-start gap-5 inline-flex">
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* PHP</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Python</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* design</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* world</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Development</div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[802.38px] left-[300px] top-[7601.50px] absolute">
//     //       <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //         <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY BLOG</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Unlocking the potential of your</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">personal brand</div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[12px] top-[234px] absolute flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch px-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] px-[24.38px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">The standard personal My<br/>portfolio</div>
//     //           </div>
//     //           <div className="h-[54px] px-[34.44px] py-[13px] left-[87.19px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[451.95px] top-[234px] absolute opacity-95 flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch px-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] pl-[24.37px] pr-[24.38px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">The standard personal My<br/>portfolio</div>
//     //           </div>
//     //           <div className="h-[54px] pl-[34.43px] pr-[34.44px] py-[13px] left-[87.19px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[891.04px] top-[234px] absolute opacity-95 flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch pl-[30.32px] pr-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] pl-[20.26px] pr-[20.28px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">Empowering your business<br/>with innovative solutions</div>
//     //           </div>
//     //           <div className="h-[54px] pl-[34.44px] pr-[34.43px] py-[13px] left-[87.18px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[183.86px] px-10 py-5 left-[1124.14px] top-[109px] absolute bg-[#55e6a5] justify-center items-center gap-2.5 inline-flex">
//     //         <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">More Blog</div>
//     //         <div className="w-3.5 h-4 relative" />
//     //       </div>
//     //     </div>
//     //     <div className="h-[422.38px] left-0 top-[8443.88px] absolute flex-col justify-start items-start inline-flex">
//     //       <div className="self-stretch h-[422.38px] px-[642px] pt-[115px] pb-[120px] bg-black/90 flex-col justify-start items-start gap-[35px] flex">
//     //         <div className="self-stretch h-9 px-[101.67px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-3xl font-semibold font-['Poppins'] uppercase leading-9 tracking-wide">SUBSCRIBE MY NEWSLETTER</div>
//     //         </div>
//     //         <div className="self-stretch h-[116.38px] pb-[32.19px] flex-col justify-start items-start flex">
//     //           <div className="self-stretch px-[26px] pt-[29px] pb-[29.19px] bg-[#131313] border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Enter Your Email</div>
//     //             </div>
//     //           </div>
//     //           <div className="px-10 py-5 left-[462px] top-[8px] absolute bg-[#55e6a5] justify-center items-center inline-flex overflow-hidden">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Notify Now</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     // <div className="w-[1920px] h-[9272.44px] left-[100px] top-[100px] absolute bg-[#02050a] flex-col justify-start items-start inline-flex">
//     //   <div className="w-[1920px] h-[8865.25px] relative">
//     //     <div className="w-[1920px] h-[1200px] left-0 top-0 absolute">
//     //       <div className="h-36 left-[312px] top-[418.53px] absolute flex-col justify-start items-start inline-flex">
//     //         <div><span class="text-white text-6xl font-bold font-['Poppins'] uppercase leading-[72px]">HI, I'M ZYAN!<br/>Creative </span><span class="text-[#55e6a5] text-6xl font-black font-['Poppins'] uppercase leading-[72px]">Player</span></div>
//     //       </div>
//     //       <div className="w-[627.03px] h-[108.80px] left-[312px] top-[592.41px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">I'm a passionate UI/UX designer with a mission to create delightful and<br/>intuitive digital experiences. With a strong foundation in design principles and<br/>a keen eye for detail, I specialize in translating complex ideas into user-<br/>friendly interfaces that captivate and engage.</div>
//     //       <div className="w-[636px] left-[312px] top-[766.28px] absolute justify-start items-center gap-[30px] inline-flex">
//     //         <div className="px-10 py-5 bg-[#55e6a5] justify-center items-center gap-2.5 flex">
//     //           <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Download CV</div>
//     //           <div className="w-3 h-4 relative" />
//     //         </div>
//     //         <div className="h-[50px] justify-center items-center gap-2.5 flex">
//     //           <div className="text-[#55e6a5] text-[50px] font-black font-['Font Awesome 5 Free'] capitalize leading-[50px]"></div>
//     //           <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-7">Watch The Video</div>
//     //         </div>
//     //       </div>
//     //       <img className="w-[526px] h-[585px] left-[1082px] top-[347.50px] absolute" src="https://via.placeholder.com/526x585" />
//     //       <img className="w-[456px] h-[502.11px] left-[1117px] top-[382.50px] absolute" src="https://via.placeholder.com/456x502" />
//     //     </div>
//     //     <div className="w-[1320px] h-[583px] left-[300px] top-[1330px] absolute">
//     //       <div className="h-6 px-[583.34px] left-[12px] top-0 absolute flex-col justify-start items-center inline-flex overflow-hidden">
//     //         <div className="text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY SERIVCE</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] pl-[343.38px] pr-[343.37px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Crafting stories through</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] px-[362.17px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">design and innovation</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[12px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[173.61px] h-6 left-[121.36px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Website Design</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[452px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[144.12px] h-6 left-[136.09px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Logo Design</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //       <div className="w-[416px] h-[302px] left-[892px] top-[281px] absolute border-2 border-[#191919]">
//     //         <div className="w-[210.69px] h-6 left-[102.83px] top-[93px] absolute text-center text-white text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wide">Apps Development</div>
//     //         <div className="w-[324.36px] h-28 left-[45.92px] top-[136.50px] absolute text-center text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem<br/>quim voluptas sit aspernaturaut odit<br/>auting fugit sed thisnquia consequuntur<br/>magni doloreseos designer heresm qui</div>
//     //         <div className="w-[90px] h-[90px] left-[163px] top-[-43px] absolute" />
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[555px] left-[300px] top-[2043px] absolute">
//     //       <div className="w-[770px] h-[545px] left-0 top-0 absolute">
//     //         <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //           <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">ABOUT ME</div>
//     //         </div>
//     //         <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //             <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Transforming visions into</div>
//     //           </div>
//     //           <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //             <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">exceptional portfolios</div>
//     //           </div>
//     //         </div>
//     //         <div className="w-[444.92px] h-[108.80px] left-[142px] top-[258.88px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Nemo design enim ipsam voluptatem quim voluptas sit<br/>aspernatur aut odit auting fugit sed thisnquia<br/>consequuntur magni dolores eos designer heresm qui<br/>ratione</div>
//     //         <div className="px-10 py-5 left-[142px] top-[462.75px] absolute bg-[#55e6a5] justify-center items-center gap-2.5 inline-flex">
//     //           <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Download Cv</div>
//     //           <div className="w-3 h-4 relative" />
//     //         </div>
//     //         <div className="w-[100px] h-0.5 left-[12px] top-[269px] absolute bg-[#a2a2a2]" />
//     //       </div>
//     //       <div className="w-[375.25px] h-[380px] left-[931.75px] top-0 absolute bg-[#55e6a5]" />
//     //       <img className="w-[395px] h-[480px] left-[892px] top-[20px] absolute" src="https://via.placeholder.com/395x480" />
//     //       <div className="w-[266.58px] h-[96.38px] left-[956.21px] top-[455px] absolute bg-[#232323]">
//     //         <div className="w-[65px] h-[65px] px-[11.25px] left-[30px] top-[15.69px] absolute bg-white/5 rounded-[32.50px] flex-col justify-start items-center inline-flex">
//     //           <div className="text-center text-[#a2a2a2] text-[40px] font-black font-['Font Awesome 5 Free'] leading-[65px]"></div>
//     //         </div>
//     //         <div className="w-[106.74px] h-[19.20px] left-[105px] top-[14.90px] absolute text-white text-base font-semibold font-['Poppins'] leading-tight">Daily Activity</div>
//     //         <div className="w-[131.88px] h-[27.20px] left-[105px] top-[44.09px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Loream is ispam</div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] pt-[5px] left-[300px] top-[2728px] absolute justify-start items-start gap-3 inline-flex">
//     //       <div className="w-[660px] h-[894.68px] relative">
//     //         <div className="w-[636px] h-[166px] left-[12px] top-[85px] absolute">
//     //           <div className="w-[478.34px] h-[60px] left-0 top-[-0.50px] absolute text-white text-9xl font-semibold font-['Poppins'] leading-[60px]">Design </div>
//     //           <div className="w-[121.42px] h-[60px] left-[477.95px] top-[23px] absolute text-white text-6xl font-semibold font-['Poppins'] leading-[60px]">and</div>
//     //           <div className="w-[329.14px] h-[60px] left-0 top-[106px] absolute text-white text-6xl font-semibold font-['Poppins'] leading-[60px]">Innovation</div>
//     //         </div>
//     //         <div className="w-[613.31px] h-[108.80px] left-[12px] top-[290.88px] absolute text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting<br/>fugit sed thisnquia consequuntur magni dolores eos designer heresm qui<br/>ratione voluptatem sequi nesciuNeque porro quisquam est, oursqui dolorem<br/>ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</div>
//     //         <div className="h-[279.79px] px-10 pt-10 pb-[50.79px] left-[12px] top-[444.75px] absolute bg-[#09101a] flex-col justify-start items-center gap-[15px] inline-flex">
//     //           <div className="w-[75px] h-[60px] relative">
//     //             <div className="w-[75px] h-[60px] left-0 top-0 absolute">
//     //               <div className="w-[75px] h-[60.03px] left-[-0.03px] top-[-0.03px] absolute">
//     //               </div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch px-[75.03px] justify-center items-center gap-[0.01px] inline-flex">
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[68px]">0</div>
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[48px]">k+</div>
//     //           </div>
//     //           <div className="text-center text-white text-lg font-normal font-['Poppins'] leading-[30.60px]">Complete project</div>
//     //         </div>
//     //         <div className="h-[279.79px] px-10 pt-10 pb-[50.79px] left-[342px] top-[444.75px] absolute bg-[#09101a] flex-col justify-start items-center gap-[15px] inline-flex">
//     //           <div className="w-[75px] h-[60px] relative">
//     //             <div className="w-[75px] h-[60px] left-0 top-0 absolute">
//     //               <div className="w-[75px] h-[60.06px] left-0 top-[-0.05px] absolute">
//     //               </div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch px-[87.39px] justify-center items-center gap-[0px] inline-flex">
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[68px]">0</div>
//     //             <div className="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[48px]">+</div>
//     //           </div>
//     //           <div className="text-center text-white text-lg font-normal font-['Poppins'] leading-[30.60px]">Client review</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[636px] p-[60px] bg-[#09101a] flex-col justify-start items-start gap-[24.90px] inline-flex">
//     //         <div className="self-stretch h-12 flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[40px] font-medium font-['Poppins'] leading-[48px]">GET TOUCH ME?</div>
//     //         </div>
//     //         <div className="text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">For your car we will do everything advice design in us repairs<br/>and maintenance We are the some preferred.</div>
//     //         <div className="h-[621.88px] relative">
//     //           <div className="px-10 py-5 left-0 top-[554.68px] absolute bg-[#55e6a5] justify-center items-center inline-flex overflow-hidden">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">submit now</div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-6 pb-[24.19px] left-0 top-[30px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Your Name</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-6 pb-[24.19px] left-0 top-[133.18px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Your Email</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] pl-[21px] pr-9 pt-6 pb-[24.19px] left-0 top-[236.37px] absolute border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Phone Number</div>
//     //             </div>
//     //           </div>
//     //           <div className="w-[516px] px-[21px] pt-[22.90px] pb-[131.84px] left-0 top-[339.56px] absolute border border-[#55e6a5] justify-start items-start inline-flex overflow-hidden">
//     //             <div className="text-[#a6a6ac] text-base font-medium font-['Poppins'] leading-7">Message</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="h-[1313.50px] px-[300px] pt-[105px] pb-[60px] left-0 top-[3742.25px] absolute bg-[#09101a] flex-col justify-start items-center inline-flex">
//     //       <div className="w-[1320px] h-[1148.50px] relative">
//     //         <div className="h-6 px-[432.08px] left-[122px] top-0 absolute flex-col justify-start items-center inline-flex overflow-hidden">
//     //           <div className="text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">EDUCATION & SKILL</div>
//     //         </div>
//     //         <div className="h-[130px] left-[122px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[65px] pl-[238.22px] pr-[238.23px] flex-col justify-start items-center flex overflow-hidden">
//     //             <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Showcasing your talent</div>
//     //           </div>
//     //           <div className="self-stretch h-[65px] px-[238.36px] flex-col justify-start items-center flex overflow-hidden">
//     //             <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">amplifying your impact</div>
//     //           </div>
//     //         </div>
//     //         <div className="px-[25px] py-3 left-[12px] top-[269px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2014 - 2018</div>
//     //         </div>
//     //         <div className="w-[457.29px] h-9 left-[12px] top-[343.59px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">WordPress and End Developer</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[12px] top-[389.48px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[672px] top-[269px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2012 - 2014</div>
//     //         </div>
//     //         <div className="w-[269.22px] h-9 left-[672px] top-[343.59px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">Python Developer</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[672px] top-[389.48px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[12px] top-[523.97px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2005 - 2009</div>
//     //         </div>
//     //         <div className="w-[317.04px] h-9 left-[12px] top-[598.56px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">Kent State University</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[12px] top-[644.46px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="px-[25px] py-3 left-[672px] top-[523.97px] absolute border border-[#55e6a5] justify-start items-start inline-flex">
//     //           <div className="text-[#55e6a5] text-lg font-normal font-['Poppins'] leading-[30.60px]">2009 - 2012</div>
//     //         </div>
//     //         <div className="w-[353.78px] h-9 left-[672px] top-[598.56px] absolute text-white text-3xl font-semibold font-['Poppins'] leading-9">User Experience Design</div>
//     //         <div className="w-[618.06px] h-[54.40px] left-[672px] top-[644.46px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<br/>sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</div>
//     //         <div className="h-[73.99px] pl-10 pr-[555.58px] pt-[14.90px] pb-[31.09px] left-[12px] top-[778.94px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">HTML</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[541.17px] pt-[14.90px] pb-[31.09px] left-[672px] top-[778.94px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Python</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[564.86px] pt-[14.90px] pb-[31.09px] left-[12px] top-[902.13px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">CSS</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[510.53px] pt-[14.90px] pb-[31.09px] left-[672px] top-[902.13px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Photoshop</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[506.98px] pt-[14.90px] pb-[31.09px] left-[12px] top-[1025.31px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Java Script</div>
//     //         </div>
//     //         <div className="h-[73.99px] pl-10 pr-[545.87px] pt-[14.90px] pb-[31.09px] left-[672px] top-[1025.31px] absolute bg-[#151c25] flex-col justify-start items-start inline-flex">
//     //           <div className="text-white text-base font-normal font-['Poppins'] leading-7">Figma</div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[1359px] left-[300px] top-[5185.75px] absolute">
//     //       <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //         <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY RECENT PORTFOLIO</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Elevate your brand to new</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">heights with our portfolio expertise</div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[856px] h-[550px] left-[12px] top-[234px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/856x550" />
//     //       </div>
//     //       <div className="w-[416px] h-[550px] left-[892px] top-[234px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/416x550" />
//     //       </div>
//     //       <div className="w-[636px] h-[550px] left-[12px] top-[809px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/636x550" />
//     //       </div>
//     //       <div className="w-[636px] h-[550px] left-[672px] top-[809px] absolute flex-col justify-center items-start inline-flex overflow-hidden">
//     //         <img className="h-[550px] relative" src="https://via.placeholder.com/636x550" />
//     //       </div>
//     //     </div>
//     //     <div className="h-[454.75px] left-[300px] top-[6659.75px] absolute flex-col justify-start items-center gap-[15px] inline-flex">
//     //       <div className="self-stretch h-6 px-[340.23px] flex-col justify-start items-center flex overflow-hidden">
//     //         <div className="self-stretch text-center text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">CLIENTS REVIEW</div>
//     //       </div>
//     //       <div className="self-stretch h-[65px] px-[230.48px] flex-col justify-start items-center flex overflow-hidden">
//     //         <div className="self-stretch text-center text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">My testomonial</div>
//     //       </div>
//     //       <div className="self-stretch px-3 pt-[90px] justify-center items-start gap-6 inline-flex overflow-hidden">
//     //         <div className="w-[636px] h-[245.75px] relative border-2 border-[#333f4d]">
//     //           <div className="w-[18px] h-4 left-[32px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[59.28px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[86.56px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[113.84px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[141.13px] top-[53px] absolute" />
//     //           <div className="w-[194.82px] h-[26.40px] left-[32px] top-[75.49px] absolute text-white text-[22px] font-medium font-['Poppins'] leading-relaxed">Alexander Walker</div>
//     //           <div className="w-[146.13px] h-[16.80px] left-[32px] top-[113.18px] absolute text-[#a2a2a2] text-sm font-normal font-['Poppins'] uppercase leading-none tracking-wide">Graphic Designer</div>
//     //           <img className="w-[100px] h-[100px] left-[484px] top-[-48px] absolute rounded-[50px]" src="https://via.placeholder.com/100x100" />
//     //           <div className="w-[459.37px] h-[54.40px] left-[32px] top-[149.27px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Beautiful minimalist design and great, fast response with<br/>support. Highly recommend. Thanks Marketify!</div>
//     //           <img className="w-[50px] h-[35px] left-[559px] top-[154.38px] absolute" src="https://via.placeholder.com/50x35" />
//     //         </div>
//     //         <div className="w-[636px] h-[245.75px] relative border-2 border-[#333f4d]">
//     //           <div className="w-[18px] h-4 left-[32px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[59.28px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[86.56px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[113.84px] top-[53px] absolute" />
//     //           <div className="w-[18px] h-4 left-[141.13px] top-[53px] absolute" />
//     //           <div className="w-[201.72px] h-[26.40px] left-[32px] top-[75.49px] absolute text-white text-[22px] font-medium font-['Poppins'] leading-relaxed">Armin Van Buuren</div>
//     //           <div className="w-[150.25px] h-[16.80px] left-[32px] top-[113.18px] absolute text-[#a2a2a2] text-sm font-normal font-['Poppins'] uppercase leading-none tracking-wide">Content Manager</div>
//     //           <img className="w-[100px] h-[100px] left-[484px] top-[-48px] absolute rounded-[50px]" src="https://via.placeholder.com/100x100" />
//     //           <div className="w-[459.37px] h-[54.40px] left-[32px] top-[149.27px] absolute text-[#a2a2a2] text-base font-medium font-['Poppins'] leading-7">Beautiful minimalist design and great, fast response with<br/>support. Highly recommend. Thanks Marketify!</div>
//     //           <img className="w-[50px] h-[35px] left-[559px] top-[154.38px] absolute" src="https://via.placeholder.com/50x35" />
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1920px] h-[242px] left-0 top-[7234.50px] absolute bg-[#55e6a5]">
//     //       <div className="w-[2792.61px] pl-5 pt-[25px] pb-[30px] left-0 top-0 absolute justify-start items-start gap-5 inline-flex">
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* PHP</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Python</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* design</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* world</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Development</div>
//     //       </div>
//     //       <div className="w-[2792.61px] pl-5 pt-[25px] pb-[30px] left-[2792.61px] top-0 absolute justify-start items-start gap-5 inline-flex">
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* PHP</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Python</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* design</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* world</div>
//     //         <div className="text-[110px] font-bold font-['Poppins'] uppercase leading-[187px]">* Development</div>
//     //       </div>
//     //     </div>
//     //     <div className="w-[1320px] h-[802.38px] left-[300px] top-[7601.50px] absolute">
//     //       <div className="h-6 left-[12px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
//     //         <div className="text-[#55e6a5] text-xl font-medium font-['Poppins'] uppercase leading-normal tracking-wider">MY BLOG</div>
//     //       </div>
//     //       <div className="h-[130px] left-[12px] top-[39px] absolute flex-col justify-start items-start inline-flex">
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">Unlocking the potential of your</div>
//     //         </div>
//     //         <div className="self-stretch h-[65px] flex-col justify-start items-start flex overflow-hidden">
//     //           <div className="self-stretch text-white text-[50px] font-semibold font-['Poppins'] leading-[65px]">personal brand</div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[12px] top-[234px] absolute flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch px-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] px-[24.38px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">The standard personal My<br/>portfolio</div>
//     //           </div>
//     //           <div className="h-[54px] px-[34.44px] py-[13px] left-[87.19px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[451.95px] top-[234px] absolute opacity-95 flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch px-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] pl-[24.37px] pr-[24.38px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">The standard personal My<br/>portfolio</div>
//     //           </div>
//     //           <div className="h-[54px] pl-[34.43px] pr-[34.44px] py-[13px] left-[87.19px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="h-[637.97px] pb-[76px] left-[891.04px] top-[234px] absolute opacity-95 flex-col justify-start items-center inline-flex">
//     //         <div className="self-stretch justify-start items-center inline-flex overflow-hidden">
//     //           <img className="w-[416px] h-[380px] relative" src="https://via.placeholder.com/416x380" />
//     //         </div>
//     //         <div className="h-[249.78px] px-[30px] pt-[45px] pb-[30px] bg-[#09101a] flex-col justify-start items-start gap-2.5 flex">
//     //           <div className="self-stretch pl-[30.32px] pr-[30.33px] justify-center items-start gap-5 inline-flex">
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-4 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> By zyan</div>
//     //             </div>
//     //             <div className="self-stretch pt-0.5 pb-[2.19px] justify-start items-center gap-[5px] flex">
//     //               <div className="w-5 h-4 relative" />
//     //               <div className="text-center text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7"> Comments (0)</div>
//     //             </div>
//     //           </div>
//     //           <div className="self-stretch h-[102px] pl-[20.26px] pr-[20.28px] flex-col justify-start items-center flex">
//     //             <div className="self-stretch text-center text-white text-xl font-semibold font-['Poppins'] leading-[34px]">Empowering your business<br/>with innovative solutions</div>
//     //           </div>
//     //           <div className="h-[54px] pl-[34.44px] pr-[34.43px] py-[13px] left-[87.18px] top-[-25px] absolute bg-[#55e6a5] flex-col justify-start items-center flex">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">October 18, 2023</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="w-[183.86px] px-10 py-5 left-[1124.14px] top-[109px] absolute bg-[#55e6a5] justify-center items-center gap-2.5 inline-flex">
//     //         <div className="text-[#02050a] text-base font-medium font-['Poppins'] leading-7">More Blog</div>
//     //         <div className="w-3.5 h-4 relative" />
//     //       </div>
//     //     </div>
//     //     <div className="h-[422.38px] left-0 top-[8443.88px] absolute flex-col justify-start items-start inline-flex">
//     //       <div className="self-stretch h-[422.38px] px-[642px] pt-[115px] pb-[120px] bg-black/90 flex-col justify-start items-start gap-[35px] flex">
//     //         <div className="self-stretch h-9 px-[101.67px] flex-col justify-start items-center flex overflow-hidden">
//     //           <div className="self-stretch text-center text-white text-3xl font-semibold font-['Poppins'] uppercase leading-9 tracking-wide">SUBSCRIBE MY NEWSLETTER</div>
//     //         </div>
//     //         <div className="self-stretch h-[116.38px] pb-[32.19px] flex-col justify-start items-start flex">
//     //           <div className="self-stretch px-[26px] pt-[29px] pb-[29.19px] bg-[#131313] border border-[#55e6a5] justify-center items-start inline-flex overflow-hidden">
//     //             <div className="grow shrink basis-0 py-px flex-col justify-start items-start inline-flex overflow-hidden">
//     //               <div className="self-stretch text-[#a6a6ac] text-base font-medium font-['Poppins']">Enter Your Email</div>
//     //             </div>
//     //           </div>
//     //           <div className="px-10 py-5 left-[462px] top-[8px] absolute bg-[#55e6a5] justify-center items-center inline-flex overflow-hidden">
//     //             <div className="text-center text-[#02050a] text-base font-medium font-['Poppins'] leading-7">Notify Now</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="self-stretch h-[407.19px] px-[312px] pt-[299px] bg-[#02050a] flex-col justify-start items-start flex">
//     //     <div className="h-[108.19px] relative border-t border-white/5">
//     //       <div className="w-[297.21px] h-[27.20px] left-0 top-[35.90px] absolute opacity-50 text-[#a2a2a2] text-base font-normal font-['Poppins'] leading-7">© CodeeFly 2024 | All Rights Reserved</div>
//     //       <div className="pt-1 pb-[6.19px] left-[852.06px] top-[41px] absolute justify-start items-start gap-[60px] inline-flex">
//     //         <div className="pb-0.5 opacity-50 justify-start items-start gap-[4.30px] flex">
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">Trams</div>
//     //           </div>
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">&</div>
//     //           </div>
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">Condition</div>
//     //           </div>
//     //         </div>
//     //         <div className="pb-0.5 opacity-50 justify-start items-start gap-[4.28px] flex">
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">Privacy</div>
//     //           </div>
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">Policy</div>
//     //           </div>
//     //         </div>
//     //         <div className="pb-0.5 opacity-50 justify-start items-start flex">
//     //           <div className="justify-start items-start flex overflow-hidden">
//     //             <div className="text-white text-base font-normal font-['Poppins'] leading-[15px]">Sitemap</div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="w-[1920px] h-20 px-[300px] left-0 top-0 absolute justify-start items-center inline-flex">
//     //     <div className="grow shrink basis-0 h-20 px-3 justify-between items-center flex">
//     //       <div className="w-[1280.39px] h-20 left-[20px] top-0 absolute bg-[#141c27]" />
//     //       <div className="w-[180px] h-20 flex-col justify-center items-start inline-flex">
//     //         <img className="h-20 relative" src="https://via.placeholder.com/180x80" />
//     //       </div>
//     //       <div className="justify-start items-start flex">
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch px-5 pt-8 pb-[31px] justify-start items-start gap-2.5 inline-flex">
//     //             <div className="justify-start items-start flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Home</div>
//     //             </div>
//     //             <div className="w-[11.50px] h-3.5 relative" />
//     //           </div>
//     //         </div>
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
//     //             <div className="justify-start items-start inline-flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">about</div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
//     //             <div className="justify-start items-start inline-flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">services</div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
//     //             <div className="justify-start items-start inline-flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">projects</div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch px-5 pt-8 pb-[31px] justify-start items-start gap-2.5 inline-flex">
//     //             <div className="justify-start items-start flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Blog</div>
//     //             </div>
//     //             <div className="w-[11.50px] h-3.5 relative" />
//     //           </div>
//     //         </div>
//     //         <div className="self-stretch flex-col justify-start items-start inline-flex">
//     //           <div className="self-stretch h-[77px] px-5 pt-8 pb-[33px] flex-col justify-start items-start flex">
//     //             <div className="justify-start items-start inline-flex overflow-hidden">
//     //               <div className="text-white text-sm font-medium font-['Poppins'] uppercase leading-3 tracking-wide">Contact</div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="w-20 h-20 pl-[26.88px] pr-[26.87px] pt-6 pb-[26px] bg-[#55e6a5] flex-col justify-start items-start inline-flex">
//     //         <div className="w-[26.25px] h-[30px] relative origin-top-left rotate-180" />
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="w-[30px] h-[30px] left-[-15px] top-0 absolute opacity-50 rounded-[15px] border-2 border-white" />
//     //   <div className="w-[46px] h-[46px] left-[1824px] top-[9176.44px] absolute opacity-95 bg-white/0 rounded-[50px] shadow-[inset_0px_0px_0px_2px_rgba(0,0,0,0.20)] flex-col justify-center items-start flex overflow-hidden">
//     //     <div className="h-[46px] relative" />
//     //     <div className="w-[46px] h-[46px] left-0 top-[46px] absolute" />
//     //   </div>
//     // </div>
  );
}

export default Hero;
