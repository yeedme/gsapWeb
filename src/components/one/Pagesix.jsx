import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap';
const PageSixstring='We have the passion,fortitude, and ability to be disruptive.';
const PagesSixContext=[...PageSixstring];

export default function Pagesix() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
      let g6=gsap.context(()=>{
          gsap.to('.PagesixTextMain span',{
            scrollTrigger:{
              trigger:".page6",
              top:"top top",
            
              pin:true,
              end:()=>window.innerHeight * 2 + "top",
              scrub: .5,
            },
            color:'black',
            stagger:.3,
            
          });

          gsap.to('.PagesixTextMain',{
            scrollTrigger:{
              trigger:".page6",
              top:"center top",
           

              end:()=>window.innerHeight + "top",     
            },
            border:'1px solide black '            
          })

      })

      return ()=>g6.revert();
  })
  return (
    <>
    <div style={{height:'300vh'}}>
     <div className='w-screen h-screen flex justfiy-bewteen items-center flex-col page6'>
        <div className='md:w-2/3  w-5/6 h-1/6 flex  items-center pixlFont 4rem md:text-small'>
          About us
        </div>
        <div className='md:text-8xl text-10xl md:w-2/3 w-5/6 text-gray-300 PagesixTextMain'>
            {
              PagesSixContext.map((t,index)=>{
                return (
                  <span key={ index }>{t}</span>
                )
              })
            }
        </div>
        <div className='md:w-2/3 w-5/6 h-2/6  flex  items-center'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135 40"                                          
            width="135"
            height="40"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clipPath="">
              <g
                className="opacity-1 "
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
                className=" pacity-0"
                transform="matrix(1,0,0,-1,30,30)"
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
      </div> 
      </div>
    </>

  )
}
