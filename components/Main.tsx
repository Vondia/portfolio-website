import React, { FC } from "react";
import { css } from "linaria";
import { parse, theme } from "../config/theme";
import { rem } from "polished";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

type MainProps = {};

export const Main: FC<MainProps> = () => {
  return (
    <div id="home" className={parent}>
      <div className={container}>
        <div>
          <Text className={topText} variant="regular" color="shade600">
            Let&apos;s build something together
          </Text>
          <Heading variant="h1" color="shade700" className={headingText}>
            Hi, I&apos;m{" "}
            <Heading variant="h1" as="span" color="purple">
              {" "}
              Pim{" "}
            </Heading>
          </Heading>
          <Heading
            variant="h1"
            color="shade700"
            className={headingTextsecondLine}
          >
            A Front-end Web Developer
          </Heading>
          <Text className={bottomText} variant="large" color="shade600">
            I&apos;m a front-end web developer who loves bringing beautiful
            designs to life. Currently I&apos;m focused on building responsive
            front-end web applications while continueing to improve my skills.
          </Text>
          <div className={buttonContainer}>
            <div className={button}>
              <FaLinkedinIn />
            </div>
            <div className={button}>
              <FaGithub />
            </div>
            <div className={button}>
              <AiOutlineMail />
            </div>
            <div className={button}>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const parent = parse(
  {
    width: "100%",
  },
  css`
    height: 100vh;
    text-align: center;
  `
);

const container = parse(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    mx: "auto",
    p: "8",
  },
  css`
    width: calc(100% - 2rem);
    max-width: ${rem(540)};

    @media screen and (min-width: ${theme.breakpoints.small}) {
      width: calc(100% - 3rem);
      max-width: ${rem(720)};
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      max-width: ${rem(980)};
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      max-width: ${rem(1400)};
    }
  `
);

const topText = css`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const headingText = parse(
  {
    py: "16",
  },
  css``
);

const headingTextsecondLine = parse(
  {
    py: "8",
  },
  css``
);

const bottomText = parse(
  {
    py: "16",
    m: "auto",
  },
  css`
    max-width: 75%;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      max-width: 50%;
    }
  `
);

const buttonContainer = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    m: "auto",
    py: "16",
  },
  css`
    max-width: 330px;
  `
);

const button = parse(
  {
    p: "24",
    color: "purple",
  },
  css`
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  `
);
