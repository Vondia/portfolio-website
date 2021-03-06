import { parseAll, Theme } from "../../../config/theme";
import { cx } from "linaria";
import React, { FC, HTMLAttributes } from "react";
import { ThemeSystemProps } from "theme-system";
import { styles } from "./Heading.styles";
type HeadingProps = HTMLAttributes<HTMLElement> &
  Pick<ThemeSystemProps<Theme>, "mb" | "color"> & {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
  };

export const Heading: FC<HeadingProps> = ({
  color = "#1f2937",
  as,
  variant,
  className,
  mb,
  ...rest
}) => {
  const Comp = as || variant;
  return (
    <Comp
      data-variant={variant}
      className={cx(className, parseAll({ color, mb }), styles)}
      {...rest}
    />
  );
};
