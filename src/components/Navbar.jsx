"use client";
import { IoHome } from "react-icons/io5";
import { PiAtomDuotone } from "react-icons/pi";
import { FaImages, FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { SiNasa } from "react-icons/si";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import { GiCompactDisc } from "react-icons/gi";

export default function Navbar() {
  const [play, setPlay] = useState(false);
  const songRef = useRef(null);

  const togglePlay = () => {
    if (play) {
      songRef.current.pause();
    } else {
      songRef.current.play();
      songRef.current.volume = 0.2;
    }
    setPlay(!play);
  };

  return (
    <div
      className={`${
        usePathname() === "/"
          ? "z-50 md:w-0"
          : "md:min-w-[5%] md:h-screen md:pl-4 md:w-[5%]"
      }   relative flex items-center justify-center text-slate-400 rounded-xl max-h-max  py-6 max-sm:py-2`}
    >
      <div
        className={`bg-black my-auto md:fixed top-1/2 
        ${
          usePathname() === "/"
            ? "top-0 flex-row left-1/2 md:-translate-x-1/2 md:bg-transparent backdrop-blur-sm "
            : "md:-translate-y-1/2"
        }   
        flex md:flex-col gap-4 md:gap-6 rounded-xl px-3 py-6 max-md:py-2 max-md:mt-4 text-2xl text-center`}
      >
        <Link
          href="/"
          className={`cursor-pointer 
          ${
            usePathname() == "/" &&
            "text-color1 scale-105 transition-all duration-300"
          }`}
        >
          <IoHome></IoHome>
        </Link>
        <Link
          href="/images"
          className={`cursor-pointer 
          ${
            usePathname() == "/images" &&
            "text-color1 scale-105 transition-all duration-300"
          }`}
        >
          <FaImages></FaImages>
        </Link>
        <Link
          href="https://www.nasa.gov/"
          target="_blank"
          className="cursor-pointer"
        >
          <SiNasa></SiNasa>
        </Link>
        <div className="cursor-pointer" onClick={togglePlay}>
          {play ? <FaPause /> : <FaPlay />}
        </div>

        <div className={`${play && "animate-infinite-rotate text-yellow-300"}`}>
          <GiCompactDisc></GiCompactDisc>
        </div>
      </div>
      <audio ref={songRef} loop src="/media/track.mp3"></audio>
    </div>
  );
}
