'use client';

import Link from 'next/link';
import React, { 
  useEffect, 
  useRef, 
  useState 
} from 'react';
import {gsap} from "gsap";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import {
  useScroll,
  motion,
  useTransform,
  useAnimation,
  AnimatePresence
} from 'framer-motion';


import LOGO from "../../public/images/Logo.svg"

const Menu = () => {
  const tl = useRef<any>(null);
  const ref = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const dynamicLinks = (path: string, pageName: string) => {
    return (
      <div className='menuLinkItem'>
        <div className='menuLinkContainer' onClick={toggleMenu}>
          <Link href={path} className='menuLink'>{pageName}</Link>
        </div>
      </div>
    );
  };


  useGSAP(() => {
    gsap.set(".menuLinkContainer", {y: 75});
    tl.current = gsap.timeline({paused: true})
    .to(".menuOverlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    })
    .to(".menuLinkContainer", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });

  }, {scope: ref});


  useEffect(() => {
    if (menuIsOpen) {
      tl.current.play();
    } else {
      tl.current.reverse()
    }
  }, [menuIsOpen])

  return (
    <div ref={ref} className='menuRef'>
      <div className="menuBar">
        {/* <div className="menuLogo">
          <Link href="/">HUB</Link>
        </div> */}
        <div className="menuOpen" onClick={toggleMenu}>
          {/* <h3>Menu</h3> */}
          <div className='menuOpenLogo'>
           <Image src={LOGO} alt='logo' className='w-full h-full p-[.25rem]'/>
          </div>
        </div>
        
 
        <div className=''>
          <div className='menuBurger group/burgerLines cursor-pointer w-[9vw] h-[50px] overflow-hidden relative flex flex-row justify-center transform ease-in'>
            <div className='w-[190px] flex flex-row relative justify-around '>          
              <div className='menuBurgerDefault h-[50px] w-[65px] absolute flex justify-evenly flex-col'>
                <div className='menuBurgerLine num1  group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out delay-1000 duration-[850ms] w-[65px]'/>
                <div className='menuBurgerLine num2  group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out delay-1000 duration-[950ms] w-[65px]'/>
                <div className='menuBurgerLine num3  group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out delay-1000 duration-[1050ms] w-[31px]'/>
              </div>
              <div className='menuBurgerActive h-[50px] w-[65px] absolute overflow-hidden  flex justify-evenly flex-col'>
                <div className='menuBurgerLine num4 group-hover/burgerLines:translate-x-[65px] group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[850ms] w-[65px]'/>
                <div className='menuBurgerLine num5 group-hover/burgerLines:translate-x-[65px] group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[950ms] w-[65px]'/>
                <div className='menuBurgerLine num6 group-hover/burgerLines:translate-x-[65px] group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[1050ms] w-[31px]'/>
              </div>
            </div>
          </div>
        </div>
       

      </div>
      <div className="menuOverlay">
        <div className="menuOverlayBar">
          <div className="menuLogo">
            <Link href="/">HUB</Link>
          </div>
          <div className="menuClose" onClick={toggleMenu}>
            <a href="/">Close</a>
          </div>
        </div>
        <div className="menuCloseIcon">
          <p>&#x2715;</p>
        </div>
        <div className="menuCopy">
          <div className="menuLinks">

            {dynamicLinks("/", "Intro")}
            {dynamicLinks("/gallery", "Gallery")}
            {dynamicLinks("/checkout", "Checkout")}
            {dynamicLinks("/contact", "Contact Us")}

          </div>
          <div className="menuInfo">
            <div className="menuInfoCol">
              <span className='flex flex-row items-start'><a href="#">X </a><a href='/'><ArrowUpRight className='h-[1rem]' /></a></span>
              <span className='flex flex-row items-start'><a href="#">Instagram </a><a href='/'><ArrowUpRight className='h-[1rem]' /></a></span>
              <span className='flex flex-row items-start'><a href="#">LinkedIn </a><a href='/'><ArrowUpRight className='h-[1rem]' /></a></span>
              {/* <a href="#">Instagram &#8599;</a> */}
              {/* <a href="#">LinkedIn &#8599;</a> */}
            </div>
            <div className="menuInfoCol">
              <p className=''>
                myemail@gmail.com
              </p>
              <p className=''>
               555-555-5555
              </p>
            </div>
          </div>
        </div>
        <div className="menuPreview">
          <p className=''>
            Showreel
          </p>
        </div>
      </div>
    </div>
  )
};


export default Menu;