import { theme } from "../config/theme";
import { css } from "linaria";
import { rem } from "polished";

export const spacerBottomS = css`
  margin-bottom: ${rem(64)};
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    margin-bottom: ${rem(96)};
  }
`;
export const spacerBottomM = css`
  margin-bottom: ${rem(60)};
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    margin-bottom: ${rem(80)};
  }
  @media screen and (min-width: ${theme.breakpoints.large}) {
    margin-bottom: ${rem(120)};
  }
`;

export const spacerBottomL = css`
  margin-bottom: ${rem(80)};
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    margin-bottom: ${rem(120)};
  }
  @media screen and (min-width: ${theme.breakpoints.large}) {
    margin-bottom: ${rem(160)};
  }
`;

export const spacerMobileBottomL = css`
  @media screen and (max-width: ${theme.breakpoints.medium}) {
    margin-bottom: ${rem(80)};
  }
`;
export const spacerTabletBottomL = css`
  @media screen and (max-width: ${theme.breakpoints.large}) {
    margin-bottom: ${rem(120)};
  }
`;

export const spacerDesktopBottomS = css`
  @media screen and (min-width: ${theme.breakpoints.large}) {
    margin-bottom: ${rem(104)};
  }
`;
