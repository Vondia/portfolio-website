import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/NavBar";
import { Heading } from "../components/ui/typograhpy/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pim | Front-End Developer</title>
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
