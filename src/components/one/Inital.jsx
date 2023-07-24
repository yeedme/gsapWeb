import React, { useEffect } from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import Pagefour from "./Pagefour";
import Pagefive from "./Pagefive";
import Pagesix from "./Pagesix";
import Pageseven from "./Pageseven";
import gsap from "gsap";
export default function Inital() {
  useEffect(() => {
    gsap.to(".Loading", {
      height: 0,
      duration: 1,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="h-full w-full relative">
      {/* 背景线条 */}
      <div className="h-full fixed w-full">
        <div className="h-screen flex w-screen ">
          <div className="w-1/5 h-full border-gray-300 border-r md:border-2 border" />
          <div className="w-1/5 h-full border-gray-300 border-r md:border-2 border" />
          <div className="w-1/5 h-full border-gray-300 border-r md:border-2 border" />
          <div className="w-1/5 h-full border-gray-300 border-r md:border-2 border" />
          <div className="w-1/5 h-full border-gray-300 border-r md:border-2 border" />
        </div>
      </div>
      {/* 路由展示区 */}
      <div className=" w-full overflow-hidden absolute">
        <Pageone />
        <Pagetwo />
        <Pagethree />
        <Pagefour/>
        <Pagefive/>
        <Pagesix/>
        <Pageseven/>
      </div>
      <div className="Loading w-screen h-screen absolute bg-gray-500" />
    </div>
  );
}
