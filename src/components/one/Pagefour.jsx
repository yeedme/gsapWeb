import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
let string =
  "leaders in developing sustainable & innovative solutions, the future of blockchain is in our history.";
let textDataOne = [...string];
export default function Pagefour() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      //文本
      gsap.to(".PagefourTextMain", {
        scrollTrigger: {
          trigger: ".PageFour_mask",
          scrub: 1,
          start: "top +=15%",
          end: () => "top" + "top",
        },
        y: -10,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      });
      //pin
      gsap.to(".PagefourTextAnimation", {
        scrollTrigger: {
          trigger: ".PageFour_mask",
          pin: true,
          scrub: 2,

          start: "top top",
          end: () => window.innerHeight * 2 + "top",
        },
        stagger: 0.2,
        color: "white",
      });
      
      gsap.to(".PagefourBlockAnimation", {
        scrollTrigger: {
          trigger: ".PageFour_mask",
          scrub: 2,
          start: "top top",
          end: () => window.innerHeight * 2 + "top",
        },
        width: "100vw",
      });
      gsap.to(".PagefourBlockTwoAnimation", {
        scrollTrigger: {
          trigger: ".PageFour_mask",
          scrub: 2,
          start: "top top",
          end: () => window.innerHeight * 2 + "top",
        },
        width: "1.5rem",
        stagger: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div style={{ height: "300vh " }} className="w-full flex justify-center ">
        <div className=" PageFour_mask  w-screen bg-black bg-opacity-75 h-screen ">
          <div className="w-5/6 pt-8 md:pl-8 TextAnimation PagefourTextMain">
            {textDataOne.map((t, index) => {
              return (
                <span
                  key={index}
                  className="md:text-8xl text-9xl text-gray-600 PagefourTextAnimation"
                >
                  {t}
                </span>
              );
            })}
            <div className="PagefourBlockAnimation w-0 bg-white h-2 mt-auto" />
            <div>
              <div className="PagefourBlockTwoAnimation w-0 scale-100 primaryColor h-6" />
              <div
                className="PagefourBlockTwoAnimation w-0 scale-100 primaryColor h-6 relative"
                style={{ left: "1.5rem" }}
              />
              <div className="PagefourBlockTwoAnimation w-0 scale-100 primaryColor h-6 " />

              <div
                className="PagefourBlockTwoAnimation w-0 scale-100 primaryColor h-6 relative"
                style={{ left: "1.5rem" }}
              />
              <div className="PagefourBlockTwoAnimation w-0 scale-100 primaryColor h-6 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
