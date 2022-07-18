import React, { FC } from "react";
import { Heading } from "../ui/typograhpy/Heading";
import { Text } from "../ui/typograhpy/Text";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { itemInfo } from "../../lib/itemInfo";
import { SkillsItem } from "./item";

type SkillsProps = {};

export const Skills: FC<SkillsProps> = () => {
  return (
    <div id="skills" className={container}>
      <div className={parent}>
        <Text variant="regular" color="purple" className={subTitle}>
          Skills
        </Text>
        <Heading variant="h2" className={header}>
          What I Can Do
        </Heading>
        <div className={grid}>
          {itemInfo.map((item, index) => (
            <SkillsItem key={index} imageSrc={item.imageSrc} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

const container = parse(
  {
    width: "100%",
    p: "8",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 100vh;
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
  `
);

const grid = parse(
  {
    display: "grid",
  },
  css`
    grid-gap: 2rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `
);

const subTitle = css`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const header = parse({ py: "16" });

const items = parse(
  {
    p: "24",
    color: "purple",
  },
  css`
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    transition: all 0.3s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `
);

const item = parse(
  {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  css`
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  `
);

const image = parse({ m: "auto" });

const itemText = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  css`
    flex-direction: column;
  `
);
