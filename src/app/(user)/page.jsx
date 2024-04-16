'use client';

// import {gsap} from "gsap";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import { Parallax} from "@/components/GSAPparallax";
import { ScrollContent } from "@/components/scrollparallaxpage";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import SmoothScrolling from "@/components/SmoothScrolling";
import useIsomorphicLayoutEffect from '../../components/hooks/morphicLayout';

export default function index() {
  // const container = useRef();


  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         target: container.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true
  //       }
  //     });
  //     tl.to(container.current, { y: 50 }, 0);
  //   });
  // })
  
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <SmoothScrolling>
        <Home/>
        <About/>
        <ScrollContent/>
        <Services/>
      </SmoothScrolling>
    </div>
  );
};