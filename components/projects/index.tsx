import React, { FC, useEffect, useState } from "react";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { Text } from "../ui/typograhpy/Text";
import { Heading } from "../ui/typograhpy/Heading";
import { ProjectItem } from "./ProjectItem";
import { projectsInformation } from "../../lib/projects";
import { Container } from "../ui/Container";
import { useRouter } from "next/router";
import { AnimationVariant } from "../../pages/_app";

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
    <Container id="projects" className={parent}>
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
    py: "64",
  },
  css`
    max-width: 1240px;
  `
);

const subTitle = parse(
  {
    py: "16",
    textAlign: "center",
  },
  css`
    text-transform: uppercase;
    letter-spacing: 0.1em;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      text-align: left;
    }
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
    display: "grid",
  },
  css`
    opacity: 1;
    grid-template-columns: 1fr;
    grid-column-gap: 3rem;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      grid-column-gap: 2rem;
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5rem;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-column-gap: 10rem;
    }
  `
);

const showOnMobile = css`
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
    py: "48",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `
);
