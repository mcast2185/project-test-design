'use client';

import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useAnimation, useInView } from 'framer-motion';

import Menu from '../components/menu';
import { TitleControl, TitleControlThree, TitleControlTwo } from '@/components/framerControls';


const DynamicBackGround = dynamic(() => import("../components/threeScene"), {
  loading: () => <></>,

});


export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const isInView = useInView(ref, { once: true });
  const staggerAnimation = useAnimation();


  useEffect(() => {
    if (isInView) {
      document.addEventListener("scroll", ev => {
        if (scrollYProgress.get() > .23) {
          staggerAnimation.start("visible");
        };

        if (scrollYProgress.get() < .23) {
          staggerAnimation.start("hidden");
        };

      });
    };

  });

  return (
    <main className=" flex min-h-screen flex-col">
      <Menu/>
      <DynamicBackGround/>
      <div className='flex flex-col h-[100vh] w-[100vw]  '>
        
        <div className='h-[10%] w-full pt-[1rem]'>
          <div className='flex flex-row items-center justify-end '>
              <p className="text-[2.5rem] cursor-default font-PoiretOne text-[--yellow]"> Preamble</p> <div className='w-[9rem] h-[3px] bg-[--yellow] mt-[.5rem] ml-[2rem] mr-[9vw]'>
              </div>
          </div>
        </div>

        <div className='h-[55%] w-full px-[4.5rem] mt-[2.5rem]'>
          <div className='cursor-default flex-row justify-start items-center w-[60%] h-full  tracking-[.19rem] italic'>
            <div ref={ref} style={{ position: 'relative' }}>
              <motion.div
                animate={staggerAnimation}
                variants={TitleControl}
                initial="hidden"
              >

                <h1 className=' text-gray-200 font-NotoSerifDisplay text-[5.9rem] font-thin'>DESIGNING<br /></h1>
              </motion.div>

              {/* <h1 className=' text-gray-200 font-NotoSerifDisplay text-[5.9rem] font-thin'>DESIGNING<br/></h1> */}
              <motion.div
                animate={staggerAnimation}
                variants={TitleControlTwo}
                initial="hidden"
              >

                <h1 className='my-[.35rem] text-gray-200 font-NotoSerifDisplay text-[5.9rem] font-thin ml-[9.5rem]'> MODERN<br/> </h1>
              </motion.div>

              <motion.div
                animate={staggerAnimation}
                variants={TitleControlThree}
                initial="hidden"
              >

                {/* <div className=''> */}
                  <div className='flex flex-row h-full w-full gap-6 items-start'>
                    <span className=" text-6xl underline decoration-slate-200 decoration-2 underline-offset-[6px] font-PinyonScript font-thin text-gray-200">art</span> 
                    <h1 className=' inline align-text-top border-none text-[--yellow] font-NotoSerifDisplay text-[6.2rem] font-medium '>EXPERIENCE'S</h1>
                  
                  </div>
                {/* </div> */}
              </motion.div>
            </div>
          </div>
        </div>
 
        <div className='flex flex-row h-full w-[75%] px-[4.5rem] pt-[3rem] items-center  gap-56 '>
          <div className='flex-1'>
            <div className='group/arrows cursor-pointer h-[8rem] relative w-[8rem] border border-gray-300 rounded-full flex justify-center items-center transform hover:scale-90 ease-in-out duration-700 hover:border-[#5d1da1] '>
              <div className=' h-[48px] w-[40px] overflow-hidden flex justify-center flex-col '>
                <span className=''>
                  <ArrowDown className="w-[40px] h-[64px] text-gray-300 group-hover/arrows:text-[--yellow] group-hover/arrows:translate-y-16 transform-none ease-in-out duration-[850ms]"/>
                  <ArrowDown className="w-[40px] h-[64px] mb-[55px] text-gray-300  group-hover/arrows:translate-y-11 transform-none ease-in-out duration-700"/>
                </span>
               
              </div>
            </div>
          </div>
          <div className='cursor-default w-[55%] flex '>
            <p className="font-Inter font-light text-2xl leading-10 text-slate-300">
              We are a design company focused on <span className="underline decoration-[--yellow]">providing</span> your business allure through art.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

