"use client";

import { useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";

const Footer = () => {
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "footerPosition", blockRef, open });

  const socialMenu = [
    {
      name: "LinkedIn",
      iconUrl: "/assets/svg/linked.svg",
      link: "https://www.linkedin.com/in/mrfahadjabbar/",
      alt: "Linkedin icon",
    },
    {
      name: "Github",
      iconUrl: "/assets/svg/github.svg",
      link: "https://github.com/Soroand/hereisfahad",
      alt: "Github icon",
    },
    {
      name: "Upwork",
      iconUrl: "/assets/svg/upwork.svg",
      link: "https://www.upwork.com/freelancers/~01c273f857bf8bb29d",
      alt: "Upwork icon",
    },
    {
      name: "X",
      iconUrl: "/assets/svg/x.svg",
      link: "https://twitter.com/hereisfahad",
      alt: "X icon",
    },
  ];

  return (
    <div
      ref={blockRef}
      className="text-text_white mt-2"
    >
      <div className="flex flex-col max-w-[1000px] pb-[60px] md:pb-[120px] items-center text-center mx-auto text-text_white">
        {/* social icons blocks */}
        <div className="flex gap-[2rem] mt-[65px]">
          {socialMenu.map(item => {
            return (
              <div
                key={item.name}
                className="flex p-[14px] items-center justify-center rounded-[10px]"
              >
                <Link target="_blank" href={item.link}>
                  <Image
                    className="animate-glow rounded-sm hover:cursor-pointer"
                    alt={item.alt}
                    src={item.iconUrl}
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <span className="block mt-[60px]">
          {/* copyright symbol */}
          &copy; {new Date().getFullYear()} Fahad Jabbar. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
