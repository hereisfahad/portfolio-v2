"use client";

import { useContext, useRef } from "react";

import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";

const Portfolio = () => {
  //Block position
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "portfolioPosition", blockRef, open });

  const portfolio = [
    {
      id: 1,
      company: "Company Formation",
      description:
        `Developed a custom solution for the company formation process using the MERN stack, where
        Tailwind CSS and Headless UI were utilized to implement reusable components. Additionally,
        implemented a REST API using Express and MongoDB. The project involved creating distinct
        workflows for onboarding company officials through the implementation of multi-step form
        wizards.`,
      btnText: "Live Demo",
    },
    {
      id: 2,
      company: "TechNinjaPro",
      description:
        `Developed the blog site with Next.js and generated static pages on runtime using incremental
        static generation (ISR) a Next.js feature. It helped achieve faster builds and higher cache hit
        rate. Wordpress is used as CMS, GraphQL for data fetching, and Tailwind CSS for styling.`,
      btnText: "Live Demo",
    },
    {
      id: 3,
      company: "Quotes System",
      description:
        `Built a single-page application(SPA) which gets quotation from vendors for projects. User can
        add new projects and request quotation from vendors. User can approve quotation from the
        vendors and the project will be assigned to that particular vendor.`,
      btnText: "Live Demo",
    },
    {
      id: 4,
      company: "Auto Invoice Checker",
      description:
        `Developed a SPA which checks invoices against agreed prices and let the supplier know about overcharged items via email using SendGrid.`,
      btnText: "Live Demo",
    },
    {
      id: 5,
      company: "Electronics Marketplace",
      description:
        `Built a marketplace which enables the vendors to register themselves and sell their electronic
        items online. Translated the static pages to fully functional React components and integrated
        the APIs.`,
      btnText: "Live Demo",
    },
  ];

  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] items-center text-center mt-[80px] md:mt-[160px] mx-auto text-text_white"
    >
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        Portfolio
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-[29px] mt-[65px]">
        {portfolio.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-[322px] max-h-[497px] p-[1px] bg-card-border rounded-[18px] overflow-hidden"
            >
              <div className="text-left pl-[37px] pb-[37px] pr-[45px] bg-about_card_bg rounded-[18px] h-full">
                <div className="flex justify-between mt-[10px] items-center">
                  <span className="font-[600] mt-4 text-[20px] bg-clip-text text-transparent bg-portfolio_text">
                    {item.company}
                  </span>
                </div>
                <p className="text-[16px] mt-[18px] font-[400] text-text_intermidiate_gray">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
