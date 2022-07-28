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
import { Container } from "../components/ui/Container";

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
      </div>
      <Container className={mainTextContainer}>
        <div>
          <Heading variant="h3" mb="16">
            Gassan
          </Heading>
          <Text variant="large">
            Gassan is a project I worked on while working for Reversed Digital.
            The website was build using React/NextJs and for me was my first
            encounter with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://styled-components.com/"
            >
              styled components
            </a>
            . I had never worked with it before and it&apos;s a real different
            way of styling. The awesome thing about it from my point of view is
            being able to add props to styled components. The reason why i
            prefer linaria/CSS is that you can achieve the stuff you want to do
            with props as well with data attributes. But it&apos;s a lot
            cleaner. I learned a lot working on this project adding new
            components and fixing issues.
          </Text>
        </div>
        <div className={technologiesContainer}>
          <div className={padding}>
            <Text
              variant="large"
              fontWeight="bold"
              className={technologiesText}
            >
              Technologies
            </Text>
            <ul className={list}>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    NextJs
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://styled-components.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Styled components
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Typescript
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://kontent.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Kentico Kontent
                  </a>
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Container>
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
      height: 50vh;
    }
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
      height: 50vh;
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

const mainTextContainer = parse(
  {
    mx: "auto",
    pt: "32",
    mb: "16",
    display: "grid",
    alignItems: "center",
  },
  css`
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: 2fr 1fr;
    }
  `
);

const technologiesContainer = css`
  min-width: 16rem;
  width: fit-content;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.75rem;
  white-space: nowrap;
  justify-self: center;
`;

const padding = parse({
  p: "16",
});

const technologiesText = parse({
  pb: "8",
  textAlign: "center",
});

const technologiesListItems = parse(
  {
    ml: "4",
    position: "relative",
  },
  css`
    background-image: linear-gradient(
      to right,
      #6a47ff,
      #82a1f6 50%,
      #454a54 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;

    &:before {
      content: "";
      background-image: linear-gradient(to right, #6a47ff, #82a1f6);
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.2s ease-in-out;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        background-position: 0;
        &:before {
          width: 100%;
        }
      }
    }
  `
);

const listItemPadding = parse({
  py: "8",
});

const alignList = parse({
  display: "flex",
  alignItems: "center",
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

export default Gassan;
