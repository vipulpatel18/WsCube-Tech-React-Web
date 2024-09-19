import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [icon, setIcon] = useState(true);

  const changeIcon = () => {
    setIcon(!icon);
    // console.log(icon);
  };
  return (
    <div className="w-full bg-mycolor fixed z-10 top-0">
      <div className="p-3 py-[20px] lg:container max-w-[1240px] m-auto flex justify-between items-center">
        <h1 className="text-black text-[28px] font-bold">WsCube Tech</h1>
        <div>
          <div className="flex">
            {icon ? (
              <FaBars onClick={changeIcon} className="text-3xl cursor-pointer md:hidden block text-white" />
            ) : (<IoClose onClick={changeIcon} className="text-3xl cursor-pointer md:hidden block text-white"/>
            )}
          </div>
          <ul className="hidden md:flex gap-5 items-center font-medium text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contant</li>
          </ul>
        </div>
        <div onClick={changeIcon} className={`fixed bg-[rgba(0,0,0,0.5)] w-full h-screen duration-700 top-[80px] ${icon ? 'left-[-100%]' : 'left-[0]'}`}>
        <div className="w-1/2 bg-sky-800 h-screen p-10 duration-500">
          <ul className="md: font-medium text-white">
            <li className="cursor-pointer py-2 ps-5">Home</li>
            <li className="cursor-pointer py-2 ps-5">Company</li>
            <li className="cursor-pointer py-2 ps-5">Resources</li>
            <li className="cursor-pointer py-2 ps-5">About</li>
            <li className="cursor-pointer py-2 ps-5">Contant</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
