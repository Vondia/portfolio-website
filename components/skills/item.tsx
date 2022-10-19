import Image from "next/image";
import React, { FC } from "react";
import { Heading } from "../ui/typograhpy/Heading";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import { Text } from "../ui/typograhpy/Text";
import { useInView } from "react-intersection-observer";

type SkillsItemProps = {
  headingText: string;
  imageSrc: string;
  mainText: string;
};

export const SkillsItem: FC<SkillsItemProps> = ({
  imageSrc,
  headingText,
  mainText,
}) => {
  const [viewRef, inView] = useInView({ triggerOnce: true });
  return (
    <div className={items} data-in-view={inView ? "" : null}>
      <div className={item} ref={viewRef}>
        <div className={image}>
          <Image src={imageSrc} alt="html logo" width="64px" height="64px" />
        </div>
        <div className={itemText}>
          <Heading variant="h5" color="shade700">
            {headingText}
          </Heading>
        </div>
        <Text variant="regular" color="darkText" className={skillText}>
          {mainText}
        </Text>
      </div>
    </div>
  );
};

const items = parse(
  {
    p: "24",
    color: "blue",
  },
  css`
    border-radius: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.2s ease-in;
    overflow: hidden;
    opacity: 0;

    &[data-in-view] {
      display: inline-block;
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      &[data-on-first-render] {
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(3rem);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      &[data-in-view] {
        display: inline-block;
        filter: blur(4px);

        &:nth-child(1) {
          animation: fade-in 0.2s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(2) {
          animation: fade-in 0.2s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(3) {
          animation: fade-in 0.2s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(4) {
          animation: fade-in 0.2s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(5) {
          animation: fade-in 0.2s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(6) {
          animation: fade-in 0.2s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(7) {
          animation: fade-in 0.2s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        &:nth-child(8) {
          animation: fade-in 0.2s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }
        &:nth-child(9) {
          animation: fade-in 0.2s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }
        &:nth-child(10) {
          animation: fade-in 0.2s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }
        &:nth-child(11) {
          animation: fade-in 0.2s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }
        &:nth-child(12) {
          animation: fade-in 0.2s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        @keyframes fade-in {
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
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
    grid-gap: 1.5rem 1rem;
  `
);

const image = parse(
  { m: "auto" },
  css`
    height: 64px;
    width: 64px;
  `
);

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

const skillText = parse(
  {},
  css`
    grid-column: span 2 / span 2;
  `
);
