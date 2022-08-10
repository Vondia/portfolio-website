import { css } from "linaria";
import { parse, theme } from "../config/theme";

export const parent = parse(
  {
    width: "100%",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 100vh;
    }
  `
);

export const container = parse(
  {
    m: "auto",
    px: "8",
    py: "16",
    width: "100%",
  },
  css`
    max-width: 1240px;
  `
);

export const subTitle = parse(
  {
    py: "16",
  },
  css`
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `
);

export const title = parse({
  py: "16",
});

export const grid = parse(
  {
    display: "grid",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: 2fr 3fr;
      grid-gap: 2rem;
    }
  `
);

export const leftContainer = parse(
  {
    width: "100%",
    height: "100%",
    p: "16",
  },
  css`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.75rem;
  `
);

export const left = parse(
  {
    height: "100%",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      padding: 1rem;
    }
  `
);

export const image = css`
  border-radius: 0.75rem;
  transition: all 0.3s ease-in;

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const myName = parse({
  py: "8",
});

export const myNameDescription = parse({
  py: "16",
});

export const footerLeft = parse(
  {
    pt: "32",
  },
  css`
    text-transform: uppercase;
  `
);

export const icons = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  css``
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

export const rightContainer = parse(
  {
    width: "100%",
    height: "auto",
  },
  css`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.75rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      padding: 1rem;
    }
  `
);

export const formContainer = parse({
  p: "16",
});

export const formGrid = parse(
  {
    display: "grid",
    width: "100%",
    py: "8",
  },
  css`
    grid-gap: 1rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;
    }
  `
);

export const formLine = parse(
  {
    display: "flex",
  },
  css`
    flex-direction: column;
  `
);

export const inputsBellowPhoneNumber = parse(
  {
    display: "flex",
    py: "8",
  },
  css`
    flex-direction: column;
  `
);

export const sendButton = parse(
  {
    p: "16",
    color: "shade200",
    width: "100%",
    mt: "16",
    position: "relative",
  },
  css`
    background: ${theme.gradients.default};
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 1;

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: ${theme.gradients.hover};
      transition-property: opacity;
      transition-duration: 0.4s;
      opacity: 0;
    }

    &:disabled {
      background: ${theme.colors.shade500};
      pointer-events: none;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:not(:disabled) {
        &:hover {
          &:before {
            opacity: 1;
          }
        }
      }
    }
  `
);

export const moveToTopContainer = parse(
  {
    display: "flex",
    justifyContent: "center",
    py: "64",
  },
  css``
);

export const moveToTopIcon = parse(
  {
    p: "24",
    display: "flex",
    color: "blue",
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

export const link = parse(
  {
    position: "relative",
  },
  css`
    font-style: italic;
    background-image: linear-gradient(
      to right,
      #6a47ff,
      #82a1f6 50%,
      #1f2937 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;

    &:before {
      content: "";
      background-image: linear-gradient(to right, #6a47ff, #82a1f6);
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        background-position: 0;
        &:before {
          width: 100%;
        }
      }
    }
  `
);
