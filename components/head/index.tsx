import React, { FC } from "react";
import Head from "next/head";

export const HeadSeo: FC<{ children?: never }> = () => {
  return (
    <>
      <Head>
        <title>Pim | Front-End Developer</title>
      </Head>
    </>
  );
};
