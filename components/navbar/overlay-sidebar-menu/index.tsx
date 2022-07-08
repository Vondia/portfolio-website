import React, { FC, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import { Text } from "../../ui/typograhpy/Text";
import Link from "next/link";
import * as styles from "./styles";

type OverlaySidebarMenuProps = {};

export const OverlaySidebarMenu: FC<OverlaySidebarMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={styles.hideOnDesktop}>
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
              <div>
                <div className={styles.topOverlay}>
                  <div>
                    <Image
                      src="/../public/assets/pimLogo.png"
                      alt=""
                      width="60"
                      height="60"
                    />
                  </div>
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
                    Let&apos;s build something legendary together
                  </Text>
                </div>
                <div className={styles.parentListItemOverlay}>
                  <ul>
                    <Link href="/">
                      <a>
                        <Text
                          variant="small"
                          className={styles.listItemOverlay}
                        >
                          Home
                        </Text>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Text
                          variant="small"
                          className={styles.listItemOverlay}
                        >
                          About
                        </Text>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Text
                          variant="small"
                          className={styles.listItemOverlay}
                        >
                          Skills
                        </Text>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Text
                          variant="small"
                          className={styles.listItemOverlay}
                        >
                          Projects
                        </Text>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Text
                          variant="small"
                          className={styles.listItemOverlay}
                        >
                          Content
                        </Text>
                      </a>
                    </Link>
                  </ul>
                  <div className={styles.footerOverlay}>
                    <Text variant="large" fontWeight="medium">
                      Let&apos;s connect
                    </Text>
                    <div className={styles.socialMediaButtons}>
                      <div className={styles.socialMediaButton}>
                        <FaLinkedinIn />
                      </div>
                      <div className={styles.socialMediaButton}>
                        <FaGithub />
                      </div>
                      <div className={styles.socialMediaButton}>
                        <AiOutlineMail />
                      </div>
                      <div className={styles.socialMediaButton}>
                        <BsFillPersonLinesFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
