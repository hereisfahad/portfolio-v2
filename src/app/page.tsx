"use client";

import Landing from "@/components/landing/landing";
import AboutMe from "@/components/aboutMe/AboutMe";
import Skills from "@/components/skills/skills";
import Employment from "@/components/employment/Employment";
import Portfolio from "@/components/portfolio/portfolio";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import TabBar from "@/components/tabBar/tabBar";
import AccordionOpenContext from "@/context/AccordionContext";

export default function Home() {
  return (
    <main>
      <AccordionOpenContext>
        <Landing />
        <AboutMe />
        <Skills />
        <Employment />
        <Portfolio />
        <Contact />
        <Footer />
        <TabBar />
      </AccordionOpenContext>
    </main>
  );
}
