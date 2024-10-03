"use client";

import imageStore from "@/store/store";
import ActiveImage from "@/components/ActiveImage";

import { Provider, useSelector } from "react-redux";

export default function page() {
  return (
    <Provider store={imageStore}>
      <div className="w-full h-screen">
        <ActiveImage></ActiveImage>
      </div>
    </Provider>
  );
}
