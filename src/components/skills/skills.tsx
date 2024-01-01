"use client";

import { useRef } from "react";
import Image from "next/image";

import useBlockRef from "@/hooks/useBlockRef";

const Skills = () => {
  const blockRef = useRef(null);
  useBlockRef({ key: "skillsPosition", blockRef });

  const skills = {
    frontend: [
      {
        name: "HTML",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "CSS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "TAILWIND",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "SASS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "ReactJS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "NextJS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "Redux / Toolkit",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
    ],
    backend: [
      {
        name: "NodeJS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "MongoDB",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "AWS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "Firebase",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "ExpressJS",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "GraphQL",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
      {
        name: "REST API",
        icon: "./assets/svg/Checkmark_skills.svg",
      },
    ],
  };

  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] text-center mt-[80px] md:mt-[160px] mx-auto text-text_white"
    >
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        My Skillset
      </h2>
      <div className="flex gap-[38px] mt-[65px] max-[768px]:flex-col mx-[10px] items-center">
        <div className="flex w-full max-w-[500px] bg-card-border p-[1px] rounded-[18px] min-h-[291px] mx-[20px] md:mx-0 md:max-w-[50%]">
          <div className="flex flex-col bg-about_card_bg rounded-[18px] p-[50px] w-full h-full">
            <h2 className="text-[24px] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC]">
              Frontend Development
            </h2>
            <div className="grid grid-cols-2 gap-[20px] mt-[27px] mx-auto">
              {skills.frontend.map((skill) => {
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-[13px]"
                  >
                    <Image
                      alt="checkmark icon"
                      src={skill.icon}
                      width={24}
                      height={24}
                    />
                    <span className="text-left text-[20px] font-[500] whitespace-wrap md:whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[500px] bg-card-border p-[1px] rounded-[18px] min-h-[291px] mx-[20px] md:mx-0 md:max-w-[50%]">
          <div className="flex flex-col bg-about_card_bg rounded-[18px] p-[50px] w-full h-full">
            <h2 className="text-[24px] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] ">
              Backend Development
            </h2>
            <div className="grid grid-cols-2 gap-[20px] mt-[27px] mx-auto">
              {skills.backend.map((skill) => {
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-[13px]"
                  >
                    <Image
                      alt="checkmark icon"
                      src={skill.icon}
                      width={24}
                      height={24}
                    />
                    <span className="text-left text-[20px] font-[500] whitespace-wrap md:whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
