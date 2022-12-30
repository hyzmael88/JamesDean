import React from "react";
import Reserva from "../assets/reserva1.png";
import Disfruta from "../assets/disfruta1.png";
import Festeja from "../assets/festeja1.png";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";

function Pasos() {
  return (
    <div className="w-full h-full lg:h-screen">
      <div className="flex flex-col justify-center items-center text-white">
        <h3 className="uppercase font-greathy text-6xl mt-8 text-red-500 text-center items-center justify-center w-[360px] lg:w-[720px]">
          Pasos para ser un{" "}
          <span className="underline underline-offset-4">rebelde:</span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center  items-center">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6 border-4 border-red-500 rounded-full mt-8">
              1
            </h3>
            <img
              src={Reserva}
              alt="reserva"
              className="w-52 lg:w-80 mt-4   rounded-full object-cover"
            />

            <h3 className="font-greathy uppercase text-6xl my-8">Reserva</h3>
            <button className="px-10 py-4 bg-green-400 rounded-xl text-xl ">
              <span className="flex flex-row uppercase">
                Reserva por <BsWhatsapp className="mt-1.5 ml-2" />
              </span>{" "}
            </button>
            <button className="px-12 py-4 bg-blue-600 rounded-xl text-xl mt-4 ">
              <span className="flex flex-row uppercase">Reserva Aqui </span>{" "}
            </button>
          </div>
          <div className="w-full h-screen lg:h-full flex flex-col justify-center items-center">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6  border-4 border-red-500  rounded-full mt-8">
              2
            </h3>

            <img
              src={Disfruta}
              alt=""
              className="w-52 lg:w-80 mt-4   rounded-full object-cover "
            />
            <h3 className="font-greathy uppercase text-6xl my-8">Disfruta</h3>
            <p className="text-3xl justify-center text-center font-aftika">
              Los mejores platillos preparados especialmente para conocedores.
            </p>
          </div>
          <div className="w-full h-screen lg:h-full flex flex-col justify-center items-center">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6  border-4 border-red-500  rounded-full mt-8">
              3
            </h3>

            <img
              src={Festeja}
              alt=""
              className="w-52 lg:w-80 mt-4   rounded-full object-cover "
            />
            <h3 className="font-greathy uppercase text-6xl my-8">Festeja</h3>
            <p className="text-3xl justify-center text-center font-aftika">
              Ven y festeja tu cumpleanos o cualquier pretexto es bueno para
              festejar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasos;
