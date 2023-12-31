"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "../reusable/button";
import ScrollDown from "../../../public/assets/svg/ScrollDownArrow";
import LinkedIn from "../../../public/assets/svg/LinkedIn";
import Github from "../../../public/assets/svg/Github";
import useBlockRef from "@/hooks/useBlockRef";

const HomePage = () => {
  const [width, setWidth] = useState(0);

  //Block position
  const blockRef = useRef(null);
  useBlockRef({ key: "landingPosition", blockRef });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  const scrollToContact = () => {
    const contact = localStorage?.getItem("contactPosition") || 0;
    window.scrollTo({ top: contact as number, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-1 relative w-full h-screen overflow-hidden flex-col">
        <div className="h-screen w-[100%] flex flex-col justify-center flex-1 max-w-[1000px] self-center mx-auto items-center text-center text-text_white z-100 relative">
          <div className="absolute top-[30%] left-0 flex flex-col gap-5 ml-5">
            <Link
              href="https://www.linkedin.com/in/mrfahadjabbar/"
              target="_blank"
            >
              <LinkedIn className="animate-glow rounded-sm hover:cursor-pointer" />
            </Link>
            <Link href="https://github.com/hereisfahad" target="_blank">
              <Github className="animate-glow rounded-sm hover:cursor-pointer" />
            </Link>
            <Link href="https://www.upwork.com/freelancers/~01c273f857bf8bb29d" className="animate-glow rounded-sm hover:cursor-pointer" target="_blank">
              <Image
                alt="Upwork icon"
                src={"./assets/svg/upwork.svg"}
                width={24}
                height={24}
              />
            </Link>
          </div>

          <h3 className="text-[20px] mb-3">Hey, I'm</h3>
          <h1 className="text-[36px] font-semibold mb-[25px]">
            Fahad Jabbar
          </h1>
          <h3 className="text-5 font-semibold text-text_blue">
            Fullstack Developer
          </h3>
          <div className="flex gap-[35px] justify-evenly">
            <Link
              href={"/fahad_jabbar_cv.pdf"}
              download={"/fahad_jabbar_cv.pdf"}
              target="_blank"
            // rel="noopener noreferrer"
            >
              <CustomButton variant="hollow">Download CV</CustomButton>
            </Link>
            <CustomButton
              onClick={() => scrollToContact()}
              styles={"mt-[82px]"}
              variant="primary"
            >
              Let's talk
            </CustomButton>
          </div>
          {width > 768 ? (
            <ScrollDown className="absolute bottom-5 hover: cursor-pointer animate-bounce" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
