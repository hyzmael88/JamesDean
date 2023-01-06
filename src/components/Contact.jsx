import React, { useState } from "react";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillTelephoneFill,
  BsPinMapFill,
  BsEnvelope,
  BsTelephone,
  BsClock,
} from "react-icons/bs";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center border-2 border-green-500 lg:py-[200px]">
      <div className="w-full h-8 py-12 mt-4 flex flex-row text-3xl font-lemon text-white uppercase items-center justify-center">
        <h3>Cóntactanos</h3>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full lg:justify-center items-center lg:px-[120px]">
        <div className="flex flex-col w-full h-full justify-center items-center ">
          <form action="" className="w-full ">
            <label
              htmlFor="name"
              className="uppercase text-xl text-white font-lemon ml-4 "
            >
              NAME
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="..."
              className="ml-4 w-11/12 h-[40px] mb-8 mt-2 bg-transparent border-2 border-red-500
               font-lemon text-sm text-white px-4 focus:border-white focus:outline-none 
               placeholder:text-white/60
               "
            />
            <br />
            <label
              htmlFor="name"
              className="uppercase text-xl text-white font-lemon ml-4 "
            >
              Phone Number
            </label>
            <br />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="..."
              className="ml-4 w-11/12 h-[40px] mb-8 mt-2 bg-transparent border-2 border-red-500
              font-lemon text-sm text-white px-4 focus:border-white focus:outline-none 
              placeholder:text-white/60
              "
            />
            <br />
            <label
              htmlFor="name"
              className="uppercase text-xl text-white font-lemon ml-4 "
            >
              Message
            </label>
            <br />
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="..."
              className="ml-4 w-11/12 h-[80px] mt-2 bg-transparent border-2 border-red-500
               font-lemon text-sm text-white px-4 py-2 focus:border-white focus:outline-none
               placeholder:text-white/60
               "
            />
            <br />

            <div className="w-full flex flex-row justify-center items-center">
              <button
                className="transition delay-150 duration-300 ease-in-out text-white
               px-8 py-4 border-2 border-white uppercase font-lemon mt-12
               hover:text-red-500 hover:border-red-500 hover:scale-125
              "
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full h-full justify-center ml-4 mr-">
          <div className="w-full h-full flex flex-row justify-between  text-right mb-8">
            <span className="flex flex-row justify-around">
              <BsPinMapFill size={40} className="text-red-500 mr-4" />
              <p className="text-white font-lemon mt-2 ml-2 mr-8">Location:</p>
            </span>
            <p className="text-white font-lemon mt-2">
              Insurgentes Sur 1821, Col. Guadalupe Inn, Álvaro Obregón 01030
              Ciudad de México, México
            </p>
          </div>
          <div className="w-full flex flex-row justify-between  text-right mb-8">
            <span className="flex flex-row justify-around">
              <BsTelephone size={40} className="text-red-500 mr-4" />
              <p className="text-white font-lemon mt-2 ml-2 mr-8">Phone:</p>
            </span>
            <p className="text-white font-lemon mt-2">55 1312 6175</p>
          </div>
          <div className="w-full flex flex-row justify-between  text-right mb-8">
            <span className="flex flex-row justify-around">
              <BsEnvelope size={40} className="text-red-500 mr-4" />
              <p className="text-white font-lemon mt-2 ml-2 mr-8">Mail:</p>
            </span>
            <p className="text-white font-lemon mt-2 ">
              
            </p>
          </div>
          <div className="w-full flex flex-row justify-between  text-right mb-8">
            <span className="flex flex-row justify-around">
              <BsClock size={40} className="text-red-500 mr-4" />
              <p className="text-white font-lemon mt-2 ml-2 mr-8">schedule:</p>
            </span>
            <div className="w-full flex flex-row justify-between text-white font-lemon mt-2 ">
              <div className="ml-4">Lun a Dom:</div>
              <div>12:00 a 02:00 hrs.</div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center items-center text-center mt-16">
            <BsFacebook
              className="text-white mr-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-red-500 hover:scale-125 "
              size={45}
            />
            <BsInstagram
              className="text-white mr-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-red-500 hover:scale-125 "
              size={45}
            />
            <BsWhatsapp
              className="text-white mr-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-red-500 hover:scale-125 "
              size={45}
            />
            <BsFillTelephoneFill
              className="text-white mr-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-red-500 hover:scale-125 "
              size={45}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
