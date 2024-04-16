"use client";

import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import {  useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';


import { Parallax } from './GSAPparallax';
import { importedImages } from "./importedImagesArray";
import {useDimension} from '@/components/hooks/useDimension';

import styles from "../styles/scrollContent.module.scss";


export const ScrollContent = () => {
  const columnRef = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: columnRef,
    offset: ["start end", "end start"]
  });

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   };

  //   requestAnimationFrame(raf);
  // }, [])

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 3.21]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * .75]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * .4]);


  return (
    <div className="pt-[10vh] relative" >
      <div className="absolute top-0 left-0  w-[100vw] h-[20vh] -mt-[10vh] bg-gradient-to-t from-[#0f0f10] to-[#FAFDFD]" />
      <Parallax speed={0} className=" w-[100vw] overflow-hidden bg-[#0f0f10]">
      <div ref={columnRef} className={styles.gallery}>
        <ColumnComponent images={[importedImages[0], importedImages[1], importedImages[2]]} y={y} />
        <ColumnComponent images={[importedImages[3], importedImages[4], importedImages[5]]} y={y2} />
        <ColumnComponent images={[importedImages[6], importedImages[7], importedImages[8]]} y={y3} />
        <ColumnComponent images={[importedImages[9], importedImages[10], importedImages[11]]} y={y4} />
      </div>
      </Parallax>
    </div>
  );
};


const ColumnComponent = ({ images, y = 0 }: any[any]) => {
  return (
    <motion.div
      style={{ y }}
      className={styles.column}>
      {
        images.map((src: HTMLImageElement, index: number) => {
          return <div key={index} className={styles.imageContainer}>
            <Image
              fill
              src={src}
              quality={80}
              className="opacity-85"
              alt="images"
            />
          </div>
        })
      }
    </motion.div>
  );
};