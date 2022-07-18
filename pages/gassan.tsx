import React, { FC } from "react";
import { css } from "linaria";
import { rgba } from "polished";
import { parse, theme } from "../config/theme";
import type { NextPage } from "next";
import Image from "next/image";
import { Heading } from "../components/ui/typograhpy/Heading";
import { Text } from "../components/ui/typograhpy/Text";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Gassan: NextPage = () => {
  return (
    <div className={container}>
      <div className={parent}>
        <div className={overlay} />
        <Image
          className={image}
          src="/../public/assets/projects/gassan.nl.png"
          alt="image of gassan homepage"
          layout="fill"
          objectFit="cover"
        />
        <div className={absoluteText}>
          <Heading variant="h4" color="white">
            Gassan
          </Heading>
          <Heading variant="h5" color="white">
            Next Js / styled components
          </Heading>
        </div>
      </div>

      <div className={mainTextContainer}>
        <div className={colSpan}>
          <Text variant="large" color="purple" className={subTitle}>
            Project
          </Text>
          <Heading variant="h3" mb="16">
            Gassan
          </Heading>
          <Text variant="regular">
            Gassan is a project I worked on while working for Reversed Digital.
            The website was build using React/NextJs and for me was my first
            encounter with{" "}
            <a href="https://styled-components.com/">styled components</a>. I
            had never worked with it before and it&apos;s a real different way
            of styling. The awesome thing about it from my point of view is
            being able to add props to styled components. The reason why i
            prefer linaria/CSS is that you can achieve the stuff you want to do
            with props as well with data attributes. But it&apos;s a lot
            cleaner. I learned a lot working on this project adding new
            components and fixing issues.
          </Text>
          <button className={button}>Code example</button>
        </div>
        <div className={technologiesContainer}>
          <div className={padding}>
            <Text
              variant="regular"
              fontWeight="bold"
              className={technologiesText}
            >
              Technologies
            </Text>
            <div className={list}>
              <Text
                variant="regular"
                color="shade600"
                className={technologiesListItems}
              >
                <RiRadioButtonFill className={listItemIcon} /> NextJs
              </Text>
              <Text
                variant="regular"
                color="shade600"
                className={technologiesListItems}
              >
                <RiRadioButtonFill className={listItemIcon} /> Styled components
              </Text>
              <Text
                variant="regular"
                color="shade600"
                className={technologiesListItems}
              >
                <RiRadioButtonFill className={listItemIcon} /> Typescript
              </Text>
              <Text
                variant="regular"
                color="shade600"
                className={technologiesListItems}
              >
                <RiRadioButtonFill className={listItemIcon} /> Kentico Kontent
              </Text>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <Text variant="regular" className={link}>
            <a>Back</a>{" "}
          </Text>
        </Link>
      </div>
    </div>
  );
};

const container = parse({ width: "100%" });

const parent = parse(
  {
    position: "relative",
  },
  css`
    width: 100vw;
    height: 30vh;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 39vh;
    }
  `
);

const subTitle = parse(
  {
    py: "16",
  },
  css`
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `
);

const overlay = parse(
  {
    position: "absolute",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    height: 30vh;
    z-index: 2;
    background: ${rgba(theme.colors.background, 0.7)};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 39vh;
    }
  `
);

const image = parse(
  {
    position: "absolute",
  },
  css`
    z-index: 1;
  `
);

const absoluteText = parse(
  {
    position: "absolute",
    width: "100%",
    p: "8",
  },
  css`
    top: 80%;
    z-index: 3;
    max-width: 1240px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%) !important;
    transform: translateY(-50%);
  `
);

const mainTextContainer = parse(
  {
    mx: "auto",
    pt: "32",
    px: "8",
    pb: "8",
    mb: "16",
    display: "grid",
  },
  css`
    max-width: 1240px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  `
);

const colSpan = css`
  grid-column: span 4 / span 4;
`;

const button = parse(
  {
    px: "32",
    py: "8",
    mt: "16",
  },
  css`
    background: ${theme.gradients.default};
    border-radius: 0.75rem;
    color: ${theme.colors.white};
    font-weight: 700;
  `
);

const technologiesContainer = css`
  padding: 1rem;
  grid-column: span 5 / span 5;
  box-shadow: 0 10px 15px -3px rgb(66 69 74 / 0.1),
    0 4px 6px -4px rgb(66 69 74 / 0.1);
  border-radius: 0.75rem;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    grid-column: span 1 / span 1;
    white-space: nowrap;
  }
`;

const padding = parse({
  p: "8",
});

const technologiesText = parse({
  pb: "8",
  textAlign: "center",
});

const technologiesListItems = parse({
  py: "8",
  display: "flex",
  alignItems: "center",
});

const listItemIcon = parse({
  mr: "4",
});

const list = parse(
  {
    display: "grid",
  },
  css`
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr;
    }
  `
);

const link = parse(
  { p: "8" },
  css`
    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${theme.colors.shade600};
        text-decoration: underline;
      }
    }
  `
);

export default Gassan;
