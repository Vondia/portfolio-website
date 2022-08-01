import React, { FC } from "react";
import { Heading } from "../ui/typograhpy/Heading";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { itemInfo } from "../../lib/itemInfo";
import { SkillsItem } from "./item";
import { useInView } from "react-intersection-observer";
import { Container } from "../ui/Container";

export const Skills: FC = () => {
  const [viewRef, inView] = useInView({ triggerOnce: true });
  return (
    <Container
      id="skills"
      className={container}
      data-in-view={inView ? "" : null}
    >
      <div className={parent} ref={viewRef}>
        <Heading
          variant="h2"
          className={header}
          data-in-view={inView ? "" : null}
        >
          <span data-in-view={inView ? "" : null} className={span}>
            What
          </span>{" "}
          <span data-in-view={inView ? "" : null} className={span}>
            technologies
          </span>{" "}
          <span data-in-view={inView ? "" : null} className={span}>
            I&apos;ve
          </span>{" "}
          <span data-in-view={inView ? "" : null} className={span}>
            used.
          </span>
        </Heading>
        <div className={grid} data-in-view={inView ? "" : null}>
          {itemInfo.map((item, index) => (
            <SkillsItem
              key={index}
              imageSrc={item.imageSrc}
              headingText={item.headingText}
              mainText={item.mainText}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const container = parse(
  {
    width: "100%",
    pb: "64",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
    }
  `
);

const parent = parse(
  {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    mx: "auto",
  },
  css`
    flex-direction: column;
    max-width: 1240px;

    &[data-in-view] {
      transform: scale(0.94);
      animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
      opacity: 1;

      @keyframes scale {
        100% {
          transform: scale(1);
        }
      }
    }
  `
);

const grid = parse(
  {
    display: "grid",
  },
  css`
    grid-gap: 2rem;
    opacity: 0;
    &[data-in-view] {
      transform: scale(0.94);
      animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
      opacity: 1;

      @keyframes scale {
        100% {
          transform: scale(1);
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `
);

const header = parse({ py: "16" }, css``);

const span = parse(
  {},
  css`
    opacity: 0;

    &[data-in-view] {
      display: inline-block;
      filter: blur(4px);

      &:nth-child(1) {
        animation: fade-in 0.4s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }

      &:nth-child(2) {
        animation: fade-in 0.4s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }

      &:nth-child(3) {
        animation: fade-in 0.4s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }

      &:nth-child(4) {
        animation: fade-in 0.4s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }

      @keyframes fade-in {
        100% {
          opacity: 1;
          filter: blur(0);
        }
      }
    }
  `
);
