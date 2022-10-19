import { parseAll, Theme } from "../../../config/theme";
import { cx } from "linaria";
import React, { FC, HTMLAttributes } from "react";
import { ThemeSystemProps } from "theme-system";
import * as styles from "./Text.styles";

type TextProps = HTMLAttributes<HTMLElement> &
  Pick<ThemeSystemProps<Theme>, "mb" | "mr" | "color" | "fontWeight"> & {
    variant: "special" | "large" | "regular" | "small" | "micro";
    as?: "p" | "div" | "span";
  };

export const Text: FC<TextProps> = ({
  color = "#1f2937",
  as = "div",
  fontWeight = "normal",
  variant,
  className,
  ...rest
}) => {
  const Comp = as;
  return (
    <Comp
      data-variant={variant}
      className={cx(
        className,
        parseAll({ color, fontWeight, ...rest }),
        styles.baseText,
        styles[variant]
      )}
      {...rest}
    />
  );
};
