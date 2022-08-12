import { css } from "linaria";
import { parse, theme } from "../../../config/theme";
import { rgba } from "polished";

export const hideOnMobile = css`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: flex;
  } ;
`;

export const hideOnDesktop = css`
  display: flex;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: none;
  } ;
`;

export const overlay = parse(
  {
    position: "fixed",
    height: "100%",
    width: "100%",
  },
  css`
    z-index: 100;
    right: 0;
    top: 0;
    background-color: ${rgba(theme.colors.background, 0.7)};
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-duration: 0.25s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  `
);

export const sidebar = parse(
  {
    position: "fixed",
    height: "100%",
  },
  css`
    background: ${theme.colors.background};
    z-index: 101;
    width: 100%;
    right: 0;
    top: 0;
    overflow: scroll;
    transition-property: width;
    transition-duration: 0.2s;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      width: fit-content;
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      width: fit-content;
    }

    &[data-state="open"] {
      transform: translateX(100%);
      animation-fill-mode: forwards;
      animation-duration: 0.25s;
      animation-name: animateFromRight;
    }

    &[data-state="closed"] {
      animation-fill-mode: forwards;
      animation-duration: 0.25s;
      animation-name: animateToRight;
    }

    @keyframes animateToRight {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @keyframes animateFromRight {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(0);
      }
    }
  `
);

export const grid = parse(
  {
    display: "grid",
    position: "relative",
    height: "100%",
    width: "100%",
  },
  css`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    transition-property: width;
    transition-duration: 0.2s;
  `
);

export const menu = parse(
  {
    display: "block",
    width: "100%",
    p: "12",
  },
  css`
    height: 100%;

    [data-item-title] {
      flex-shrink: 0;
      transition-property: transform opacity;
      transition-duration: 0.2s;
      opacity: 0;
      transform: translateX(-0.5rem);
    }

    &[data-full-width] {
      [data-item-title] {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `
);

export const topOverlay = parse(
  {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
  },
  css``
);

export const closeButton = parse(
  {
    p: "12",
    display: "flex",
  },
  css`
    border-radius: 9999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  `
);

export const socialMediaButton = parse(
  {
    p: "12",
    mr: "48",
    display: "flex",
  },
  css`
    border-radius: 9999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `
);

export const socialMediaButtons = parse(
  {
    display: "flex",
    alignItems: "flex-start",
    my: "16",
  },
  css`
    width: 80%;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      width: 100%;
    }
  `
);

export const overlayTitle = parse(
  {
    my: "16",
  },
  css`
    border-bottom: 1px solid ${theme.colors.shade300};
  `
);

export const overlayTitleText = parse(
  {
    mt: "auto",
  },
  css``
);

export const listItemOverlay = parse(
  {
    py: "16",
  },
  css`
    text-transform: uppercase;
  `
);

export const parentListItemOverlay = parse(
  {
    display: "flex",
    py: "16",
  },
  css`
    flex-direction: column;
  `
);

export const footerOverlay = css`
  padding-top: 10rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.blue};
`;
