import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { Text } from "../ui/typograhpy/Text";
import { Heading } from "../ui/typograhpy/Heading";
import { rem } from "polished";

type ProjectItemProps = {
  title: string;
  subTitle: string;
  projectUrl: string;
  imageUrl: string;
};

export const ProjectItem: FC<ProjectItemProps> = ({
  title,
  subTitle,
  projectUrl,
  imageUrl,
}) => {
  return (
    <div className={projectItem} id="parent">
      <Image
        src={imageUrl}
        alt="/"
        width="800px"
        height="800px"
        className={image}
      />
      <div className={overlay}>
        <div className={text}>
          <Heading variant="h3" color="white">
            {title}
          </Heading>
          <Text variant="regular" color="white" fontWeight="bold">
            &quot;{subTitle}&quot;
          </Text>
          <Link href={projectUrl}>
            <button className={link}>More info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const projectItem = parse(
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "16",
    width: "100%",
  },
  css`
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    border-radius: 0.75rem;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        opacity: 1;
      }
    }
  `
);

const image = parse({
  display: "block",
  width: "100%",
  height: "auto",
});

const overlay = parse(
  {
    position: "absolute",
  },
  css`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    border-radius: 0.75rem;
    background: ${theme.gradients.default};

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        opacity: 0.9;
      }
    }
  `
);

const text = parse(
  {
    position: "absolute",
  },
  css`
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  `
);

const link = parse(
  { p: "16", mt: "8" },
  css`
    background-color: ${theme.colors.white};
    border-radius: 0.75rem;
    height: fit-content;
    font-size: ${rem(18)};
    font-family: "Gillroy";
    font-weight: 900;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(16)};
    }
  `
);
