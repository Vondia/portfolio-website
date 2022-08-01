import { css } from "linaria";
import { parse, theme } from "../config/theme";

export const container = parse(
  {
    display: "flex",
    alignItems: "center",
    my: "64",
    width: "100%",
  },
  css``
);

export const parent = parse(
  {
    m: "auto",
  },
  css`
    max-width: 1240px;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  `
);

export const title = parse({
  py: "16",
});

export const paragraphs = parse({
  py: "8",
});

export const bionicReading = css`
  font-weight: 800 !important;
`;

export const image = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    m: "auto",
    p: "24",
  },
  css`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.75rem;
    transition: all 0.2s ease-in;
    border-radius: 0.75rem;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `
);

export const photo = css`
  border-radius: 0.75rem;
`;

export const styledSwitch = css`
  min-width: 42px;
  min-height: 25px;
  background-color: white;
  border-radius: 9999px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &[data-state="checked"] {
    background-color: ${theme.colors.blue};
  }
`;

export const styledThumb = css`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state="checked"] {
    transform: translateX(19px);
  }
  &[data-state="unchecked"] {
    background-color: ${theme.colors.blue};
  }
`;

export const bionicReadingDiv = css`
  display: flex;
  align-items: center;
  width: 150px;

  @media screen and (min-width: ${theme.breakpoints.small}) {
    width: unset;
  }
`;
export const headerParent = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const bionicLink = parse(
  {
    position: "relative",
  },
  css`
    background-image: linear-gradient(
      to right,
      #6a47ff,
      #82a1f6 50%,
      #454a54 50%
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
      height: 1px;
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
