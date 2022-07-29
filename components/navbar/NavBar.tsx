import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Text } from "../ui/typograhpy/Text";
import { OverlaySidebarMenu } from "./overlay-sidebar-menu";
import { useRouter } from "next/router";
import { AnimationVariant } from "../../pages/_app";
import * as styles from "./NavBar.styles";

type NavbarProps = {
  animationVariant: AnimationVariant;
};

export const Navbar: FC<NavbarProps> = ({ animationVariant }) => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#fcf5ef");
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
      setLinkColor("#fcf5ef");
    } else {
      setNavBg("#fcf5ef");
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

  const currentRoute = router.asPath;

  return (
    <nav
      className={navBg === "transparent" ? styles.parentProject : styles.parent}
      data-animation-variant={animationVariant}
    >
      <div className={shadow ? styles.container : styles.containerShadowless}>
        <div>
          <ul style={{ color: `${linkColor}` }} className={styles.hideOnMobile}>
            <Link href="/">
              <a>
                <Text
                  variant="small"
                  className={styles.listItem}
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
                  className={styles.listItem}
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
                  className={styles.listItem}
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
                  className={styles.listItem}
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
                  className={styles.listItem}
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
