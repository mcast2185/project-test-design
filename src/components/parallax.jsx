"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const ParallaxScrollPage = () => {
  const container = useRef(null);


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const tl =gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      tl.to( REFOBJ.current, {y: -50}, 0);
    });
    
    // const y = windowWidth * speed * 0.1;
    // const setY = gsap.quickSetter(target.current, "y", "px");

    
    // timeline.current = gsap.timeline({
    //   scrollTrigger: {
    //     id: id,
    //     trigger: trigger.current,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "bottom top",
    //     onUpdate: (e) => setY(e.progress * y)
    //   },
    // });

    // return () => {
    //   timeline?.current?.kill();
    // };

    
    return () => context.revert();

  }, []);

  return (
    <div ref={container} className="h-[100vh] w-[100vw]">
      <div className="body">
        {children}
      </div>
    </div>
  );
};
