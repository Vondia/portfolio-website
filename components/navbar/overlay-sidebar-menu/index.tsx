import React, { FC, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Text } from "../../ui/typograhpy/Text";
import Link from "next/link";
import * as styles from "./styles";
import { useRouter } from "next/router";

type OverlaySidebarMenuProps = {};

export const OverlaySidebarMenu: FC<OverlaySidebarMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/gassan" ||
      router.asPath === "/frank-energie" ||
      router.asPath === "/viesus-cloud" ||
      router.asPath === "/wereldwijdeweetjes"
    ) {
      setLinkColor("#A8AFBD");
    } else {
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={styles.hideOnDesktop}
          style={{
            color: linkColor,
          }}
        >
          <AiOutlineMenu size={25} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={styles.overlay}
          data-overlay-closed={isOpen ? "closed" : "opened"}
        />
        <Dialog.Content className={styles.sidebar}>
          <aside className={styles.grid}>
            <div className={styles.menu}>
              <div className={styles.topOverlay}>
                <div>
                  <Dialog.Close asChild>
                    <button className={styles.closeButton}>
                      <AiOutlineClose />
                    </button>
                  </Dialog.Close>
                </div>
              </div>
              <div className={styles.overlayTitle}>
                <Text
                  as="p"
                  variant="large"
                  className={styles.overlayTitleText}
                >
                  {" "}
                  Welcome to my portfolio site
                </Text>
              </div>
              <div className={styles.parentListItemOverlay}>
                <ul>
                  <Link href="/">
                    <a onClick={() => setIsOpen(false)}>
                      <Text variant="small" className={styles.listItemOverlay}>
                        Home
                      </Text>
                    </a>
                  </Link>
                  <Link href="/#projects">
                    <a onClick={() => setIsOpen(false)}>
                      <Text variant="small" className={styles.listItemOverlay}>
                        Projects
                      </Text>
                    </a>
                  </Link>
                  <Link href="/#skills">
                    <a onClick={() => setIsOpen(false)}>
                      <Text variant="small" className={styles.listItemOverlay}>
                        Skills
                      </Text>
                    </a>
                  </Link>
                  <Link href="/#about">
                    <a onClick={() => setIsOpen(false)}>
                      <Text variant="small" className={styles.listItemOverlay}>
                        About
                      </Text>
                    </a>
                  </Link>
                  <Link href="/#contact">
                    <a onClick={() => setIsOpen(false)}>
                      <Text variant="small" className={styles.listItemOverlay}>
                        Contact
                      </Text>
                    </a>
                  </Link>
                </ul>
              </div>
              <div className={styles.footerOverlay}>
                <Text variant="large" fontWeight="medium">
                  Let&apos;s connect
                </Text>
                <div className={styles.socialMediaButtons}>
                  <a
                    href="https://www.linkedin.com/in/pim-van-den-bosch/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className={styles.socialMediaButton}>
                      <FaLinkedinIn />
                    </button>
                  </a>

                  <a
                    href="https://github.com/vondia"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className={styles.socialMediaButton}>
                      <FaGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
