"use client";

import TitleInfoPair from "@/components/TitleInfoPair";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [showOverview, setShowOverview] = useState(true);
  const [showFacts,setShowFacts] = useState(false);
  const [showData,setShowData] = useState(false);

  const handleOverview = () =>{
    setShowOverview(true);
    setShowFacts(false);
    setShowData(false);
  }

  const handleFacts = () =>{
    setShowFacts(true);
    setShowOverview(false);
    setShowData(false);
  }

  const handleData = () =>{
    setShowData(true);
    setShowOverview(false);
    setShowFacts(false);
  }
  return (
    <div className="w-full h-screen">
      <div className="flex gap-4 w-full h-full p-4 max-md:p-1 max-sm:px-4">
        <div className="flex-1 flex max-md:flex-col gap-6">
          <Link
            href="https://stsci-opo.org/STScI-01J80MW64ABY9QBQJPVGVQXQ9W.png"
            target="_blank"
            className="rounded-xl bg-transparent w-3/4 max-md:w-full max-md:h-max h-full overflow-hidden relative "
          >
            <div className="bg-[#171717] md:absolute max-md:rounded-2xl rounded-tl-xl rounded-br-2xl top-0 left-0 lg:w-max z-10 p-2">
                <div className="bg-black rounded-2xl text-slate-400 font-bold text-sm xl:text-base p-4">
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8b500] to-[#fceabb] text-nowrap text-center">
                        Galaxy GS-NDG-9422 (NIRCam Image)
                    </div>
                </div>
            </div>
            <Image
              src="/images/pic1.png"
              height={2000}
              width={2000}
              alt="pic1"
              className="overflow-hidden rounded-xl"
            ></Image>

          </Link>

          {/* right     */}

          <div
            className={`rounded-xl w-1/4 max-md:w-full flex flex-col gap-4 p-4 bg-black md:hover:w-[40%] transition-all duration-500 text-slate-500 overflow-scroll no-scrollbar`}
          >
            <div className="flex self-center gap-4 xl:gap-6 flex-wrap text-sm lg;text-base font-sans">

              <div 
              onClick={handleOverview}
              className={`cursor-pointer ${showOverview && " bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-600 to-yellow-200 text-transparent " }`}>
                Overview
              </div>
              <div onClick={handleFacts}
              className={`cursor-pointer ${showFacts && " bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-600 to-yellow-200 text-transparent " }`}>Fast facts</div>
              <div onClick={handleData}
              className={`cursor-pointer ${showData && " bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-600 to-yellow-200 text-transparent " }`}>Data</div>
            </div>
            <hr className="h-px" />

            {/* OVERVIEW  */}
            <div className={`${showOverview ? 'flex gap-4 flex-col' : 'hidden'} `}>
              <TitleInfoPair
                title="Caption"
                text1={`The galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCam (Near-Infrared Camera) image may actually be a groundbreaking discovery that points astronomers on a new path of understanding galaxy evolution in the early universe. `}

                text2 ={` Detailed information on the galaxy’s chemical makeup, captured by Webb’s NIRSpec (Near-Infrared Spectrograph) instrument, indicates that the light we see in this image is coming from the galaxy’s hot gas, rather than its stars. That is the best explanation astronomers have discovered so far to explain the unexpected features in the light spectrum. They think that the galaxy’s stars are so extremely hot (more than 140,000 degrees Fahrenheit, or 80,000 degrees Celsius) that they are heating up the nebular gas, allowing it to shine even brighter than the stars themselves. `}

                text3={`The authors of a new study on Webb’s observations of the galaxy think GS-NDG-9422 may represent a never-before-seen phase of galaxy evolution in the early universe, within the first billion years after the big bang. Their task now is to see if they can find more galaxies displaying the same features.`}
              ></TitleInfoPair>

              {/* RELEASE DATE  */}
              <TitleInfoPair
                title="Release Date"
                text1="September 25, 2024 10:00AM (EDT)"
              ></TitleInfoPair>
            </div>

            {/* FACTS  */}
            <div className={`${showFacts ? 'flex gap-4 flex-col' : 'hidden'} `}>
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
            </div>

            {/* DATA  */}

          </div>
        </div>
      </div>
    </div>
  );
}
