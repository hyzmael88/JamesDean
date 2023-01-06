import React from "react";
import Foto from "../assets/fondo3.png";
import Logo from "../assets/logo.png";
import About from "../assets/aboutus2.png";

function AboutUs() {
  return (
    <div className="w-full h-screen  relative">
      <img
        src={Foto}
        alt="fondo"
        className="w-full h-full hidden md:block object-container absolute"
      />
      <div className="w-full h-full flex flex-col justify-center items-center md:px-24   ">
        {/* <div className="flex flex-row justify-center items-center z-20">
          <h3 className="text-white text-2xl font-aftika uppercase  mb-16 md:mb-8 hidden md:block">NOSOTROS</h3>
        </div> */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 z-20 justify-center items-center ">
        <div className="flex flex-row justify-center items-center">
            <img src={About} alt="about" className="w-[250px] sm:w-[650px] mb-4  2xl:ml-20 "/>
          </div>
          <div className="flex flex-col justify-center items-center 2xl:mr-20 ">
            <img src={Logo} alt="logo" className="w-48 -mt-32" />
            <p className="text-white ml-4 mr-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
            <button className=" mt-10 mb-4 px-6 py-2 bg-red-500 rounded-xl font-lemon uppercase text-white">Conoce más</button>
{/*             <p className="text-white underline underline-offset-4 mt-4">Conoce más.</p>
 */}          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
