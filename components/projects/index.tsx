import React, { FC } from "react";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { Text } from "../ui/typograhpy/Text";
import { Heading } from "../ui/typograhpy/Heading";
import { ProjectItem } from "./ProjectItem";
import { projectsInformation } from "../../lib/projects";

type ProjectsProps = {};

export const Projects: FC<ProjectsProps> = () => {
  return (
    <div id="projects" className={parent}>
      <div className={container}>
        <Text variant="large" color="purple" className={subTitle}>
          Projects
        </Text>
        <Heading variant="h3" className={title}>
          What I&apos;ve worked on
        </Heading>
        <div className={projects}>
          {projectsInformation.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const parent = parse(
  {
    width: "100%",
  },
  css``
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
  },
  css`
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `
);

const title = parse({
  py: "16",
});

const projects = parse(
  {
    display: "grid",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 2rem;
    }
  `
);
