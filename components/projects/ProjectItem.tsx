import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { Text } from "../ui/typograhpy/Text";
import { Heading } from "../ui/typograhpy/Heading";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

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
  const [viewRef, inView] = useInView({ triggerOnce: true });
  return (
    <div className={parent} id={title} data-in-view={inView ? "" : null}>
      <div className={image} ref={viewRef}>
        <Image src={imageUrl} alt="/" width="400px" height="400px" />
      </div>
      <div className={text}>
        <Heading variant="h4" mb="8">
          {title}
        </Heading>
      </div>
      <div className={text}>
        <Text variant="regular" color="shade400" mb="24">
          &quot;{subTitle}&quot;
        </Text>
      </div>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className={buttonDiv}
      >
        <button className={button}>
          Press here to see the site{" "}
          <BsFillArrowRightCircleFill style={{ marginLeft: "8px" }} />
        </button>
      </a>
    </div>
  );
};

const parent = parse(
  { display: "flex", width: "100%", mx: "auto" },
  css`
    width: fit-content;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(3rem);
    transition: all 1s cubic-bezier(0.08, 0.62, 0.25, 1);
    overflow: visible;
    max-width: 300px;
    flex-direction: column;
    border: 1px solid ${theme.colors.shade400};
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    overflow: hidden;
    box-shadow: 0 11.1468px 18.2625px rgb(92 97 115 / 7%),
      0 4px 4px rgb(112 118 128 / 7%);

    &[data-in-view] {
      opacity: 1;
      transform: translateY(0);
    }

    @media screen and (min-width: ${theme.breakpoints.small}) {
      max-width: 400px;
      margin-x: unset;
    }
  `
);

const image = parse({}, css``);

const buttonDiv = parse(
  {
    display: "flex",
    alignItems: "center",
    py: "16",
    px: "20",
    justifyContent: "center",
  },
  css`
    background: ${theme.colors.blue};
    margin-top: auto;

    @media screen and (hover: hover) and (pointer: fine) {
      svg {
        transition-property: transform;
        transition-duration: 0.25s;
      }

      &:hover {
        opacity: 0.9;
        svg {
          transform: translateX(0.25rem);
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      padding-y: 1.5rem;
      padding-x: 2rem;
    }
  `
);

const button = parse(
  {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  css`
    font-weight: 600;
  `
);

const text = parse(
  {
    textAlign: "center",
  },
  css``
);
