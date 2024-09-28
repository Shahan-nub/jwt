"use client"
import { IoHome } from "react-icons/io5";
import { PiAtomDuotone } from "react-icons/pi";
import { FaImages } from "react-icons/fa";
import { SiNasa } from "react-icons/si";

export default function Navbar() {
  return (
    <div className="min-w-[5%] w-[5%] h-screen relative  flex items-center justify-center text-slate-400 rounded-xl max-h-max pl-4 py-6 max-sm:py-4">
            <div className="bg-black my-auto fixed top-1/2 -translate-y-1/2 flex flex-col gap-4 rounded-xl px-3 py-4 text-2xl text-center">
                <div className="cursor-pointer">
                    <IoHome></IoHome>
                </div>
                <div className="cursor-pointer">
                    <PiAtomDuotone></PiAtomDuotone>
                </div>
                <div className="cursor-pointer">
                    <FaImages></FaImages>
                </div>
                <div className="cursor-pointer">
                    <SiNasa></SiNasa>
                </div>   
                    
            </div>
    </div>
  )
}
