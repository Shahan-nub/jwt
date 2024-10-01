"use client"
import { IoHome } from "react-icons/io5";
import { PiAtomDuotone } from "react-icons/pi";
import { FaImages } from "react-icons/fa";
import { SiNasa } from "react-icons/si";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="md:min-w-[5%] md:w-[5%] md:h-screen relative  flex items-center justify-center text-slate-400 rounded-xl max-h-max md:pl-4 py-6 max-sm:py-2">
            <div className="bg-black my-auto md:fixed top-1/2 md:-translate-y-1/2 flex md:flex-col gap-4 rounded-xl px-3 py-4 max-md:py-2 text-2xl text-center">
                <Link href="/" className={`cursor-pointer 
                    ${usePathname() == '/' && "text-yellow-500 scale-105 transition-all duration-300"}
                    `}>
                    <IoHome></IoHome>
                </Link>
                <Link href="/" className="cursor-pointer">
                    <PiAtomDuotone></PiAtomDuotone>
                </Link>
                <Link href="/images" className={`cursor-pointer 
                    ${usePathname() == '/images' && "text-yellow-500 scale-105 transition-all duration-300"}
                    `}>
                    <FaImages></FaImages>
                </Link>
                <Link href="/" className="cursor-pointer">
                    <SiNasa></SiNasa>
                </Link>   
                    
            </div>
    </div>
  )
}
