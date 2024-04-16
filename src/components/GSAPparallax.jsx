"use client";


import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useDimension } from '@/components/hooks/useDimension';


export const Parallax = ({ className, children, speed = 1, id = "parallax" }) => {
  const trigger = useRef();
  const target = useRef();
  const timeline = useRef();
  // const {window: windowWidth} = useDimension();
  const {window: windowWidth} = useWindowSize();


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const y = windowWidth * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => setY(e.progress * y)
      },
    });

    return () => {
      timeline?.current?.kill();
    };

  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>
        {children}
      </div>
    </div>
  );
};
