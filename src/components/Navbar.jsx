import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { AppContext } from "../context/AppLevelContext";

function Navbar() {
  const { movil, setMenuMovil } = AppContext();
  console.log(movil);
  return (
    <div
      className={`w-full ${
        movil == true ? "h-full" : "h-24"
      }  lg:h-28 absolute z-30 bg-black/40`}
    >
      <div className="flex flex-row  justify-between items-center">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="w-32 md:w-36 ml-8 md:ml-10 cursor-pointer"
          />
        </div>
        <div>
          <div className="block lg:hidden text-white">
            <FiMenu
              onClick={() => {
                setMenuMovil();
              }}
              size={38}
              className={`mr-10 cursor-pointer  ${
                movil == true ? "hidden" : "block"
              }`}
            />

            <FiX
              size={38}
              onClick={() => {
                setMenuMovil();
              }}
              className={`mr-10 cursor-pointer  ${
                movil == true ? "block" : "hidden"
              }`}
            />
          </div>

          <div className="hidden lg:block">
            <ul className="flex flex-row items-center mr-10 font-lemon uppercase  ">
              <li className="text-white ml-4 text-xl cursor-pointer ">
                Inicio
              </li>
              <li className="text-white ml-4 text-xl cursor-pointer">Menu</li>
              <li className="text-white ml-4 text-xl cursor-pointer">Promos</li>
              <li className="text-white ml-4 text-xl cursor-pointer">
                Nosotros
              </li>
              <li className="text-white ml-4 text-xl cursor-pointer">
                Contacto
              </li>
              <li className="text-white ml-4 text-xl cursor-pointer px-6 py-4 border-2 border-black  rounded-lg font-bold bg-red-600">
                VIP
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:block hidden">
          <ul className="flex flex-row items-center mr-4">
            <BsFacebook className="text-white mr-4" size={26} />
            <BsWhatsapp className="text-white mr-4" size={26} />
            <BsInstagram className="text-white mr-4" size={26} />
          </ul>
        </div>
      </div>
      <div
        className={`w-full h-full  absolute top-25 bg-black/40 ${
          movil == true ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-full flex flex-col   items-center uppercase font-varsity ">
          <h3 className="text-white ml-4 text-4xl py-6 cursor-pointer ">
            Inicio
          </h3>
          <h3 className="text-white ml-4 text-4xl py-6 cursor-pointer">Menu</h3>
          <h3 className="text-white ml-4 text-4xl py-6 cursor-pointer">
            Promos
          </h3>
          <h3 className="text-white ml-4 text-4xl py-6 cursor-pointer">
            Nosotros
          </h3>
          <h3 className="text-white ml-4 text-4xl py-6 cursor-pointer">
            Contacto
          </h3>

          <div className="flex flex-row justify-center items-center mt-6">
            <BsFacebook className="text-white mr-8" size={45} />
            <BsWhatsapp className="text-white mr-8" size={45} />
            <BsInstagram className="text-white mr-8 " size={45} />
            <BsFillTelephoneFill className="text-white " size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
