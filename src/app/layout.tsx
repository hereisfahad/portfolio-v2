import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahad Jabbar | Fullstack Developer",
  description:
    "Step into Fahad Jabbar's Full-Stack Development Hub, where we create cutting-edge web solutions for the digital era.",
  keywords:
    "Full-Stack Developer, Fahad Jabbar, Web Development, Front-End Development, Back-End Development, Fahad Jabbar, react, react js, next js, nextjs, mongodb, firebase, aws, amazon, portfolio, web developer, web development, software engineer, software development, software developer, fullstack developer, fullstack development, full-stack developer, full-stack development, full stack developer, full stack development, fullstack, full-stack, full stack, developer, development, engineer, engineering, programmer, programming, coding, code, javascript,",
  openGraph: {
    title: "Fahad Jabbar | Fullstack Developer",
    description:
      "Step into Fahad Jabbar's Full-Stack Development Hub, where we create cutting-edge web solutions for the digital era.",
    url: "https://www.fahajabbar.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fahajabbar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
