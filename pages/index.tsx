import type { NextPage } from "next";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { HeadSeo } from "../components/head";
import { Main } from "../components/Main";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";

const Home: NextPage = () => {
  return (
    <>
      <HeadSeo />
      <Main />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Home;
