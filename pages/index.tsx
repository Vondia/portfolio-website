import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pim | Front-End Developer</title>
      </Head>
      <Main />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Home;
