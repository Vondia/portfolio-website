import { parse, parseAll, theme, Theme } from "../../../config/theme";
import { css, cx } from "linaria";
import { rem } from "polished";
import React, { FC, HTMLAttributes } from "react";
import { ThemeSystemProps } from "theme-system";

type SpanProps = HTMLAttributes<HTMLElement> &
  Pick<
    ThemeSystemProps<Theme>,
    "mb" | "mr" | "mt" | "ml" | "color" | "display"
  > & {
    variant:
      | "button-label-big"
      | "button-label-small"
      | "input-label"
      | "input-label-active";
    as?: "span" | "div";
  };

export const Span: FC<SpanProps> = ({
  color,
  as = "span",
  variant,
  className,
  ...rest
}) => {
  const Comp = as;
  return (
    <Comp
      data-variant={variant}
      className={cx(className, parseAll({ color, ...rest }), span)}
      {...rest}
    />
  );
};

const span = parse(
  {},
  css`
    &[data-variant="button-label-big"] {
      font-size: ${rem(16)};
      font-weight: ${theme.fontWeights.semiBold};
    }
    &[data-variant="button-label-small"] {
      font-size: ${rem(14)};
      font-weight: ${theme.fontWeights.semiBold};
    }
    &[data-variant="input-label"] {
      font-weight: ${theme.fontWeights.medium};
      font-size: ${rem(16)};
      @media screen and (min-width: ${theme.breakpoints.large}) {
        font-size: ${rem(14)};
      }
    }
    &[data-variant="input-label-active"] {
      font-weight: ${theme.fontWeights.medium};
      font-size: ${rem(12)};
    }
  `
);
