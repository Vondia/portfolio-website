import React, { FC, useEffect, useState } from "react";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui/typograhpy/Text";
import { OverlaySidebarMenu } from "./overlay-sidebar-menu";
import { useRouter } from "next/router";
import { rgba } from "polished";
import { AnimationVariant } from "../../pages/_app";

type NavbarProps = {
  animationVariant: AnimationVariant;
};

export const Navbar: FC<NavbarProps> = ({ animationVariant }) => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/gassan" ||
      router.asPath === "/frank-energie" ||
      router.asPath === "/viesus-cloud" ||
      router.asPath === "/wereldwijdeweetjes"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  //   const [clientWindowHeight, setClientWindowHeight] = useState("");
  //   const handleScroll = () => {
  //     setClientWindowHeight(window.scrollY);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   });

  const currentRoute = router.asPath;
  console.log(currentRoute);
  return (
    <nav
      className={navBg === "transparent" ? parentProject : parent}
      data-animation-variant={animationVariant}
    >
      <div className={shadow ? container : containerShadowless}>
        <div>
          <ul style={{ color: `${linkColor}` }} className={hideOnMobile}>
            <Link href="/">
              <a>
                <Text
                  variant="small"
                  className={listItem}
                  data-active={currentRoute === "/"}
                >
                  {" "}
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/#projects">
              <a>
                <Text
                  variant="small"
                  className={listItem}
                  data-active={currentRoute === "/#projects"}
                >
                  {" "}
                  Projects
                </Text>
              </a>
            </Link>
            <Link href="/#skills">
              <a>
                <Text
                  variant="small"
                  className={listItem}
                  data-active={currentRoute === "/#skills"}
                >
                  {" "}
                  Skills
                </Text>
              </a>
            </Link>
            <Link href="/#about" data-active={currentRoute === "/#about"}>
              <a>
                <Text
                  variant="small"
                  className={listItem}
                  data-active={currentRoute === "/#about"}
                >
                  {" "}
                  About
                </Text>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <Text
                  variant="small"
                  className={listItem}
                  data-active={currentRoute === "/#contact"}
                >
                  {" "}
                  Contact
                </Text>
              </a>
            </Link>
          </ul>
          <OverlaySidebarMenu />
        </div>
      </div>
    </nav>
  );
};

const container = parse(
  {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    py: "16",
  },
  css`
    top: 0;
    left: 0;
    padding-right: 1rem;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      justify-content: space-between;
    }
  `
);

const containerShadowless = parse(
  {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    py: "16",
  },
  css`
    top: 0;
    left: 0;
    padding-right: 1rem;
    transition: box-shadow 0.3s ease-in-out;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      justify-content: space-between;
    }
  `
);

const parent = parse(
  {
    position: "fixed",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    z-index: 100;
    background-image: radial-gradient(
      ${rgba(theme.colors.sidebar, 0.75)} 1px,
      ${theme.colors.sidebar} 1px
    );
    background-repeat: initial;
    background-size: 4px 4px;
    backdrop-filter: blur(4px);
    transform: perspective(1000px) rotateX(35deg) translateY(-0.5rem);
    opacity: 0;

    &[data-animation-variant="animate"] {
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      animation-delay: 1.3s;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
          transform: perspective(1000px) rotateX(0) translateY(0);
        }
      }
    }

    &[data-animation-variant="visible"] {
      opacity: 1;
      transform: perspective(1000px) rotateX(0) translateY(0);
    }

    @media screen and (min-width: ${theme.breakpoints.xlarge}) {
      padding-x: 4rem;
    } ;
  `
);

const parentProject = parse(
  {
    position: "fixed",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    z-index: 100;
  `
);

const listItem = parse(
  {
    ml: "40",
  },
  css`
    text-transform: uppercase;
    width: fit-content;
    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        border-bottom: 1px solid ${theme.colors.shade400};
      }
    }
    &[data-active="true"] {
      color: ${theme.colors.blue};
      font-weight: 600;
    }
  `
);

const hideOnMobile = css`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: flex;
  }
`;
