import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const page5TextData=[{
  title:"2019",
  context:"Deployed a bridge and dex to support our multi-chain staking token"
},{
  title:"2020",
  context:"Unifi Protocol launches AMM with sustainable UP rewards"
},{
  title:"2021",
  context:"More blockchain partners and UNFI DAO participates in governance"
},{
  title:"2022",
  context:"Advanced DeFi strategies and decentralized arbitrage solutions"
}]
export default function Pagefive() {
  let page5content = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let contentWidth = page5content.current.offsetWidth;
    let p5 = gsap.context(() => {
      gsap.to(".page5pin", {
        scrollTrigger: {
          trigger: ".page5",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: .3,
     
        },
        x: () => contentWidth * -4.1,
      });
      gsap.to(".p5context .TextAnimation", {
        scrollTrigger: {
          trigger: ".page5",
          start: "top center",
          end: "top top",
        },
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration:1,
      });
    });

    return () => p5.revert();
  }, []);
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".p5context", "skewX", "deg"),
      //gsap.quickSetter("类名", "动画效果(roate skewY )", "deg"),
      clamp = gsap.utils.clamp(-10, 10);
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -400);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power4.inOut",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
    gsap.set(".p5context", { force3D: true });
  }, []);
  return (
    <>
      <div className="flex justify-center ">
        <div
          className="md:w-4/5 w-full overflow-hidden md:rounded-3xl page5 flex-shrink-0"
          style={{ height: "600vh" }}
        >
          <div className="w-full h-screen page5bgimg ">
          {/* 遮罩层 */}
          <div className="w-full h-screen flex page5pin items-center"
          >
            {/* 内容 */}
            <div
              className="w-full h-3/4  flex-shrink-0 p5context p-8 flex justify-between flex-col"
              ref={page5content}
            >
              <div className="md:text-11xl text-4rem TextAnimation">2018</div>
              <div className="md:text-11xl text-9xl TextAnimation">
                A staking community based on a collateralized derivative token
              </div>
            </div>
                {
                  page5TextData.map((t)=>{
                    return (
                      <div
                      className="w-full h-3/4  flex-shrink-0 p5context p-8 flex justify-between flex-col"
                      key={t.title}
                    >
                      <div className="md:text-11xl text-4rem">{t.title}</div>
                      <div className="md:text-8xl text-9xl">
                       {t.context}
                      </div>
                    </div>
                    )
                  })
                }
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
