import { parse, theme } from "../../../config/theme";
import { css } from "linaria";
import { rem } from "polished";

export const textAreaContainer = parse({
  position: "relative",
});

export const label = parse(
  {
    position: "absolute",
  },
  css`
    top: 1rem;
    left: 1rem;
    transform-origin: left center;
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.shade500};

    &::placeholder {
      opacity: 0;
    }
  `
);

export const textAreaStyles = css`
  -moz-appearance: textfield;
  min-height: ${rem(112)};
  padding-top: ${rem(30)};
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  resize: none;
  -moz-appearance: textfield;

  &::placeholder {
    opacity: 0;
  }

  &[data-filled] + label {
    transform: translateY(-0.5rem) scale(0.8);
    color: ${theme.colors.shade500};
  }
`;
