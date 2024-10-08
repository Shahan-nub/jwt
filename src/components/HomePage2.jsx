"use client";
import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { activeImageActions } from "@/store/slices/activeImageSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles.scss";
import Card from "./Card";
import Link from "next/link";
import Loader from "./Loader";
import Glow from "./Glow";
import { allImagesActions } from "@/store/slices/allImagesSlice";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaArrowDown } from "react-icons/fa";

export default function HomePage2() {
  const [data, setData] = useState([]);
  const [showAllImages, setShowAllImages] = useState(false);
  let images = [...data];
  const dispatch = useDispatch();

  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.jwstapi.com/all/type/jpg?page=1&perPage=50",
      headers: { "X-API-KEY": "e33bc7e8-2249-4e67-bea0-59e3b02373bc" },
    };

    axios(config)
      .then((response) => {
        images = response.data.body.filter((image) => {
          return !image.location.includes("_thumb");
        });
        images.forEach(
          (image) =>
            (image.observation_id = image.observation_id.replaceAll("_", "-"))
        );
        setData(images);

        dispatch(allImagesActions.addAllImages(data));

        // console.log(data); //testing
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchData();

  const dataFromStore = useSelector((store) => store.allImages);

  const handleImgClick = (id) => {
    const activeImg = data.filter((img) => img.id === id);
    console.log(id);
    // console.log(activeImg)
    dispatch(activeImageActions.addActiveImage(activeImg));
  };

  //   useEffect(() => {
  //     if (typeof window === "undefined") return;

  //     const wrapper = document.querySelector(".wrapper");
  //     const carousel = document.querySelector(".carousel");
  //     const firstCard = carousel.querySelector(".card");
  //     const arrowBtns = document.querySelectorAll(".wrapper i");

  //     const firstCardWidth = firstCard.offsetWidth;
  //     const carouselChildren = [...carousel.children];
  //     const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  //     let isDragging = false,
  //       isAutoPlay = true,
  //       startX,
  //       startScrollLeft,
  //       timeoutId;

  //     // Helper function for infinite scroll
  //     const infiniteScroll = () => {
  //       if (carousel.scrollLeft === 0) {
  //         carousel.classList.add("no-transition");
  //         carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
  //         carousel.classList.remove("no-transition");
  //       } else if (
  //         Math.ceil(carousel.scrollLeft) >=
  //         carousel.scrollWidth - carousel.offsetWidth
  //       ) {
  //         carousel.classList.add("no-transition");
  //         carousel.scrollLeft = carousel.offsetWidth;
  //         carousel.classList.remove("no-transition");
  //       }
  //     };

  //     // Insert copies of the first/last few cards for infinite scrolling
  //     carouselChildren
  //       .slice(-cardPerView)
  //       .reverse()
  //       .forEach((card) => {
  //         carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  //       });
  //     carouselChildren.slice(0, cardPerView).forEach((card) => {
  //       carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  //     });

  //     // Scroll to the correct position to hide the duplicate cards
  //     carousel.classList.add("no-transition");
  //     carousel.scrollLeft = carousel.offsetWidth;
  //     carousel.classList.remove("no-transition");

  //     // Dragging functionality
  //     const dragStart = (e) => {
  //       isDragging = true;
  //       carousel.classList.add("dragging");
  //       startX = e.pageX || e.touches?.[0].pageX;
  //       startScrollLeft = carousel.scrollLeft;
  //     };

  //     const dragging = (e) => {
  //       if (!isDragging) return;
  //       const pageX = e.pageX || e.touches?.[0].pageX;
  //       carousel.scrollLeft = startScrollLeft - (pageX - startX);
  //     };

  //     const dragStop = () => {
  //       isDragging = false;
  //       carousel.classList.remove("dragging");
  //     };

  //     const autoPlay = () => {
  //       if (window.innerWidth < 800 || !isAutoPlay) return;
  //       timeoutId = setTimeout(
  //         () => (carousel.scrollLeft += firstCardWidth),
  //         3000
  //       );
  //     };

  //     // Arrow button click event
  //     arrowBtns.forEach((btn) => {
  //       btn.addEventListener("click", () => {
  //         carousel.scrollLeft +=
  //           btn.id === "left" ? -firstCardWidth : firstCardWidth;
  //       });
  //     });

  //     // Event listeners for drag and autoplay functionality
  //     carousel.addEventListener("mousedown", dragStart);
  //     carousel.addEventListener("mousemove", dragging);
  //     document.addEventListener("mouseup", dragStop);

  //     carousel.addEventListener("touchstart", dragStart);
  //     carousel.addEventListener("touchmove", dragging);
  //     document.addEventListener("touchend", dragStop);

  //     carousel.addEventListener("scroll", infiniteScroll);
  //     wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  //     wrapper.addEventListener("mouseleave", autoPlay);

  //     // Cleanup event listeners on unmount
  //     return () => {
  //       carousel.removeEventListener("mousedown", dragStart);
  //       carousel.removeEventListener("mousemove", dragging);
  //       document.removeEventListener("mouseup", dragStop);
  //       carousel.removeEventListener("touchstart", dragStart);
  //       carousel.removeEventListener("touchmove", dragging);
  //       document.removeEventListener("touchend", dragStop);
  //       carousel.removeEventListener("scroll", infiniteScroll);
  //       wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
  //       wrapper.removeEventListener("mouseleave", autoPlay);
  //     };
  //   }, []);

  const cards = [
    { id: "1", variant: "hover" },
    { id: "2", variant: "hover" },
    { id: "3", variant: "hover" },
    { id: "4", variant: "hover" },
    { id: "5", variant: "hover" },
    { id: "6", variant: "hover" },
  ];

  return (
    <div className="w-full overflow-x-hidden flex flex-col gap-4">
      <div className="w-full h-screen relative overflow-hidden">
        <video
          src="/media/background.mp4"
          autoPlay
          loop
          muted
          className="max-md:rotate-90 w-full max-md:scale-[6]"
        ></video>

        <div className="absolute top-1/2 max-md:top-[50%] -translate-y-1/2 w-full flex justify-center items-center flex-col z-20">
          <div className="">
            <div className="flex text-center justify-center">
              <span className="z-20 relative text-9xl max-md:text-6xl font-black text-white">
                JAMES
              </span>
              <br></br>
            </div>
            <div className="flex text-center justify-center mx-6">
              <span className="z-20 relative text-5xl max-md:text-3xl font-extrabold text-white">
                WEBB SPACE TELESCOPE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 z-20 mt-16">
                  <Link
                    href="#link"
                    className="relative font-bold text-black no-underline hover:text-black hover:scale-110 transition-all duration-500 px-5 py-2.5 max-md:px-1 max-md:py-1 max-md:text-sm bg-white rounded-md"
                  >
                    Image Gallery
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-5 px-4 w-full">
        <div className="text-slate-300 my-6 font-mono md:px-10 px-4">
          <u>
            <h1 className="font-bold text-white">
            Unveiling the Cosmos: <br /> A Glimpse into the Infinite
            </h1>
          </u>
          <br></br>
          <br /> <br />
          Beyond the familiar confines of our planet Earth lies a vast and mysterious universe, teeming with celestial wonders.<br></br>
          The James Webb Space Telescope &#39;JWST&#39;, a groundbreaking astronomical observatory launched in 2021, is revolutionizing our understanding of the universe.<br></br>
          From the shimmering stars that dot the night sky to the distant galaxies that stretch across billions of light-years, the cosmos offers a breathtaking spectacle of cosmic beauty and grandeur.<br></br>
          <br></br>
          As the JWST continues to explore the cosmos, we can expect to uncover even more astonishing discoveries and deepen our understanding of the universe&#39;s mysteries. 
          <br></br>
        </div>

        {/* CARDS  */}
        {/* <div className="container">
          <a id="link"></a>
          <div className="row h-100">
            <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              <div className="wrapper">
                <i id="left" className="fa-solid fas fa-angle-left">
                  &lt;
                </i>
                <ul className="carousel">
                  {data.length >6 &&  data.map((img) => (
                        <li className="card" key={img.id}
                        onClick={() => {
                            handleImgClick(img.id)
                        }} >
                      <FlipCard card={img} />
                    </li>
                  ))}
                </ul>
                <i id="right" className="fa-solid fas fa-angle-right">
                  &gt;
                </i>
              </div>
            </div>
          </div>
        </div> */}

        <h1 className="font-bold text-2xl md:text-4xl font-mono text-color1 my-10 lg:my-32 tracking-widest">
          IMAGE GALLERY
        </h1>
        {data.length > 4 ? "" : <Loader></Loader>}
        <div
          id="link"
          className={`w-full ${showAllImages ? "h-auto" : "h-screen"}  md:h-[100vh]  overflow-y-hidden flex flex-wrap justify-center gap-5 font-mono relative`}
        >
          {showAllImages && <Glow pos="left-[15%] "></Glow>}
          {showAllImages && <Glow pos="left-[70%] top-1/2 "></Glow>}
          {showAllImages && <Glow pos="left-[20%] bottom-[15%]"></Glow>}

          {data.map((img) => {
            return (
              <Link
                href="/images"
                onClick={() => {
                  handleImgClick(img.id);
                }}
                className="basis-[20%] max-md:basis-[40%]"
                key={img.id}
              >
                <Card img={img}></Card>
              </Link>
            );
          })}
        </div>
        {/* VIEW ALL IMGS  */}
        <div
          className={`flex flex-col items-center text-blue-600 font-mono text-xl font-thin animate-bounce cursor-pointer my-20 max-md:my-10`}
          onClick={() => {setShowAllImages(!showAllImages)}}
        >
          <p>View {showAllImages ? "Less" : "More"}</p>
          {showAllImages ? <FaAngleDoubleUp></FaAngleDoubleUp> : <FaAngleDoubleDown></FaAngleDoubleDown>}
        </div>

        <div className="w-full flex flex-col my-6 items-center justify-center relative">
          <Glow pos="left-1/2 -translate-x-[50%] top-1/2"></Glow>
          <div className="flex w-full">
            <h1
              className="font-bold text-2xl md:text-4xl font-mono text-color1 my-10 lg:mt-32
          lg:mb-20 tracking-widest w-full text-center"
            >
              WORKING MODEL
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-evenly text-center">
            <div className="w-[100%] md:w-[50%] overflow-hidden rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-blue-900 transition-all duration-300 ease-linear md:ml-10">
              <video
                src="/media/model.mp4"
                autoPlay
                loop
                muted
                className="w-full object-cover"
              ></video>
            </div>
            <div className="w-[100%] md:w-[50%] font-mono text-slate-300 md:mr-10">
              This meticulously crafted 3D model of the James Webb Space
              Telescope, created using Blender, showcases the cutting-edge
              design of NASA&#39;s next-generation space observatory. <br />
              <br />
              The model highlights the JWST&#39;s iconic gold-plated hexagonal
              mirrors, large sunshield, and its scientific instruments with
              stunning accuracy.
              <br />
              <br />
              Perfect for enthusiasts, educators, and space lovers, this model
              brings the awe-inspiring structure of JWST to life in intricate
              detail, reflecting its mission to explore the cosmos and uncover
              the secrets of the universe.
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col my-6 items-center justify-center">
          <div className="flex w-full">
            <h1
              className="font-bold text-2xl md:text-4xl font-mono text-color1 my-10 lg:mt-32
          lg:mb-20 tracking-widest w-full text-center"
            >
              QUICK LINKS
            </h1>
          </div>

          <div className="flex flex-row flex-wrap gap-6 items-center justify-evenly text-center w-full mx-5 mb-20 relative">
            <Glow pos="left-1/4 -translate-x-[50%] "></Glow>
            <Glow pos="left-3/4 -translate-x-[50%] -translate-y-[60%]"></Glow>
            <Link
              target="_blank"
              href="https://webbtelescope.org/quick-facts"
              key="facts"
            >
              <div className="text-slate-300 font-mono text-lg p-2 min-w-[150px] max-w-[250px] bg-blue-900 border-2 border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900 hover:bg-slate-300 hover:text-neutral-900 transition-all duration-200 rounded-xl font-bold">
                <div className="w-full">FACTS</div>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://webbtelescope.org/news/news-releases"
              key="news"
            >
              <div className="text-slate-300 font-mono text-lg p-2 min-w-[150px] max-w-[250px] bg-blue-900 border-2 border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900 hover:bg-slate-300 hover:text-neutral-900 transition-all duration-200 rounded-xl font-bold">
                <div className="w-full">NEWS</div>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://webbtelescope.org/resource-gallery/articles"
              key="articles"
            >
              <div className="text-slate-300 font-mono text-lg p-2 min-w-[150px] max-w-[250px] bg-blue-900 border-2 border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900 hover:bg-slate-300 hover:text-neutral-900 transition-all duration-200 rounded-xl font-bold">
                <div className="w-full">ARTICLES</div>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://webbtelescope.org/videos"
              key="videos"
            >
              <div className="text-slate-300 font-mono text-lg p-2 min-w-[150px] max-w-[250px] bg-blue-900 border-2 border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900 hover:bg-slate-300 hover:text-neutral-900 transition-all duration-200 rounded-xl font-bold">
                <div className="w-full">VIDEOS</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
