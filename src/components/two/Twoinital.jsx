import React ,{ useEffect }  from "react";
import "./Twointial.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Twoinital() {
  //滚动一下 自动下一页
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tw2 = gsap.context(() => {


      gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
      
      ScrollTrigger.create({
        snap: 1 / 3, // snap whole page to the closest section!
      });

     
    });
    return ()=>tw2.revert();
  },[]);
  return (
    <>
      <div>
        <section className="panel red">One</section>
        <section className="panel green">Two</section>
        <section className="panel blue" >Three</section>
        <section className="panel yellow">Four</section>
      </div>
    </>
  );
}
