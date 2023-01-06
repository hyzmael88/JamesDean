import React, { useEffect, useState } from "react";
import Reserva from "../assets/reserva2.jpg";
import Disfruta from "../assets/disfruta1.png";
import Festeja from "../assets/festeja1.png";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";

function Pasos() {


//TODO: letra por letra de REBELDE:

   /*  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const displayLetterByLetter = (str) => {
        if (index <= str.length) {
          setText(str.substring(0, index));
          setIndex(index + 1);
        } else {
          clearInterval();
        }
      };
    
      setInterval(() => displayLetterByLetter('rebelde:'), 1000);
  }, []) */
  

 

  return (
    <div className="w-full h-full lg:h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center text-white">
        <h3 className="uppercase font-greathy text-6xl  text-red-500 text-center items-center justify-center w-[360px] lg:w-[720px]">
          Pasos para ser un{" "}
          <span className="underline underline-offset-4">rebelde:</span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-1/3 h-full flex flex-col justify-center  items-center ">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6 border-4 border-red-500 rounded-full mt-8">
              1
            </h3>
            <img
              src={Reserva}
              alt="reserva"
              className="w-52 lg:w-72 mt-4   rounded-full object-cover grayscale hover:grayscale-0"
            />

            <h3 className="font-lemon uppercase text-4xl my-8">Reserva</h3>
            <button className="px-10 py-4 bg-green-400 rounded-xl text-xl font-lemon ">
              <span className="flex flex-row uppercase">
                Reserva por <BsWhatsapp className="mt-1.5 ml-2" />
              </span>{" "}
            </button>
            <button className="px-12 py-4 bg-blue-600 rounded-xl text-xl mt-4 ">
              <span className="flex flex-row uppercase font-lemon">Reserva Aquí </span>{" "}
            </button>
          </div>
          <div className="w-1/3 h-screen lg:h-full flex flex-col justify-center items-center ">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6  border-4 border-red-500  rounded-full mt-8">
              2
            </h3>

            <img
              src={Disfruta}
              alt=""
              className="w-52 lg:w-72 mt-4   rounded-full object-cover grayscale-0 lg:grayscale hover:grayscale-0 "
            />
            <h3 className="font-lemon uppercase text-4xl my-8">Disfruta</h3>
            <p className="text-2xl w-[350px] md:w-[400px] px-10 justify-center text-center font-aftika">
              Los mejores platillos preparados especialmente para conocedores
            </p>
          </div>
          <div className="w-full lg:w-1/3 h-screen lg:h-full flex flex-col justify-center items-center ">
            <h3 className="font-varsity text-6xl px-5 lg:px-9 py-2 lg:py-6  border-4 border-red-500  rounded-full mt-8">
              3
            </h3>

            <img
              src={Festeja}
              alt=""
              className="w-52 lg:w-72 mt-4   rounded-full object-cover grayscale-0 lg:grayscale hover:grayscale-0 "
            />
            <h3 className="font-lemon uppercase text-4xl my-8">Festeja</h3>
            <p className="text-2xl w-[350px] md:w-[400px]  px-10 justify-center text-center font-aftika">
              Ven y festeja tu cumpleanos, cualquier pretexto es bueno para
              festejar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasos;
