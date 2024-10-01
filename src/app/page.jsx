"use client";

const axios = require("axios");
const { useState } = require("react");

export default function Home() {
  const [data, setData] = useState([]);
  let images = [...data];
  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.jwstapi.com/all/type/jpg?page=1&perPage=20",
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

  return (
    <div className="flex flex-wrap gap-6">
      {data.map((image) => (
        <div className="text-white" key={image.id}>
          <img
            src={image.location}
            alt="fdfd"
            className="size-[100px] aspect-square object-cover"
          />
        </div>
      ))}
    </div>
  );
}
