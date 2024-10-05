"use client";

import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import HomePage2 from "@/components/HomePage2";
import imageStore from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={imageStore}>
      <div className="w-screen overflow-scroll no-scrollbar overflow-x-hidden">
        {/* <HomePage></HomePage> */}
        <HomePage2></HomePage2>
        <Footer></Footer>
      </div>
    </Provider>
  );
}
