import "../styles/font-face.css";
import "../styles/global-styles.css";
import "../styles/reset.css";
import "../config/theme/utility-styles";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navbar/NavBar";
import { useEffect, useState } from "react";
import { parse, theme } from "../config/theme";
import { css } from "linaria";

export type AnimationVariant = "animate" | "visible" | "hidden";

function MyApp({ Component, pageProps }: AppProps) {
  const { isReady } = useRouter();
  const [animationVariant, setAnimationVariant] =
    useState<AnimationVariant>("animate");

  useEffect(() => {
    // Disabled for testing 👇
    // setAnimationVariant("visible")
    setAnimationVariant("animate");
  }, [isReady]);

  return (
    <>
      <Navbar animationVariant={animationVariant} />
      <div className={content} data-animation-variant={animationVariant}>
        <Component {...pageProps} />
      </div>
      <span className={reveal} data-animation-variant={animationVariant} />
    </>
  );
}

export default MyApp;

export const reveal = parse(
  {
    position: "fixed",
    display: "block",
  },
  css`
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 5;
    background: ${theme.colors.sidebar};
    -webkit-mask-image: radial-gradient(
      circle 400px at 50% 50%,
      transparent,
      white 50%
    );

    &[data-animation-variant="animate"] {
      animation-name: scaleIn;
      animation-fill-mode: forwards;
      animation-duration: 0.75s;
      animation-delay: 0.75s;

      @keyframes scaleIn {
        0% {
          opacity: 1;
          transform: scale(1);
        }

        50% {
          opacity: 1;
        }

        100% {
          opacity: 0;
          transform: scale(5);
        }
      }
    }

    &[data-animation-variant="visible"] {
      opacity: 0;
    }
  `
);

export const content = parse(
  {
    display: "block",
  },
  css`
    opacity: 0;

    &[data-animation-variant="animate"] {
      animation-name: contentFade;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0, 0.83, 1, 1);
      animation-duration: 0.75s;
      animation-delay: 0.75s;
      opacity: 0;

      @keyframes contentFade {
        0% {
          opacity: 0;
          transform: scale(0.98);
        }

        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }

    &[data-animation-variant="visible"] {
      opacity: 1;
    }
  `
);
