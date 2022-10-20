import React, { FC, useEffect, useState } from "react";
import { css, cx } from "linaria";
import { parse, theme } from "../../config/theme";
import { Heading } from "../ui/typograhpy/Heading";
import { ProjectItem } from "./ProjectItem";
import { projectsInformation } from "../../lib/projects";
import { Container } from "../ui/Container";
import { useRouter } from "next/router";
import { AnimationVariant } from "../../pages/_app";
import { spacerBottomL } from "../../lib/spacers";

type ProjectsProps = {};

export const Projects: FC<ProjectsProps> = () => {
  const { isReady } = useRouter();
  const [animationVariant, setAnimationVariant] =
    useState<AnimationVariant>("animate");

  useEffect(() => {
    // Disabled for testing 👇
    // setAnimationVariant("visible")
    setAnimationVariant("animate");
  }, [isReady]);
  const leftColumn = projectsInformation.filter((_, key) => key % 2 === 0);
  const rightColumn = projectsInformation.filter((_, key) => key % 2 !== 0);
  return (
    <Container id="projects" className={cx(parent, spacerBottomL)}>
      <div className={container}>
        <Heading variant="h3" className={title}>
          What I&apos;ve worked on
        </Heading>
        <div className={projects}>
          <div className={left}>
            {leftColumn.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
                projectUrl={item.projectUrl}
                animation={animationVariant}
              />
            ))}
          </div>
          <div className={right}>
            {rightColumn.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
                projectUrl={item.projectUrl}
                animation={animationVariant}
              />
            ))}
          </div>
          <div className={showOnMobile}>
            {projectsInformation.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
                projectUrl={item.projectUrl}
                animation={animationVariant}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const parent = parse(
  {
    width: "100%",
  },
  css`
    position: relative;

    @media screen and (min-width: ${theme.breakpoints.xlarge}) {
      max-width: 89rem;
    }
  `
);

const container = parse(
  {
    mx: "auto",
    px: "8",
    pt: "64",
  },
  css`
    max-width: 1240px;
  `
);

const title = parse(
  {
    py: "16",
    textAlign: "center",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      text-align: left;
    }
  `
);

const projects = parse(
  {
    display: "flex",
  },
  css`
    opacity: 1;
    justify-content: center;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5rem;
      margin-bottom: unset;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-column-gap: 10rem;
    }
  `
);

const showOnMobile = css`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: none;
  }
`;

const left = parse(
  {
    display: "none",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `
);

const right = parse(
  {
    display: "none",
    pt: "48",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `
);
