"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";

import { useWindowDimensions } from "@/hooks/useWindowWidth";
import { AccordionContext } from "@/context/AccordionContext";

const TabBar = () => {
  const { height, width } = useWindowDimensions();
  const [tabBarHeight, setTabBarHeight] = useState(125);
  const [displayBar, setDisplayBar] = useState("flex");
  const [active, setActive] = useState(0);
  const { open } = useContext(AccordionContext);

  //Page elements height
  const [itemsHeight, setItemsHeight] = useState({
    landing: 0,
    aboutMe: 0,
    skills: 0,
    employment: 0,
    portfolio: 0,
    contact: 0,
  });

  const autoTabBarActiveControl = () => {
    const heightoffset = 200;

    if (height >= 0 && height < itemsHeight.aboutMe - heightoffset) {
      setActive(0);
    } else if (
      height >= itemsHeight.aboutMe - heightoffset &&
      height < itemsHeight.skills - heightoffset
    ) {
      setActive(1);
    } else if (
      height >= itemsHeight.skills - heightoffset &&
      height < itemsHeight.employment - heightoffset
    ) {
      setActive(2);
    } else if (
      height >= itemsHeight.employment - heightoffset &&
      height < itemsHeight.portfolio - heightoffset
    ) {
      setActive(3);
    } else if (
      height >= itemsHeight.portfolio - heightoffset &&
      height < itemsHeight.contact - heightoffset
    ) {
      setActive(4);
    } else if (height >= itemsHeight.contact - heightoffset) {
      setActive(5);
    } else {
      setActive(0);
    }
  };

  const setItemsHeightHandler = () => {
    const landingH = localStorage?.getItem("landingPosition") || 0;
    const aboutMeH = localStorage?.getItem("aboutMePosition") || 0;
    const skillsH = localStorage?.getItem("skillsPosition") || 0;
    const employmentH = localStorage?.getItem("employmentPosition") || 0;
    const portfolioH = localStorage?.getItem("portfolioPosition") || 0;
    const contactH = localStorage?.getItem("contactPosition") || 0;

    setItemsHeight({
      landing: Number(landingH),
      aboutMe: Number(aboutMeH),
      skills: Number(skillsH),
      employment: Number(employmentH),
      portfolio: Number(portfolioH),
      contact: Number(contactH),
    });
  };

  useEffect(() => {
    const footerH: number =
      Number(localStorage?.getItem("footerPosition")) || 0;
    if (height > 200 && tabBarHeight > 35) {
      setTabBarHeight(35);
    }
    if (height < 200 && tabBarHeight < 125) {
      if (width < 768) {
        setTabBarHeight(35);
        return;
      }
      setTabBarHeight(125);
    }
    if (width < 768 && tabBarHeight === 125) {
      setTabBarHeight(35);
    }
    if (height > Number(footerH - 350)) {
      setDisplayBar("none");
    } else {
      setDisplayBar("flex");
    }
  }, [height, width]);

  useEffect(() => {
    setItemsHeightHandler();
  }, [open]);

  useEffect(() => {
    //Contact is always at the bottom; this is to make sure values are set
    if (itemsHeight.contact) {
      autoTabBarActiveControl();
    }
  }, [height]);

  const icons = [
    {
      alt: "landing",
      src: "/assets/tabbar/home.svg",
    },
    {
      alt: "aboutMe",
      src: "/assets/tabbar/profile.svg",
    },
    {
      alt: "skills",
      src: "/assets/tabbar/react.svg",
    },
    {
      alt: "employment",
      src: "/assets/tabbar/portfolio.svg",
    },
    {
      alt: "portfolio",
      src: "/assets/tabbar/computer.svg",
    },
    {
      alt: "contact",
      src: "/assets/tabbar/contact.svg",
    },
  ];

  return (
    <div
      style={{
        display: displayBar,
        bottom: `${tabBarHeight}px`,
        transition: "bottom 0.5s ease",
      }}
      className={`content-center items-center z-[101] fixed backdrop-blur left-[calc(50%-175px)] w-[350px] h-[70px] rounded-[35px] bg-tabbar_bg`}
    >
      <div className="flex flex-1 gap-[25px] justify-center">
        {icons.map((icon, index) => {
          return (
            <div
              onClick={() => {
                scrollTo({
                  top: Number(
                    itemsHeight[icon.alt as keyof typeof itemsHeight]
                  ),
                  behavior: "smooth",
                });
              }}
              className="relative cursor-pointer"
              key={icon.alt}
            >
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
              <div
                className={`${active === index
                  ? "bg-tabbar_active_bg rounded-[50%] w-[48px] h-[48px] absolute top-[-10px] left-[-12px] z-[-1]"
                  : ""
                  }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
