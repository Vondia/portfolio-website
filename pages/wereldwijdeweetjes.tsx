import React from "react";
import { css } from "linaria";
import { rgba } from "polished";
import { parse, theme } from "../config/theme";
import type { NextPage } from "next";
import Image from "next/image";
import { Heading } from "../components/ui/typograhpy/Heading";
import { Text } from "../components/ui/typograhpy/Text";
import { RiRadioButtonFill } from "react-icons/ri";
import { Container } from "../components/ui/Container";

const WereldwijdeWeetjes: NextPage = () => {
  return (
    <div className={container}>
      <div className={parent}>
        <div className={overlay} />
        <Image
          className={image}
          src="/assets/projects/wereldwijdeweetjes.nl.png"
          alt="image of wereldwijde weetjes' homepage"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Container className={mainTextContainer}>
        <div>
          <Heading variant="h3" mb="16">
            Wereldwijde Weetjes
          </Heading>
          <Text variant="large">
            Wereldwijde Weetjes is my portfolio project at the end of
            Codaisseur. It was an idea I had while talking to my mother,
            she&apos;s a primary school teacher. And she noticed she had a
            &apos;dead&apos; period right before breaks. Where the kids would be
            finished with their work but there wouldn&apos;t be enough time to
            start a new subject. And since she loves to travel herself she
            thought it would be cool to teach the children something about the
            world. And then more specifically a place she visited in one of her
            holidays. She is great with Prezi but she wanted a platform she
            could open, which contained all her Prezi&apos;s. And therefor she
            could easily open on her board and share an adventure with the
            class. The challenge for me was to build this and keep it as simple
            as possible becuase she&apos;s not a super technical person. So she
            would have to be able to log in, to some sort of admin environment
            where she could easilly add new Prezi&apos;s and add a question
            about that Prezi to test the class at the end of they paid
            attention.
          </Text>
        </div>
        <div className={technologiesContainer}>
          <div className={padding}>
            <Text
              variant="large"
              fontWeight="bold"
              className={technologiesText}
            >
              Technologies
            </Text>
            <ul className={list}>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    React
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Redux
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://axios-http.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Axios
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://react-bootstrap.netlify.app/getting-started/introduction/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    React-Bootstrap
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://nodejs.org/en/about/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Node JS
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Express
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://sequelize.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    Sequelize
                  </a>
                </Text>
              </li>
              <li className={listItemPadding}>
                <Text variant="large" className={alignList}>
                  <RiRadioButtonFill color="#454A54" />
                  <a
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="noreferrer"
                    className={technologiesListItems}
                  >
                    PostgreSQL database
                  </a>
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

const container = parse({ width: "100%" });

const parent = parse(
  {
    position: "relative",
  },
  css`
    width: 100vw;
    height: 30vh;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 50vh;
    }
  `
);

const overlay = parse(
  {
    position: "absolute",
    width: "100%",
  },
  css`
    top: 0;
    left: 0;
    height: 30vh;
    z-index: 2;
    background: ${rgba(theme.colors.backgroundDark, 0.7)};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 50vh;
    }
  `
);

const image = parse(
  {
    position: "absolute",
  },
  css`
    z-index: 1;
  `
);

const mainTextContainer = parse(
  {
    mx: "auto",
    pt: "32",
    mb: "16",
    display: "grid",
    alignItems: "center",
  },
  css`
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media screen and (min-width: ${theme.breakpoints.small}) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: 2fr 1fr;
    }
  `
);

const technologiesContainer = css`
  min-width: 16rem;
  width: fit-content;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.75rem;
  white-space: nowrap;
  justify-self: center;
`;

const padding = parse({
  p: "16",
});

const technologiesText = parse({
  pb: "8",
  textAlign: "center",
});

const technologiesListItems = parse(
  {
    ml: "4",
    position: "relative",
  },
  css`
    background-image: linear-gradient(
      to right,
      #6a47ff,
      #82a1f6 50%,
      #454a54 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;

    &:before {
      content: "";
      background-image: linear-gradient(to right, #6a47ff, #82a1f6);
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        background-position: 0;
        &:before {
          width: 100%;
        }
      }
    }
  `
);

const listItemPadding = parse({
  py: "8",
});

const alignList = parse({
  display: "flex",
  alignItems: "center",
});

const list = parse(
  {
    display: "grid",
  },
  css`
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr;
    }
  `
);

export default WereldwijdeWeetjes;
