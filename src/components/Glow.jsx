export default function Glow({pos}) {
    return (
      <div className={`GLOW hieden md:block z-10 absolute ${pos}`}>
          <div className=" text-[#1c2640] rotate-90 md:bg-[#1c2640] text-opacity-0 bg-opacity-0 shadow-[0_0_600px_45px_#6583bc] rounded-full text-[.3px]">.</div>
        </div>
    )
  }