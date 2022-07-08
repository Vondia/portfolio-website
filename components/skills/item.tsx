import Image from "next/image";
import React, { FC } from "react";
import { Heading } from "../ui/typograhpy/Heading";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";

type SkillsItemProps = {
  text: string;
  imageSrc: string;
};

export const SkillsItem: FC<SkillsItemProps> = ({ imageSrc, text }) => {
  return (
    <div className={items}>
      <div className={item}>
        <div className={image}>
          <Image src={imageSrc} alt="html logo" width="64px" height="64px" />
        </div>
        <div className={itemText}>
          <Heading variant="h3" color="shade700">
            {text}
          </Heading>
        </div>
      </div>
    </div>
  );
};

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
