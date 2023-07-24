import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Pagetwo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
let g2=gsap.context(()=>{


    let typeone = ScrollTrigger.create({
      trigger: ".pageTwoFirst",
      start: "top 10%",
    });
    gsap.to(".pageTwoSquare_byOne", {
      scrollTrigger: typeone,
      height: "6rem",
      duration: 0.7,
    });
    gsap.to(".pageTwoSquare_byTwo", {
      scrollTrigger: typeone,
      height: "9rem",
      duration: 0.7,
    });
    gsap.to(".pagetwo_animate_text span", {
      scrollTrigger: typeone,
      stagger: 0.1,
      opacity: 1,
    });

    let typetwo=ScrollTrigger.create({
      trigger: ".pagetwo_animate_text",
      start: "top 30%",

    });
    gsap.to('.greenBlockTwo',{
      scrollTrigger: typetwo,
      opacity: 1,
      stagger: {
        from: "end",
        amount: 0.3,
      },
    })
    gsap.to('.pageTwoLitterText h2 span',{
      scrollTrigger:{
        trigger:'.greenBlockTwo',
        start:'top center'
      },
      opacity: 1,
      stagger:.3
    })

    gsap.to('.pagetwoMianText ',{
      scrollTrigger:{
        trigger:'.pageTwoFirst',
        start:'top center'
      },
      y: -10,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    })
  })
  return ()=>g2.revert();
  }, []);
  return (
    <>
      <div className="h-screen w-screen px-8 pt-4 pagetwo">
        <div className="relative">
        <div className="absolute" style={{ left: "90%" }}>
            <div className="flex pageTwoFirst h-32">
              <div className="w-10 h-0 bg-blue-300 -mt-5 pageTwoSquare_byOne " />
              <div className="w-10 h-0 primaryColor mt-5 pageTwoSquare_byTwo" />
            </div>
          </div>
        </div>
          <div className="pagetwo_animate_text my-8 ">
            <span className="opacity-0">C</span>
            <span className="opacity-0">H</span>
            <span className="opacity-0">A</span>
            <span className="opacity-0">L</span>
            <span className="opacity-0">L</span>
            <span className="opacity-0">E</span>
            <span className="opacity-0">N</span>
            <span className="opacity-0">G</span>
            <span className="opacity-0">I</span>

            <span className="opacity-0">S</span>
            <span className="opacity-0">T</span>
            <span className="opacity-0">A</span>
            <span className="opacity-0">N</span>
            <span className="opacity-0">D</span>
            <span className="opacity-0">A</span>
            <span className="opacity-0">R</span>
            <span className="opacity-0">D</span>
            <span className="opacity-0">S</span>
          </div>
          <div>
            <h2 className="text-8xl pt-8 pagetwoMianText TextAnimation">
              It’s Time for a <br/> Blockchain Revolution</h2>
          </div>

           {/* 三个绿色小方块 */}
          <div className=" overflow-hidden w-1/2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135 40"                                          
            width="135"
            height="40"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clipPath="">
              <g
                className="block greenBlockTwo opacity-0 "
                transform="matrix(1,0,0,-1,50,10)"
              >
                <g transform="matrix(0,1,-1,0,0,0)">
                  <path
                    fill="rgb(56,249,151)"
                    d=" M10,-10 C10,-10 10,10 10,10 C10,10 -10,10 -10,10 C-10,10 -10,-10 -10,-10 C-10,-10 10,-10 10,-10z"
                  ></path>
                </g>
              </g>
              <g
                className="block greenBlockTwo opacity-0"
                transform="matrix(1,0,0,-1,30,30)"
              >
                <g transform="matrix(0,1,-1,0,0,0)">
                  <path
                    fill="rgb(56,249,151)"
                    d=" M10,-10 C10,-10 10,10 10,10 C10,10 -10,10 -10,10 C-10,10 -10,-10 -10,-10 C-10,-10 10,-10 10,-10z"
                  ></path>
                </g>
              </g>
              <g
                className="block greenBlockTwo opacity-0"
                transform="matrix(1,0,0,-1,10,10)"
              >
                <g transform="matrix(0,1,-1,0,0,0)">
                  <path
                    fill="rgb(56,249,151)"
                    d=" M10,-10 C10,-10 10,10 10,10 C10,10 -10,10 -10,10 C-10,10 -10,-10 -10,-10 C-10,-10 10,-10 10,-10z"
                  ></path>
                </g>
              </g>
      
            </g>
          </svg>
        </div>
      <div className="w-full  pt-24  flex justify-center items-center">
        <div className="md:w-2/5 w-full pageTwoLitterText">
        <h2>
          <span className="opacity-0">What if blockchain adoption didn't mean crypto adoption?</span><span className="opacity-0">A stablecoin as our gas token removes transaction volatility and speculation. </span><span className="opacity-0">We are creating the next class of blockchain, built on the principle of economic sustainability.</span>
        </h2>
        </div>
      </div>
      </div>
    </>
  );
}
