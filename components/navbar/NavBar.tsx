import React, { FC, useState } from "react";
import { css } from "linaria";
import { parse, theme } from "../../config/theme";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui/typograhpy/Text";
import { OverlaySidebarMenu } from "./overlay-sidebar-menu";

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
          <OverlaySidebarMenu />
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
  }
`;
