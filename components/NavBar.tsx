import React, { FC, useState } from "react";
import { css } from "linaria";
import { parse, theme } from "../config/theme";
import Image from "next/image";
import Link from "next/link";
import { Text } from "./ui/typograhpy/Text";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={container}>
      <div className={parent}>
        <Image
          src="/../public/assets/pimLogo.png"
          alt="/"
          width="80"
          height="80"
        />
        <div>
          <ul className={hideOnMobile}>
            <Link href="/">
              <a>
                <Text variant="small" className={listItem}>
                  {" "}
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text variant="small" className={listItem}>
                  {" "}
                  About
                </Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text variant="small" className={listItem}>
                  {" "}
                  Skills
                </Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text variant="small" className={listItem}>
                  {" "}
                  Projects
                </Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text variant="small" className={listItem}>
                  {" "}
                  Contact
                </Text>
              </a>
            </Link>
          </ul>
          <div onClick={handleNav} className={hideOnDesktop}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={backgroundOverlay}
        data-overlay-closed={nav ? "closed" : "opened"}
      >
        <div
          className={overlay}
          data-overlay-closed={nav ? "closed" : "opened"}
          id="modal"
        >
          <div>
            <div className={topOverlay}>
              <Image
                src="/../public/assets/pimLogo.png"
                alt=""
                width="60"
                height="60"
              />
              <button onClick={handleNav} className={closeButton}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className={overlayTitle}>
            <Text as="p" variant="large" className={overlayTitleText}>
              {" "}
              Let&apos;s build something legendary together
            </Text>
          </div>
          <div className={parentListItemOverlay}>
            <ul>
              <Link href="/">
                <a>
                  <Text variant="small" className={listItemOverlay}>
                    Home
                  </Text>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Text variant="small" className={listItemOverlay}>
                    About
                  </Text>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Text variant="small" className={listItemOverlay}>
                    Skills
                  </Text>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Text variant="small" className={listItemOverlay}>
                    Projects
                  </Text>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Text variant="small" className={listItemOverlay}>
                    Content
                  </Text>
                </a>
              </Link>
            </ul>
            <div className={footerOverlay}>
              <Text variant="large" fontWeight="medium">
                Let&apos;s connect
              </Text>
              <div className={socialMediaButtons}>
                <div className={socialMediaButton}>
                  <FaLinkedinIn />
                </div>
                <div className={socialMediaButton}>
                  <FaGithub />
                </div>
                <div className={socialMediaButton}>
                  <AiOutlineMail />
                </div>
                <div className={socialMediaButton}>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const container = css`
  position: fixed;
  width: 100%;
  height: 80px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  z-index: 100;
  background-color: #ffffff;
`;
const parent = parse(
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  css`
    padding-x: 0.5rem;

    @media screen and (min-width: ${theme.breakpoints.xlarge}) {
      padding-x: 4rem;
    } ;
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
  `
);

const hideOnMobile = css`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: flex;
  } ;
`;

const hideOnDesktop = css`
  display: flex;
  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: none;
  } ;
`;

const backgroundOverlay = css`
  display: unset;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  &[data-overlay-closed="closed"] {
    display: none;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    display: none !important;
  } ;
`;

const overlay = css`
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100vh;
  background: #ecf0f3;
  padding: 2.5rem;

  @media screen and (min-width: ${theme.breakpoints.small}) {
    left: -100%;
    top: 0;
    width: 60%;
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 45%;
  }

  &[data-overlay-closed="opened"] {
    animation-name: fadeInMobile;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      left: -100%;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
  @keyframes fadeInMobile {
    0% {
      opacity: 0;
      top: -100%;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }
`;

const topOverlay = parse(
  {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  css``
);

const closeButton = parse(
  {
    p: "12",
    display: "flex",
  },
  css`
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
  `
);

const socialMediaButton = parse(
  {
    p: "12",
  },
  css`
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `
);

const socialMediaButtons = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    my: "16",
  },
  css`
    width: 80%;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      width: 100%;
    }
  `
);

const overlayTitle = parse(
  {
    my: "16",
  },
  css`
    border-bottom: 1px solid ${theme.colors.shade300};
  `
);

const overlayTitleText = parse(
  {
    py: "16",
  },
  css`
    width: 85%;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      width: 90%;
    }
  `
);

const listItemOverlay = parse(
  {
    py: "16",
  },
  css`
    text-transform: uppercase;
  `
);

const parentListItemOverlay = parse(
  {
    display: "flex",
    py: "16",
  },
  css`
    flex-direction: column;
  `
);

const footerOverlay = css`
  padding-top: 10rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.purple};
`;

// 43 minuten --> https://www.youtube.com/watch?v=CMx51wpd7g4&t=362s
