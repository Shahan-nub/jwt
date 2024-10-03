"use client";

import { activeImageActions } from "@/store/slices/activeImageSlice";
import imageStore from "@/store/store";
import Link from "next/link";
import { useDispatch } from "react-redux";
const axios = require("axios");
const { useState, useEffect } = require("react");

export default function HomePage() {
  const [data, setData] = useState([]);
  let images = [...data];
  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.jwstapi.com/all/type/jpg?page=1&perPage=40",
      headers: { "X-API-KEY": "e33bc7e8-2249-4e67-bea0-59e3b02373bc" },
    };

    axios(config)
      .then((response) => {
        images = response.data.body.filter((image) => {
          return !image.location.includes("_thumb");
        });
        setData(images);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchData();

  const dispatch = useDispatch();

  const handleImgClick = (id) => {
    const activeImg = data.filter((img) => img.id === id);
    // console.log(id)
    // console.log(activeImg)
    dispatch(activeImageActions.addActiveImage(activeImg));
  };

  return (
    <div className="flex flex-wrap gap-6 px-4 py-2 md:py-4">
      {data.map((image) => (
        <Link
          href="/images"
          className="text-white"
          key={image.id}
          onClick={() => {
            handleImgClick(image.id);
          }}
        >
          <img
            src={image.location}
            alt="fdfd"
            className="size-[100px] aspect-square object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
