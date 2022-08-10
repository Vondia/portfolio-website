import { rem } from "polished";
import { createThemeSystem } from "theme-system";

export const theme = {
  breakpoints: {
    small: "36em", // 576px,
    medium: "48em", // 768px
    large: "64em", // 1024px
    larger: "71em", // 1136px
    xlarge: "90em", // 1440px
  },
  fontSizes: {},
  fontWeights: {
    thin: "100",
    extraLight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
    extraBlack: "900",
  },
  fontFamilies: {},
  colors: {
    // Brand
    purple: "#6A47FF",
    // Elements
    shade100: "#F5F6F7",
    shade200: "#EBEDF0",
    shade300: "#CDD1D9",
    shade400: "#A8AFBD",
    shade500: "#788090",
    shade600: "#454A54",
    shade700: "#1C252E",
    shade800: "#11171C",
    // Text & borders
    white: "#FFFFFF",
    darkText: "#1f2937",
    border: "#2B2E33",
    borderOpacity: "#2B2F37",
    borderShadow: "#11171C20",
    borderDisabled: "#1E2229",
    borderGrey: "#788090",
    grey: "#788090",
    disabled: "#1E2229",
    opacity: "#2B2F37",
    // System
    lightBlue: "#0beef9",
    blue: "#82a1f6",
    backgroundDark: "#111317",
    background: "#fcf5ef",
    sidebar: "#fcf5ef",
    sidebarCollapsible: "#16181D",
    success: "#30BA67",
    danger: "#F2453D",
    inherit: "inherit",
  },
  gradients: {
    default: "linear-gradient(315deg, #6A47FF -62%, #82a1f6 104%)",
    hover: "linear-gradient(315deg, #6A47FF 5.5%, #82a1f6 95%)",
    fill: "linear-gradient(94deg, rgba(16, 198, 255, 0.05) 5.50%, rgba(118, 54, 255, 0.05) 97%);",
  },
  effects: {
    boxShadowSmall: `0px 15px 43px rgba(0, 0, 0, 0.25)`,
    boxShadowBig: `0px 54px 67px rgba(0, 0, 0, 0.11), 0px 22.5599px 44.5415px rgba(0, 0, 0, 0.079074), 0px 12.0616px 22.6816px rgba(0, 0, 0, 0.0655718), 0px 6.76164px 10.537px rgba(0, 0, 0, 0.055), 0px 3.59106px 4.97381px rgba(0, 0, 0, 0.0444282), 0px 1.49432px 1.93392px rgba(0, 0, 0, 0.030926)`,
    hairlineBorder: `1px solid rgba(255, 255, 255, 0.1)`,
  },
  space: {
    "0": "0",
    "4": rem(4),
    "8": rem(8),
    "12": rem(12),
    "16": rem(16),
    "20": rem(20),
    "24": rem(24),
    "32": rem(32),
    "40": rem(40),
    "48": rem(48),
    "56": rem(56),
    "64": rem(64),
    auto: "auto",
  },
};

export type Theme = typeof theme;

export const { parse, parseAll, utilities } = createThemeSystem<Theme>(theme);
