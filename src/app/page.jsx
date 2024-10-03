"use client"

import HomePage from "@/components/HomePage"
import imageStore from "@/store/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <Provider store={imageStore}>
      <div className="w-screen h-screen">
        <HomePage></HomePage>
      </div>
    </Provider>
  )
}
