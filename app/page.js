import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";

import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  // const blogs = await getData();
  const blogs = [
    {
      cover_image:'/readme/11.png',
      title:'Scriber',
      description:'Skills: React, Next.js, Typescript, GraphQL, Webiny',
      url:'https://tellimer.com/'
    },
    {
      cover_image:'/readme/22.png',
      title:'Anatha',
      description:'Skills: React, Redux, Eletron, Typescript, Integrating Anatha blockchain into frontend',
      url:'https://anatha.io/'
    },
    {
      cover_image:'/readme/44.png',
      title:'NextThink',
      description:'Skills: Angular, Java , Spring Boot',
      url:'https://nexthink.com/'
    }
  ]
  return (
    <>
      <HeroSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />

      <ContactSection />
    </>
  )
};