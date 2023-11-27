// "use client";

import clsx from 'clsx'
import Image from 'next/image'
import Rectangles from "../public/rectangles.svg";
import Link from 'next/link';
import Button from '@/components/Button';
// import { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';

export default function Home() {
  // useEffect(() => {
  //   Scrollbar.init(document.querySelector("#main")!, { damping: 0.1 });

  //   return () => {
  //     if (Scrollbar) Scrollbar.destroy(document.querySelector("#main")!);
  //   };
  // }, []);

  return (  
    <main id="main" className="flex flex-col items-center">
      <section className={clsx(
        "flex relative justify-center items-center w-full overflow-x-hidden",
        "h-[100vw] md:h-[130vh] min-h-[650px] md:min-h-[1000px]"
      )}>
        <div className="absolute right-0 bottom-[50px] md:bottom-0 md:w-1/3 w-2/3 h-[45vw]">
          <Image
            layout="fill"
            src="/vr.png"
            alt="VR Headset"
            className="object-contain"
          />
        </div>
        <div className="absolute right-[-10vw] md:right-0 top-[100px] md:top-0 w-1/2 h-[45vw] md:w-1/4 md:h-[35vw]">
          <Image
            layout="fill"
            src="/phone.png"
            alt="Phone"
            className="object-contain"
          />
        </div>
        <div className="absolute left-[-17vw] md:left-0 top-[100px] md:top-0 w-2/3 md:w-1/3 h-[40vw]">
          <Image
            layout="fill"
            src="/chromebook.png"
            alt="Chromebook"
            className="object-contain"
          />
        </div>
        <div className="z-10 text-center text-6xl sm:text-8xl font-bold uppercase space-y-2">
          <h1>Computer</h1>
          <h1>Science</h1>
          <h1>Academy</h1>
        </div>
      </section>
      <div className='p-3 pb-0'>
      <div className="bg-[#3A3939] px-[25px] md:px-[75px] py-[75px] rounded-t-2xl max-w-screen-2xl">
        <section id="about" className="relative">
          <Image
            src="/about.png"
            width={140}
            height={140}
            alt="About"
            className="absolute left-1/2 md:left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="bg-[#323131] rounded-2xl p-[25px] pt-[85px] md:p-[50px] border-[#272727] border-solid border-2">
            <p className="text-[#FDF5CD] text-center font-semibold text-2xl">
              The Computer Science Academy Program of Study allows students to learn a variety of aspects of computer science, including programming, networks, graphics, databases, cyber security, artificial intelligence, and other applications in information technology.
            </p>
          </div>
        </section>
        <section id="apply" className="mt-16 flex md:flex-row flex-col justify-around items-center">
          <Image
            src="/apply.png"
            width={300}
            height={300}
            alt="Apply"
          />
          <div className="flex flex-col items-center">
            <p className="text-center max-w-[500px] text-2xl font-semibold">
              Ready for Your Next Step? Sophomores at SBHS, your journey begins here. Explore our application details and join our thriving community.
            </p>
            <a 
              href="/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button>
                Application
              </Button>
            </a>
          </div>
        </section>
        <section id="pictures" className="flex md:flex-row flex-col items-center justify-around mt-16 w-full relative h-[700px]">
          <Image
            layout="fill"
            alt="Rectangles"
            src={Rectangles}
          />
          <p 
            style={{ textShadow: "0px 2px 2px #000000" }}
            className="z-10 max-w-[500px] text-3xl lg:text-4xl font-semibold text-[#E8B774] text-center">
              Capture the Moment: See where our curiosity takes us! Our gallery features snapshots from our latest excursions and events. Discover the world through our lens.
          </p>
          <div className="z-10 flex flex-col items-center ml-6">
            <Link href={"/"}>
              <h1 
                style={{ textShadow: "0px 2px 2px #000000" }}
                className="text-[#E8B774] font-semibold text-2xl text-center">
                  See Photos
              </h1>
            </Link>
            <Image
              className="mt-5"
              width={350}
              height={350}
              src="/camera.png"
              alt="Camera"
            />
          </div>
        </section>
        <section id="apply" className="mt-16 flex md:flex-row flex-col space-y-6 justify-around items-center">
          <Image
            src="/workspace.png"
            width={300}
            height={300}
            alt="Workspace"
          />
          <div className="flex flex-col items-center">
            <p 
              style={{ textShadow: "0px 2px 2px #000000" }}
              className="text-center text-[#D6A756] max-w-[500px] text-3xl font-semibold">
              Discover Our Space: Dive into the heart of our academy! Check out our amazing classrooms and the state-of-the-art resources that fuel our learning journey.
            </p>
            <a 
              href="/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button highlightColor="#D6A756">
                Workspace
              </Button>
            </a>
          </div>
        </section>
      </div>
      </div>
    </main>
  )
}
