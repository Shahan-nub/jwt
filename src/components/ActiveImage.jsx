"use client"
import TitleInfoPair from "@/components/TitleInfoPair";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import Instruments from "./Instruments";
import { GrFormNext, GrNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";


export default function ActiveImage() {
    const [showOverview, setShowOverview] = useState(true);
  const [showFacts, setShowFacts] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleOverview = () => {
    setShowOverview(true);
    setShowFacts(false);
    setShowData(false);
  };

  const handleFacts = () => {
    setShowFacts(true);
    setShowOverview(false);
    setShowData(false);
  };

  const handleData = () => {
    setShowData(true);
    setShowOverview(false);
    setShowFacts(false);
  };

  const activeImage = useSelector((store) => store.activeImage);
  const img = activeImage[0];
  console.log(img);

  return (
    <div className="flex gap-4 w-full h-full p-4 max-md:p-1 max-sm:px-4">
      <div className="flex-1 flex max-md:flex-col gap-6">
        <Link
          href={img.location}
          target="_blank"
          className="rounded-xl bg-transparent w-[70%] max-md:w-full max-md:h-max h-full overflow-hidden relative hover:shadow-lg hover:shadow-blue-900 transition-all duration-500"
        >
          <div className="bg-gradient-to-r from-[#001c3d] to-[#071525] md:absolute max-md:rounded-2xl rounded-tl-xl rounded-br-2xl top-0 left-0 lg:w-max z-10 p-2">
            <div className="bg-black md:rounded-tl-2xl md:rounded-br-2xl max-md:rounded-2xl text-slate font-bold text-sm xl:text-base p-4">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0077f8] to-[#67adf1] text-center">
                {img.details.description}
              </div>
            </div>
          </div>
          <img
            src={img.location}
            height={1500}
            width={1500}
            alt="pic1"
            className="overflow-hidden scale-105 bg-transparent rounded-xl"
          ></img>
        </Link>

          {/* right     */}

        <div
          className={`rounded-xl w-[30%] max-md:w-full flex flex-col gap-4 p-4 bg-black md:hover:w-[40%] transition-all duration-500 text-slate-500 overflow-scroll no-scrollbar hover:shadow-lg hover:shadow-blue-900 font-mono`}
        >
          <div className="flex self-center gap-4 xl:gap-6 flex-wrap text-sm lg;text-base font-sans">
            <div
              onClick={handleOverview}
              className={`cursor-pointer text-2xl max-md:text-lg  font-bold ${
                showOverview &&
                " bg-gradient-to-r bg-clip-text from-[#0077f8] to-[#67adf1] text-transparent flex gap-2"
              }`}
            >
              <p className="font-normal">O</p>
              V
              <p className="font-normal">E</p>
              R 
              <p className="font-normal">V</p>
              I
              <p className="font-normal">E</p>
              W
            </div>
            {/* <div onClick={handleFacts}
              className={`cursor-pointer ${showFacts && " bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-600 to-yellow-200 text-transparent " }`}>Fast facts</div>
              <div onClick={handleData}
              className={`cursor-pointer ${showData && " bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-600 to-yellow-200 text-transparent " }`}>Data</div> */}
            </div>
            <hr className="h-px" />

          {/* OVERVIEW  */}
          <div
            className={`${
              showOverview ? "flex gap-4 flex-col " : "hidden"
            } `}
          >

                {/* Instruments  */}
                <Instruments Instruments={img.details.instruments}></Instruments>


              {/* Observation ID  */}
              <TitleInfoPair
                title="Observation Id"
                text1={img.observation_id}
                ></TitleInfoPair>

                {/* Program  */}
                <TitleInfoPair 
                title="Program"
                text1={img.program}
                ></TitleInfoPair>

                {/* MIssion  */}
                <TitleInfoPair 
                title="Mission"
                text1={img.details.mission}
                ></TitleInfoPair>

                {/* PREV-NEXT */}
                {/* <div className="flex gap-2 cursor-pointer items-center justify-center p-3 text-color1 text-xl md:text-4xl animate-pulse ">
                    <Link onClick={handlePrev} href="/images">
                        <GrFormPrevious></GrFormPrevious>
                    </Link>
                    
                    <GrFormNext></GrFormNext>
                </div> */}

            </div>



          {/* FACTS  */}
          {/* <div className={`${showFacts ? 'flex gap-4 flex-col' : 'hidden'} `}>
              <TitleInfoPair 
              title={`Object Name`}
              text1={`bonk nigga`}

              
              
              
              ></TitleInfoPair>

              <TitleInfoPair
              title={`Object Description`}
              text1={`bonk nigga`}
              >
              </TitleInfoPair>

              <TitleInfoPair
                title={`Object date`}
                text1={`bonk nigga`}
            ></TitleInfoPair>
            </div> */}

            {/* DATA  */}

          </div>
        </div>
      </div>
  )
}
