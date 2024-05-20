"use client";

import Animate from '@/components/Animate';
import Image from 'next/image';

import styled from 'styled-components';

// import { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';

const ShimmeringH1 = styled.h1`
background-image: linear-gradient(90deg, #8C8796 0%, white 40%, #8C8796 60%);
  -webkit-background-clip: text;
  background-clip: text;
  max-width: 1000px;
  color: transparent;
  animation: shineTitle 3s linear infinite;
  @keyframes shineTitle {
      0% {
          background-position: 0px;
      }
      100% {
          background-position: 1000px;
      }
  }
`

export default function Home() {
  return (
    <Animate>
      <header className="overflow-hidden relative p-8 w-screen h-screen justify-center max-w-screen-xl flex flex-col items-center">
        <Animate.Element 
          className='absolute w-full h-full top-0 left-0'
          onActivatedClasses='scale-[2] duration-[1s] delay-500'
          onDeactivatedClasses='scale-[0.75]'
        >
          <Image 
            className='pointer-events-none'
            layout='fill'
            objectFit="contain"
            src="/macbook-air.png"
            alt="Macbook"
          />
        </Animate.Element>
        <Animate.Element
          className='z-30' 
          onActivatedClasses='scale-1 duration-500 delay-500'
          onDeactivatedClasses='scale-[0.5]'
        >
        <Animate.Element 
          onDeactivatedClasses='opacity-0'
          onActivatedClasses='opacity-100 transition-opacity duration-500'
        >
          <Image 
              width={150}
              height={150}
              alt="CSA Logo"
              src="/logo.png"
          />
        </Animate.Element>
        <Animate.Element
          onDeactivatedClasses='opacity-0'
          onActivatedClasses='opacity-100 transition-opacity duration-500'
        >
          <ShimmeringH1 
            style={{
              lineHeight: "1.3",
              letterSpacing: "-12px",
            }}
            className="text-9xl text-white">
            Computer Science<br/>Academy
          </ShimmeringH1>
        </Animate.Element>
        <Animate.Element
          onDeactivatedClasses='opacity-0'
          onActivatedClasses='opacity-100 transition-opacity duration-500 delay-300'
        >
          <h2 
            style={{
              letterSpacing: "-2px"
            }}
            className="text-3xl mt-10 text-[rgba(255,255,255,0.75)]"
          >
            A South Brunswick High School <span className="text-white">Career Academy</span> experience directed by <span className="text-white">Steven Schiff</span>.
          </h2>
        </Animate.Element>
        </Animate.Element>
        <div className="mt-10 flex space-x-3 justify-center">
        {/* <Animate.Element
            onDeactivatedClasses="-translate-x-[100px]"
            onActivatedClasses="translate-x-0"
            className="transition-all duration-700"
          >
            <Image 
              className="rounded-[45px] border-solid border-[12px] border-[rgba(255,255,255,0.1)]"
              src="/projects/weather-1.png"
              width={275}
              height={550}
              alt="Weather 1"
            />  
          </Animate.Element>
          <Animate.Element
            onDeactivatedClasses="-translate-x-[100px]"
            onActivatedClasses="translate-x-0"
            className="transition-all duration-500"
          >
            <Image 
              className="rounded-[45px] border-solid border-[12px] border-[rgba(255,255,255,0.1)]"
              src="/projects/weather-0.png"
              width={275}
              height={550}
              alt="Weather 0"
            />  
          </Animate.Element>
          <div className="flex flex-col space-y-[20px]">
            <Animate.Element
              onDeactivatedClasses="translate-y-[100px]"
              onActivatedClasses="translate-y-0"
              className="transition-all duration-500"
            >
              <Image 
                className="rounded-[45px] border-solid border-[12px] border-[rgba(255,255,255,0.1)]"
                src="/projects/keyboard.png"
                width={500}
                height={250}
                alt="Keyboard"
              />  
            </Animate.Element>
            <Animate.Element
              onDeactivatedClasses="translate-y-[100px]"
              onActivatedClasses="translate-y-0"
              className="transition-all duration-500"
              resetAfterTriggered={false}
            >
              <Image 
                className="rounded-[45px] border-solid border-[12px] border-[rgba(255,255,255,0.1)]"
                src="/projects/keyboard.png"
                width={500}
                height={250}
                alt="Keyboard"
              />  
            </Animate.Element>
          </div>
          <Animate.Element
            onDeactivatedClasses="translate-x-[100px]"
            onActivatedClasses="translate-x-0"
            className="transition-all duration-700"
          >
            <Image 
              className="rounded-[45px] border-solid border-[12px] border-[rgba(255,255,255,0.1)]"
              src="/projects/notflix.png"
              width={275}
              height={550}
              alt="Notflix"
            />  
          </Animate.Element> */}
        </div>
      </header>
      <section>
        
      </section>
    </Animate>
  );

}