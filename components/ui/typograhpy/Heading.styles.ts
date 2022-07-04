import { theme } from "../../../config/theme";
import { css } from "linaria";
import { rem } from "polished";

export const styles = css`
  font-weight: ${theme.fontWeights.extraBold};
  letter-spacing: -0.01em;

  &[data-variant="h1"] {
    line-height: 1.1;
    font-size: ${rem(48)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(64)};
    }
  }

  &[data-variant="h2"] {
    line-height: 1.1;
    font-size: ${rem(40)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(52)};
    }
  }

  &[data-variant="h3"] {
    line-height: 1.2;
    font-size: ${rem(32)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(40)};
    }
  }

  &[data-variant="h4"] {
    line-height: 1.2;
    font-size: ${rem(28)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(32)};
    }
  }

  &[data-variant="h5"] {
    line-height: 1.35;
    font-size: ${rem(22)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(24)};
    }
  }

  &[data-variant="h6"] {
    line-height: 1.45;
    font-size: ${rem(18)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(16)};
    }
  }
`;
