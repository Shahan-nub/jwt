"use client";

import Image from "next/image";

export default function Card({ img }) {
  return (
    <div className="rounded-2xl relative group overflow-hidden hover:shadow-lg hover:shadow-blue-900 transition-all duration-300">
      <Image
        className="rounded-2xl scale-110 outline-none"
        src={img.location}
        alt={img.id}
        height={400}
        width={400}
      />
      <p className="md:hidden my-4 text-slate-200 text-xs">
        {img.details.description}
      </p>
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-full text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center px-2 group-hover:backdrop-blur">
        <p> {img.details.description}</p>
      </div>
    </div>
  );
}
