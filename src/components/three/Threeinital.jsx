import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";

import  DrawSVGPlugin  from "gsap/all";

export default function Threeinital() {
  //控制菜单 false 等于关闭 true对于开启
  const [menuState, setMenuState] = useState(false);

  //类似节流 defend==true才能继续变化动画
  const [defend, setDefend] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    // console.log("drawSVG");
    let t1 = gsap.context(() => {
      gsap.from('#Line1',{
        drawSVG:"0%",
        duration:3
      }
      )
    });
    return () => t1.revert();
  }, []);

  function openMenuAnimation() {
    let time2 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 0.3,
      },
    });
    time2
      .to(".marks", {
        width: "100%",
      })
      .to(".obliqueDiv", {
        height: "100%",
        duration: 1.5,
      })
      .to(".a", {
        end: () => {
          setDefend(true);
        },
      });
  }

  function coloseMenuAnimation() {
    let time1 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 0.1,
      },
    });
    time1
      .to(".obliqueDiv", {
        height: "0%",
        duration: 1.5,
      })
      .to(".marks", {
        width: "0%",
      })
      .to(".a", {
        end: () => {
          setDefend(true);
        },
      });
  }
  //节流函数 只有 动画结束才能把 defend设置为true
  //点击菜单按钮时 会把defend 变为false 之后就可以进行动画了
  useEffect(() => {
    defend ? void 0 : setMenuState((menuState) => !menuState);
  }, [defend]);

  useEffect(() => {
    menuState ? coloseMenuAnimation() : openMenuAnimation();
  }, [menuState]);

  return (
    <>
      <div className="a relative w-screen h-screen overflow-hidden">
        <div className="absolute">
          asdasdsad
          <br />
          asdsad
        </div>

        {/* animation */}
        <div className="w-0 absolute  h-screen flex justify-center items-center  overflow-hidden marks">
          <div
            className="w-full h-full absolute transform rotate-45 flex flex-shrink-0 justify-between align-center flex-col animationDiv"
            style={{ height: "300%", width: "300%" }}
          >
            <div className="w-full h-0 bg-gray-400 obliqueDiv" />
            <div className="w-full h-0 bg-gray-400 obliqueDiv" />
            <div className="w-full h-0 bg-gray-400 obliqueDiv" />
          </div>
        </div>

        <div className="absolute w-full bg-red-100">
          <button onClick={() => setDefend(false)}>close</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 421.213 421.213">
          <line id="Line1" x2="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" />
          <line id="Line2" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" />
          <line id="Line3" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" />

  {/* 模板 */}
  <line id="coloseLine1" x2="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="coloseLine2" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="coloseLine3" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="openLine1" x1="400" y2="400" transform="translate(127.607 118.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="openLine1" x1="400" y2="400" transform="translate(127.607 118.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="openLine2" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
  <line id="openLine3" x1="400" y2="400" transform="translate(233.607 210.607)" fill="none" stroke="#707070" strokeWidth="30" className="invisible"/>
          </svg>

{/* other */}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="644.213" height="621.213" viewBox="0 0 644.213 621.213">
  <line id="openLine1" x1="400" y2="400" transform="translate(127.607 118.607)" fill="none" stroke="#707070" stroke-width="30"/>
  <line id="openLine2" x1="400" y2="400" transform="translate(10.607 10.607)" fill="none" stroke="#707070" stroke-width="30"/>
  <line id="openLine3" x1="400" y2="400" transform="translate(233.607 210.607)" fill="none" stroke="#707070" stroke-width="30"/>
</svg> */}

        </div>
      </div>
    </>
  );
}
