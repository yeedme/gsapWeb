import React, { useEffect, useRef, useState } from "react";
import noiseBackground from "../../static/noise-background.jpg";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
//用于渲染 跑马灯
const textData = [
  {
    titleTop: "Sustainable",
    titleBottom: "DeFi",
    right:
      "Our DeFi Exchange operates on over 10 blockchains. Our liquidity provider reward token is a native backed token, unique to each blockchain our solution operates on.",
    left: "This token becomes less speculative and provides value to becoming a liquidity provider.",
  },
  {
    titleTop: "Wrapperless",
    titleBottom: "Bridge",
    right:
      "Our bridge is unique in that we do not wrap UNFI when it is bridged between our supported blockchains.",
    left: "When you bridge UNFI to another blockchain, you receive the native UNFI on each chain.",
  },
  {
    titleTop: "MultiChain",
    titleBottom: "UNFI DAO",
    right:
      "UNFI token holders are granted exclusive access to Proposals and Referendums",
    left: "to propose or vote on Unifi governance actions across multiple blockchains.",
  },
  {
    titleTop: "Gas Fees are",
    titleBottom: "Broken",
    right:
      "The future of blockchain technology will utilize stablecoins as their native tokens, finally putting an end to the misery that is gas tokens.",
    left: "And not just any stablecoin, but one that is 100% backed by a proven and sustainable algorithm.",
  },
];
const Navdata = ["DEFi", "CROSS CHAIN", "GOVERNANCE", "GAS"];
export default function Pagethree() {
  let carouselDom = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(992);
  const [carouselHeight, setCarouselHeight] = useState(478);
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(0);
  useEffect(() => {

    let g3=gsap.context(()=>{
    setCarouselWidth(carouselDom.current.offsetWidth);
    setCarouselHeight(carouselDom.current.offsetHeight);
    gsap.registerPlugin(ScrollTrigger);
    let sg1 = ScrollTrigger.create({
      trigger: ".pageThree",
      start: "center 80%",
      ease: "power4.inOut",
      duration: 1,
    });
    gsap.to(".PagethreeTextAniamte", {
      y: -10,
      scrollTrigger: sg1,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      stagger:.8
    });
    gsap.to(".PageThreeBlockOne", {
      y: -10,
      height: "10rem",
      scrollTrigger: sg1,
      duration: 1.5,
    });
    gsap.to(
      ".PageThreeBlockTwo",
      {
        y: -10,
        height: "7rem",
        duration: 2,
        scrollTrigger: sg1,
      },
      "-=1"
    );
  })
  return ()=> g3.revert()
  }, []);
  //监听 count移动跑马灯
  useEffect(() => {
    const carouseLength = textData.length; //跑马灯 子元素数量
    let setp = count % carouseLength;
    setp < 0 ? (setp = carouseLength + setp) : void 0;
    setNav(setp);
    gsap.to(".carousel", {
      x: -carouselWidth * setp,
      ease: "power4.inOut",
      duration: 1,
      // toggleActions: "restart none none none",
    });
  }, [count]);
  //鼠标移到箭头动画
  const arrowMoveRight = () => {
    gsap.from(".arrowRight", {
      x: "-150%",
      duration: 0.7,
      ease: "power4.inOut",
    });
  };
  const arrowMoveLeft = () => {
    gsap.from(".arrowLeft", {
      x: "+150%",
      duration: 0.7,
      ease: "power4.inOut",
    });
  };
  return (
    <>
      <div className="h-screen w-screen relative pageThree">
        <div className="lg:flex w-full h-full justify-center pt-4">
          {/* menu PC */}
          <div className="otherVw h-1/2 lg:flex hidden flex-col justify-between">
            {Navdata.map((t, index) => {
              return (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => setCount(index)}
                >
                  <div
                    className={
                      index === nav
                        ? "relative primaryBorderColor border-b-2 transition-all"
                        : "border-b-2 border-transparent "
                    }
                  >
                    <h1 className="text-small">{t}</h1>
                    <div
                      className={
                        index === nav
                          ? "w-6 h-6 scale-100 primaryColor absolute opacity-100 z-10 transition-all"
                          : ""
                      }
                      style={{ left: "100%", top: "30%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
            <div className="h-1/4"></div>
          </div>
          {/* menu mobile */}
          <div className="lg:hidden w-1/2 flex justify-around items-center h-12 ">
            {Navdata.map((t, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setCount(index)}
                  className={
                    index === nav
                      ? " w-6 h-6 scale-100 cursor-pointer border-8 primaryBorderColor bg-white transition-all"
                      : "  w-6 h-6 scale-100 cursor-pointer primaryColor "
                  }
                ></span>
              );
            })}
          </div>
          {/* 走马灯 */}
          <div className="lg:w-4/6 lg:h-5/6 w-full h-full relative">
            <div className="absolute w-full h-full">
              {/* 走马灯 */}
              <div className="w-full h-full  overflow-hidden" ref={carouselDom}>
                <div className="carousel" style={{ width: carouselWidth * 4 }}>
                  {textData.map((temp, index) => {
                    return (
                      <div
                        key={index}
                        className="inline-block"
                        style={{ width: carouselWidth, height: carouselHeight }}
                      >
                        <img
                          src={noiseBackground}
                          className="absolute inline-block opacity-75 "
                          style={{
                            width: carouselWidth,
                            height: carouselHeight,
                          }}
                        />
                        {/* 文本显示*/}
                        <div className="PagethreeMianText absolute p-4  ">
                          <div
                            className="flex justify-between flex-col"
                            style={{
                              width: carouselWidth,
                              height: carouselHeight,
                            }}
                          >
                            <div className="w-full PagethreeTextAniamte TextAnimation md:mt-0 mt-20">
                              <h2 className="sm:text-8xl text-10xl">
                                {temp.titleTop}
                              </h2>
                              <h2 className="sm:text-8xl text-10xl">
                                {temp.titleBottom}
                              </h2>
                            </div>
                            <div className="md:w-3/4 md:h-1/2 h-3/4 flex justify-between items-center PagethreeTextAniamte TextAnimation">
                              <div className="md:w-2/5 w-1/2">{temp.right}</div>
                              <div className="md:w-2/5 w-1/2">{temp.left}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 箭头区 */}
            <div className="lg:w-1/5 w-28 h-12 bg-red-100 lg:h-3/5 absolute md:left-4/5 left-70">
              {/* 左箭头 */}
              <div
                className="lg:h-1/2 h-full w-1/2 lg:w-full  bg-white lg:flex inline-block cursor-pointer justify-center items-center overflow-hidden"
                onClick={() => setCount(count - 1)}
                onMouseEnter={arrowMoveLeft}
              >
                <svg
                  t="1669530588630"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2262"
                  width="90%"
                  height="90%"
                  className="arrowLeft"
                >
                  <path
                    d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                    fill=""
                    p-id="2663"
                  ></path>
                </svg>
              </div>
              {/* 右箭头 */}
              <div
                className="lg:h-1/2 h-full w-1/2 lg:w-full   bg-gray-100 lg:flex inline-block cursor-pointer justify-center items-center overflow-hidden"
                onClick={() => setCount(count + 1)}
                onMouseEnter={arrowMoveRight}
              >
                <svg
                  t="1669530645100"
                  className="arrowRight"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2256"
                  width="90%"
                  height="90%"
                >
                  <path
                    d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z"
                    fill=""
                    p-id="2257"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="absolute lg:block hidden"
            style={{ top: "80%", left: "10%" }}
          >
            <div className="PageThreeBlockOne w-8 h-0 bg-yellow-300 mx-4 inline-block"></div>
            <div className="PageThreeBlockTwo w-8 h-0 bg-green-300 ml-4 inline-block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
