import React, { FC } from "react";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Container } from "./ui/Container";
import * as styles from "./Main.styles";

export const Main: FC = () => {
  return (
    <Container id="home" className={styles.parent}>
      <div className={styles.container}>
        <div>
          <Heading variant="h1" color="shade700" className={styles.headingText}>
            Hi, I&apos;m{" "}
            <div className={styles.pimText}>
              <Heading variant="h1" as="h2" color="blue">
                Pim
              </Heading>
              <Heading variant="h1" as="h2" color="blue">
                Pim
              </Heading>
            </div>
          </Heading>
          <Heading
            variant="h1"
            color="shade700"
            className={styles.headingTextsecondLine}
          >
            A Front-end Web Developer
          </Heading>
          <Text className={styles.bottomText} variant="large" color="shade600">
            I&apos;m a front-end web developer who loves bringing beautiful
            designs to life. Currently I&apos;m focused on building responsive
            front-end web applications while continuing to improve my skills.
          </Text>
          <div className={styles.buttonContainer}>
            <a
              href="https://www.linkedin.com/in/pim-van-den-bosch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className={styles.button}>
                <FaLinkedinIn />
              </button>
            </a>

            <a
              href="https://github.com/vondia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className={styles.button}>
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
