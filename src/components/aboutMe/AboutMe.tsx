"use client";

import { useRef } from "react";
import Image from "next/image";

import useBlockRef from "@/hooks/useBlockRef";

const AboutMe = () => {
  const blockRef = useRef(null);
  useBlockRef({ key: "aboutMePosition", blockRef });

  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] mx-auto pt-[25px] md:pt-[100px]"
    >
      <div className="w-full">
        <h5 className="text-center text-text_white font-[500]">Get to know</h5>
        <h2 className="text-center mt-3 text-text_blue font-[600] text-[32px]">
          ABOUT ME
        </h2>
      </div>
      <div className="md:flex md:w-full md:mt-[65px] md:flex-row flex flex-col w-full mt-[35px]">
        {/* avatar */}
        <div className="flex relative md:mr-[60px] mt-[16px] md:self-start mx-auto">
          <div className="before:block before:content-[''] before:rounded-full before:ml-[30%] before:w-[15px] before:h-[15px] before:bg-circle_avatar_bg z-80 absolute top-[0px] left-[0px] border-[1px] rounded-[50%] w-full h-full animate-circle_rotation"></div>
          <Image
            className="z-100 p-[1rem] rounded-full"
            alt="Picture of the author"
            src="/assets/avatar/profile.png"
            width={306}
            height={306}
          />
          <div className="z-90 w-full h-full rounded-full bg-circle_avatar_underlay_bg  absolute top-[15%] left-[5%]"></div>
        </div>
        {/* about me */}
        <div className="flex flex-1 flex-col">
          <div className="mt-[60px] sm:mt-[48px]">
            <p className="text-text_gray px-[2rem] sm:px-[0] text-[16px] font-[500] leading-[160%]">
              Hey there! I'm Fahad Jabbar, an enthusiastic full-stack software developer with over three years of hands-on experience. Throughout my journey, I've successfully completed more than 5 diverse projects, showcasing my skills in crafting robust and innovative solutions for various clients and industries. Constantly seeking opportunities to expand my knowledge, I've honed my expertise in software architecture to deliver high-quality, scalable, and efficient solutions. Join me in navigating the ever-evolving tech landscape!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
