import { css } from "linaria";
import { parse, theme } from "../config/theme";

export const parent = parse(
  {
    width: "100%",
  },
  css`
    text-align: center;
    margin-top: 6rem;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      margin-top: unset;
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      height: 65vh;
    }
  `
);

export const container = parse({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  mx: "auto",
  p: "8",
});

export const headingText = parse(
  {
    pt: "16",
    display: "flex",
    justifyContent: "center",
  },
  css`
    padding-right: 6rem;
    @media screen and (min-width: ${theme.breakpoints.large}) {
      padding-right: 7rem;
    }
  `
);

export const pimText = parse(
  { position: "relative" },
  css`
    padding-left: 14px;
    h2 {
      color: #fff;
      font-size: 8em;
      position: absolute;
    }
    h2:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 2px ${theme.colors.blue};
    }

    h2:nth-child(2) {
      color: ${theme.colors.blue};
      animation: animate 4s ease-in-out infinite;
    }

    @keyframes animate {
      0%,
      100% {
        clip-path: polygon(
          0% 45%,
          16% 44%,
          33% 50%,
          54% 60%,
          70% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%
        );
      }

      50% {
        clip-path: polygon(
          0% 60%,
          15% 65%,
          34% 66%,
          51% 62%,
          67% 50%,
          84% 45%,
          100% 46%,
          100% 100%,
          0% 100%
        );
      }
    }
  `
);

export const headingTextsecondLine = parse(
  {
    pb: "16",
  },
  css``
);

export const bottomText = parse(
  {
    p: "16",
    m: "auto",
  },
  css`
    max-width: 75%;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      max-width: 60%;
    }
  `
);

export const buttonContainer = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    m: "auto",
    py: "16",
  },
  css`
    max-width: 330px;
  `
);

export const button = parse(
  {
    p: "24",
    color: "blue",
    display: "flex",
  },
  css`
    border-radius: 9999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  `
);
