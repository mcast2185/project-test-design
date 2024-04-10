'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useAnimation, useTransform, useMotionValue, useInView } from 'framer-motion';
import { TitleControl, TitleControlTwo } from '@/components/framerControls';
import DESIGN from '../../public/images/';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
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
  });

  return (
    <div className="relative min-h-screen w-[100vw] h-[100vh]">
      <div className="absolute top-0 left-0  w-[100vw] h-[20vh] -mt-[10vh] bg-gradient-to-t from-gray-200 to-[#e5e7eb00]"/>
      <div className='mt-[10vh] h-[100vh] w-full bg-slate-200 border-t-slate-100'>
        <div className='h-[30%] w-full px-[4.5rem] mt-[2.5rem]'>
          <div className='cursor-default flex-row justify-start items-center w-[60%] tracking-[.19rem] italic'>
            <div ref={ref} style={{ position: 'relative' }}>
              <motion.div
                animate={staggerAnimation}
                variants={TitleControl}
                initial="hidden"
              >

                <div className='relative flex flex-row h-full w-full gap-3 mr-10 '>
                  <h1 className=' font-NotoSerifDisplay text-[8rem] font-thin'> AESTHETIC </h1>
                  <span className="absolute bottom-4 right-5 text-6xl underline decoration-slate-200 decoration-2 underline-offset-[6px] font-PinyonScript font-thin mr-10 text-[--yellow]">driven</span>
                </div>
              </motion.div>

              <motion.div
                animate={staggerAnimation}
                variants={TitleControlTwo}
                initial="hidden"
              >

                <h1 className='outline font-NotoSerifDisplay text-[9rem] font-extrabold ml-[11rem]'> RESULTS </h1>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='h-[35%] w-full pt-10'>
          <div className='px-[4.5rem] flex flex-row'>
            <div className='left-container'>
              <div className='item-container'>
                <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"
                  allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share "
                  width="450" height="400" title="design gif" allowFullScreen={false} src="../../public/images/designTwo.mp4">
                </iframe>  
                <iframe width="450" height="400" src="https://www.youtube.com/embed/zwd1ximtn9U?si=tfS_qHzPlFagSq10&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}></iframe>
              </div>
            </div>
            <div className='right-container'>
              <div className='item-container'>
                <ul className='list'>
                  <li>Ambiance</li>
                  <li>Aesthetics</li>
                  <li>Modernizing</li>
                  <li>Reinvent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;