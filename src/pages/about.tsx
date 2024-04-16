

'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useAnimation, useTransform, useMotionValue, useInView } from 'framer-motion';
import { TitleControl, TitleControlTwo } from '@/components/framerControls';





const About = () => {
  const ref = useRef(null);
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],

  });
  const staggerAnimation = useAnimation();
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    if (isInView) {
      document.addEventListener("scroll", ev => {
        if (scrollYProgress.get() > 1.23) {
          staggerAnimation.start("visible");
        };

        if (scrollYProgress.get() < 1.23) {
          staggerAnimation.start("hidden");
        };

      });
    };
    if (scrollYProgress) {

    }
  });

  return (
    <div ref={ref} className="relative min-h-screen w-[100vw] h-[100vh] mb-[10vh]">
      <div className=''>

        <div className="absolute top-0 left-0  w-[100vw] h-[20vh] -mt-[10vh] bg-gradient-to-t from-[#FAFDFD] to-[ #fff]" />
        <div className='mt-[10vh] mb-[2vh] h-[110vh] w-full bg-[#FAFDFD] flex flex-col justify-evenly '>
          <div className='h-[25vh] w-full px-[3.5rem]  mb-[8vh] flex flex-col leading-[9rem]'>
            <div className='z-20 h-[25vh] cursor-default flex flex-row justify-start items-center w-[60%] tracking-[.19rem] italic'>
              <div ref={ref} style={{ position: 'relative' }}>
                <motion.div
                  animate={staggerAnimation}
                  variants={TitleControl}
                  initial="hidden"
                >

                  <div className=' relative flex flex-row h-full w-full mr-10 '>
                    <h1 className=' font-NotoSerifDisplay text-[5.8rem] font-thin'> AESTHETIC </h1>
                    <div className=''>

                      <span className="flex flex-row h-full items-end  text-6xl underline decoration-slate-200 decoration-2 underline-offset-[6px] font-PinyonScript font-thin  text-[--yellow]">driven</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={staggerAnimation}
                  variants={TitleControlTwo}
                  initial="hidden"
                >

                  <h1 className='outline font-NotoSerifDisplay text-[9.8rem] font-extrabold ml-[11rem]'> RESULTS </h1>
                </motion.div>
              </div>
            </div>
          </div>
          <div className='h-[35vh] w-[100vw] my-[3vh]'>
            <div className='mx-[12rem] w-full h-full flex flex-row z-0 items-center'>

              <iframe title="video" src="https://player.vimeo.com/video/933082335?badge=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;app_id=58479" width="500" height="480" allow="autoplay;"  ></iframe>

              <p className='cursor-default text-[9rem] italic font-thin font-PressStart2P '>~</p>

              <ul className='cursor-default px-[7%] flex flex-col justify-start items-start '>
                <div className="group/list1 h-[7rem] relative flex flex-row justify-evenly items-center">
                  <p>·</p>
                  <li className='text-5xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                    Ambiance
                  </li>
                  <p className='group-hover/list1:opacity-20 opacity-0 transition ease-out duration-300 z-0 text-[5.5rem] left-6 bottom-5  font-Oswald italic absolute  '>Ambiance</p>
                </div>
                <div className="group/list2 h-[7rem] relative flex flex-row justify-evenly items-center">
                  <p>·</p>
                  <li className='text-5xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                    Aesthetics
                  </li>
                  <p className='group-hover/list2:opacity-20 opacity-0 transition ease-out duration-300 z-0 text-[5.5rem] left-6 bottom-5  font-Oswald italic absolute  '>Aesthetics</p>
                </div>
                <div className="group/list3 h-[7rem] relative flex flex-row justify-evenly items-center">
                  <p>·</p>
                  <li className='text-5xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                    Modernizing
                  </li>
                  <p className='group-hover/list3:opacity-20 opacity-0 transition ease-out duration-300 z-0 text-[5.5rem] left-6 bottom-5  font-Oswald italic absolute  '>Modernizing</p>
                </div>
                <div className="group/list4 h-[7rem] relative flex flex-row justify-evenly items-center">
                  <p>·</p>
                  <li className='text-5xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                    Reinvent
                  </li>
                  <p className='group-hover/list4:opacity-20 opacity-0 transition ease-out duration-300 z-0 text-[5.5rem] left-6 bottom-5  font-Oswald italic absolute  '>Reinvent</p>
                </div>
              </ul>

            </div>
          </div>
          <div className='pt-[5vh] w-full'>
            <div className='flex flex-row items-center justify-end '>
              <p className="text-[2.5rem] cursor-default font-PoiretOne text-[--yellow]"> Design</p> <div className='w-[9rem] h-[3px] bg-[--yellow] mt-[.5rem] ml-[2rem] mr-[9vw]'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;