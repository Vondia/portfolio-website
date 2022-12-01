import { parse, theme } from "../../../config/theme";
import { css } from "linaria";
import { rem, rgba } from "polished";

export const inputContainer = parse(
  {
    position: "relative",
  },
  css``
);

export const label = parse(
  {
    position: "absolute",
  },
  css`
    top: 50%;
    transform-origin: left center;
    transform: translateY(-50%);
    left: 1rem;
    transition: all 0.2s ease-in-out;
    font-weight: ${theme.fontWeights.medium};
    font-size: ${rem(16)};
    color: ${theme.colors.shade500};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(14)};
    }

    &::placeholder {
      opacity: 0;
    }
  `
);

export const inputStyles = parse(
  { pt: "32", pb: "16", pr: "16", pl: "16" },
  css`
    height: ${rem(52)};
    -moz-appearance: textfield;
    line-height: ${rem(52)};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }

    &::placeholder {
      opacity: 0;
    }
    &:disabled {
      color: ${theme.colors.shade500};
    }
    &[data-filled] + label {
      transform: translateY(-110%) scale(0.8) translateX(2px);
      color: ${theme.colors.shade500};
    }
    &[data-status="error"] + label {
      color: ${theme.colors.danger};
    }

    &[data-has-suffix-only] {
      padding-top: 1rem;
    }
  `
);

export const suffix = parse(
  { position: "absolute", color: "shade500" },
  css`
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
  `
);

export const baseInput = parse(
  {
    display: "block",
    width: "100%",
  },
  css`
    border: 1px solid ${theme.colors.shade300};
    color: ${theme.colors.darkText};
    background-color: transparent;
    transition-property: border;
    transition-duration: 0.25s;
    border-radius: 6px;
    font-weight: ${theme.fontWeights.normal};
    font-size: ${rem(16)};
    -webkit-appearance: none;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(14)};
    }

    &::placeholder {
      opacity: 0;
    }

    &:not(:disabled):hover {
      border-color: ${theme.colors.shade300};
    }

    &[data-status="error"] {
      border-color: ${theme.colors.danger};
    }

    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 1px ${rgba(theme.colors.shade300, 0.5)};
    }

    &:focus {
      border: 1px solid ${theme.colors.shade200};
      box-shadow: 0 0 0 1px ${theme.colors.shade300};
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      /* background: ${theme.colors.disabled}; */
    }
  `
);
