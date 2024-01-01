"use client";

import { useRef, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";
import { convertHtmlToReact } from "@hedgedoc/html-to-react";
import { employment } from "@/components/employment/MockData";

const Employment = () => {
  const { open, setOpen } = useContext(AccordionContext);

  const blockRef = useRef(null);
  const dropdownHeight = useRef(null);

  useBlockRef({ key: "employmentPosition", blockRef });
  useEffect(() => {
    localStorage?.setItem("accordionState", String(open));

    //Setting the height of the accordion block
    //To later subtract it from the scroll position if block is closed
    if (open > 0) {
      localStorage?.setItem(
        "employmentDropdownHeight",
        String((dropdownHeight as any)?.current?.offsetHeight)
      );
    }
  }, [open]);

  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] items-center text-center mt-[100px] md:mt-[160px] mx-auto text-text_white"
    >
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        professional experience
      </h2>
      <div className="flex w-full flex-col mt-[65px] max-w-[875px] px-[10px] md:px-[0px]">
        {employment.map(item => {
          return (
            <div key={item.id}>
              <div className="bg-card-border p-[0.5px] rounded-[18px] mb-[20px]">
                <div className="flex flex-col md:flex-row px-[50px] py-[35px] bg-about_card_bg rounded-[18px] justify-between">
                  <div className="flex justify-center items-center gap-6 text-left">
                    <span className="text-[18px] font-[600]">{item.name}</span>
                    <span className="text-[18px] font-[600] text-right md:text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB]">
                      @{item.company}
                    </span>
                  </div>
                  <div className="flex justify-between mt-[1rem] md:justify-center items-center gap-12 text-left">
                    <span className="text-[18px] font-[700]">{item.date}</span>
                    {open !== item.id ? (
                      <Image
                        onClick={() => setOpen(item.id)}
                        className="cursor-pointer"
                        alt="open icon"
                        src={"/assets/svg/Open_icon_employment.svg"}
                        width={32}
                        height={32}
                      />
                    ) : (
                      <Image
                        onClick={() => setOpen(0)}
                        className="cursor-pointer"
                        alt="close icon"
                        src={"/assets/svg/Close_icon_employment.svg"}
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                </div>
              </div>
              {open === item.id && (
                <div
                  ref={dropdownHeight}
                  className="bg-card-border p-[0.5px] rounded-[18px] mb-[85px]"
                >
                  <div className="bg-employment_card_bg py-[36px] px-[45px] rounded-[18px]">
                    <div className="flex gap-6 flex-col md:flex-row">
                      <div className="flex items-center gap-[6px]">
                        <Image
                          alt="location icon"
                          src={"/assets/svg/Location_employment.svg"}
                          width={30}
                          height={30}
                        />
                        <span className="text-[18px] font-[600] text-text_light_gray">
                          {item.place}
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <Image
                          alt="link icon"
                          src={"/assets/svg/Arrow_link_employment.svg"}
                          width={30}
                          height={30}
                        />
                        <Link
                          target="_blank"
                          href={item.link}
                          className="text-[18px] font-[600] text-text_light_gray text-left"
                        >
                          {/* {item.link} */}
                          {item.link.length > 22
                            ? item.link.substring(0, 20) + "..."
                            : item.link}
                        </Link>
                      </div>
                    </div>
                    <span className="block mt-8 text-[16px] text-left font-[500] text-gray-200">
                      {convertHtmlToReact(item.description)}
                    </span>
                    <div className="flex flex-wrap gap-3 mt-10">
                      {item.skills.map((skill, index) => {
                        return (
                          <div
                            key={skill}
                            className="bg-skill_blob rounded-[16px] py-[5px] px-[23px]"
                          >
                            <span className="text-[15px] font-[500] text-text_deep_blue">
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employment;
