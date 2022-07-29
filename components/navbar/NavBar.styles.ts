import { parse, theme } from "../../config/theme";
import { css } from "linaria";
import { rgba } from "polished";

export const container = parse(
  {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    py: "16",
  },
  css`
    top: 0;
    left: 0;
    padding-right: 1rem;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      justify-content: space-between;
    }
  `
);

export const containerShadowless = parse(
  {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    py: "16",
  },
  css`
    top: 0;
    left: 0;
    padding-right: 1rem;
    transition: box-shadow 0.3s ease-in-out;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      justify-content: space-between;
    }
  `
);

export const parent = parse(
  {
    position: "fixed",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    z-index: 100;
    background-image: radial-gradient(
      ${rgba(theme.colors.sidebar, 0.75)} 1px,
      ${theme.colors.sidebar} 1px
    );
    background-repeat: initial;
    background-size: 4px 4px;
    backdrop-filter: blur(4px);
    transform: perspective(1000px) rotateX(35deg) translateY(-0.5rem);
    opacity: 0;

    &[data-animation-variant="animate"] {
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      animation-delay: 1.3s;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
          transform: perspective(1000px) rotateX(0) translateY(0);
        }
      }
    }

    &[data-animation-variant="visible"] {
      opacity: 1;
      transform: perspective(1000px) rotateX(0) translateY(0);
    }

    @media screen and (min-width: ${theme.breakpoints.xlarge}) {
      padding-x: 4rem;
    } ;
  `
);

export const parentProject = parse(
  {
    position: "fixed",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    z-index: 100;
  `
);

export const listItem = parse(
  {
    ml: "40",
    position: "relative",
  },
  css`
    text-transform: uppercase;
    width: fit-content;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      border-radius: 4px;
      background-color: ${theme.colors.darkText};
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        &:before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
    &[data-active="true"] {
      color: ${theme.colors.blue};
      font-weight: 600;
    }
  `
);

export const hideOnMobile = css`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: flex;
  }
`;
