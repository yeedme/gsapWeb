import React, { useEffect } from "react";
import gsap from "gsap";
import onepng from '../../static/one.png'
export default function Pageone() {
  useEffect(() => {
    let g1 =gsap.context(()=>{
    let t1 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1.1,
      },
    });
    t1.to(
      ".Developing",
      {
        y: -10,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "+=1"
    ).to(".greenBlockOne", {
      opacity: 1,
      stagger: {
        from: "end",
        amount: 0.2,
      },
    })
    .to('.bottom_banner',{
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      x:10
    },"-=1.2")
    .to('.pageOneImg',{
      opacity:1
    },"-=1.4")
    });
    return ()=>g1.revert();
  }, []);
  return (
    <>
      <div className="h-screen w-screen Pageone px-4 pt-4 flex-col flex justify-between bg-opacity-50 bg-gray-300 ">
        <div className="relative">
          <img src={onepng} className="absolute md:w-1/5 opacity-0 pageOneImg" style={{left:'75%'}} />
        <div className="w-1/2 flex sm:text-9xl text-7xl ">
          <svg
            fill="none"
            height="48"
            viewBox="0 0 70 48"
            width="70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="path-dark turn-left"
              d="m26.1715 48.0001h-15.3143l-10.8572-10.8571v-15.3143l10.8572-10.8572h15.3143l10.8571 10.8572v15.3143zm-7.7143-4.5714h5.7713l8.2287-8.1714v-11.5429l-8.1715-8.2286h-11.5428l-8.22862 8.2286v11.5429l8.17142 8.1714z"
              fill="#000"
            ></path>
            <path
              className="path-primary turn-right"
              d="m37.1429 37.0286h-15.3143l-10.8572-10.8572v-15.3143l10.8572-10.8571h15.3143l10.8572 10.8571v15.3143zm-7.6572-4.5715h5.7715l8.1714-8.1714v-11.5428l-8.1714-8.22861h-11.5429l-8.2285 8.17141v11.5429l8.1713 8.1714z"
              fill="#38f997"
            ></path>   
          </svg>
          
          <h2>Yeedme </h2>   
                        
        </div>
        <div className="h-12 text-small pixlFont TextAnimation Developing mt-3">
          A BLOCKCHAIN REVOLUTION
        </div>
        {/* 四个绿色小方块 */}
        <div className=" overflow-hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135 40"                                          
            width="135"
            height="40"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clipPath="">
              <g
                className="block greenBlockOne opacity-0 "
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
                className="block greenBlockOne opacity-0"
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
                className="block greenBlockOne opacity-0"
                transform="matrix(1,0,0,-1,10,10)"
              >
                <g transform="matrix(0,1,-1,0,0,0)">
                  <path
                    fill="rgb(56,249,151)"
                    d=" M10,-10 C10,-10 10,10 10,10 C10,10 -10,10 -10,10 C-10,10 -10,-10 -10,-10 C-10,-10 10,-10 10,-10z"
                  ></path>
                </g>
              </g>
              <g
                className="block greenBlockOne opacity-0"
                transform="matrix(1,0,0,-1,70,30)"
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
        <div className="sm:text-8xl text-gray-400 text-9xl Developing TextAnimation sm:mt-3 mt-10">
          Developing
        </div>
        <div className="sm:text-8xl text-gray-400 text-9xl Developing TextAnimation">
          Sustainable {"&"} Innovative
        </div>
        <div className="sm:text-8xl text-9xl Developing TextAnimation pixlFont">
          Blockchain Solutionsz
        </div>
        </div>
        <div className="bottom_banner sm:w-2/5 sm:h-12 bg-red-100 mr-aotu flex LeftclipPath w-3/4  h-12 w-full" >
          <div className="w-1/2 primaryColor h-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-green-300">
            <p className=" sm:text-7xl text-small">GET IN TOUCH</p>
          </div>
          <div className="w-1/2 primaryColor h-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-green-300">
            <p className=" sm:text-7xl text-small">JOIN THE MOVEMENT</p>
          </div>
        </div>
      </div>
    </>
  );
}
