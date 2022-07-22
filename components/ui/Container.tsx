import { parse, parseAll, Theme } from "../../config/theme";
import { css, cx } from "linaria";
import { rem } from "polished";
import React, { forwardRef, HTMLAttributes } from "react";
import { ThemeSystemProps } from "theme-system";

export type ContainerSize = "small" | "medium" | "big";

type ContainerProps = Pick<ThemeSystemProps<Theme>, "mb" | "mt"> &
  HTMLAttributes<HTMLDivElement> & {
    as?: "div" | "section";
    size?: ContainerSize;
  };

export const Container = forwardRef<ContainerProps, any>((props, ref) => {
  const { mb, mt, className, as = "section", size = "medium", ...rest } = props;
  const Comp = as;
  return (
    <Comp
      className={cx(className, container, parseAll({ mb, mt }))}
      data-size={size}
      {...rest}
      ref={ref}
    ></Comp>
  );
});

Container.displayName = "Container";

const container = parse(
  {
    position: "relative",
    mx: "auto",
  },
  css`
    width: calc(100% - 2.5rem);

    &[data-size="small"] {
      max-width: ${rem(728)};
    }
    &[data-size="medium"] {
      max-width: ${rem(1088)};
    }
    &[data-size="big"] {
      max-width: ${rem(1312)};
    }
  `
);
