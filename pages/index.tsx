import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Navbar } from "../components/navbar/NavBar";
import { Skills } from "../components/skills";
import { Heading } from "../components/ui/typograhpy/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pim | Front-End Developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </>
  );
};

// 1:05 minuten --> https://www.youtube.com/watch?v=CMx51wpd7g4&t=362s

export default Home;
