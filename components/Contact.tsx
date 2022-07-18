import React, { FC, useState } from "react";
import { css } from "linaria";
import { parse, theme } from "../config/theme";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { rem } from "polished";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

type ContactProps = {};

export const Contact: FC<ContactProps> = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  console.log(handleSubmit);
  return (
    <div id="contact" className={parent}>
      <div className={container}>
        <Text variant="large" color="purple" className={subTitle}>
          Contact
        </Text>
        <Heading variant="h3" className={title}>
          Get in touch
        </Heading>
        <div className={grid}>
          {/* left */}
          <div className={leftContainer}>
            <div className={left}>
              <div>
                <Image
                  src="/assets/contact.jpg"
                  alt="/"
                  height="427px"
                  width="640px"
                  className={image}
                />
              </div>
              <div>
                <Heading variant="h3" className={myName}>
                  Pim van den Bosch
                </Heading>
                <Text variant="regular">Front-End Developer</Text>
                <Text variant="regular" className={myNameDescription}>
                  Currently I&apos;m still employed by{" "}
                  <a href="https://reverseddigital.com/">Reversed Digital</a>,
                  but I&apos;m looking for a bigger digital agency to further
                  develop my skills.
                </Text>
              </div>
              <div>
                <Text variant="regular" className={footerLeft}>
                  Connect with me
                </Text>
                <div className={icons}>
                  <div className={button}>
                    <FaLinkedinIn />
                  </div>
                  <div className={button}>
                    <FaGithub />
                  </div>
                  <div className={button}>
                    <AiOutlineMail />
                  </div>
                  <div className={button}>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className={rightContainer}>
            <div className={formContainer}>
              <form
                onSubmit={handleSubmit}
                action="https://getform.io/f/f494105f-320b-4745-9725-4464c628107e"
                method="POST"
              >
                <div className={formGrid}>
                  <div className={formLine}>
                    <label className={label}>Name</label>
                    <input
                      className={input}
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={formLine}>
                    <label className={label}>Phone Number</label>
                    <input
                      className={input}
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className={inputsBellowPhoneNumber}>
                  <label className={label}>Email</label>
                  <input
                    className={input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={inputsBellowPhoneNumber}>
                  <label className={label}>Subject</label>
                  <input
                    className={input}
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className={inputsBellowPhoneNumber}>
                  <label className={label}>Messages</label>
                  <textarea
                    className={messageInput}
                    rows={10}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className={sendButton}>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={moveToTopContainer}>
          <Link href="/">
            <div className={moveToTopIcon}>
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const parent = parse(
  {
    width: "100%",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 100vh;
    }
  `
);

const container = parse(
  {
    m: "auto",
    px: "8",
    py: "16",
    width: "100%",
  },
  css`
    max-width: 1240px;
  `
);

const subTitle = parse(
  {
    py: "16",
  },
  css`
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `
);

const title = parse({
  py: "16",
});

const grid = parse(
  {
    display: "grid",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
      grid-gap: 2rem;
    }
  `
);

const leftContainer = parse(
  {
    width: "100%",
    height: "100%",
    p: "16",
  },
  css`
    grid-column: span 3 / span 3;
    box-shadow: 0 10px 15px -3px rgb(66 69 74 / 0.1),
      0 4px 6px -4px rgb(66 69 74 / 0.1);
    /* --tw-shadow-color: ${theme.colors.shade400}; */
    border-radius: 0.75rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      grid-column: span 2 / span 2;
    }
  `
);

const left = parse(
  {
    height: "100%",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.large}) {
      padding: 1rem;
    }
  `
);

const image = css`
  border-radius: 0.75rem;
  transition: all 0.3s ease-in;

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const myName = parse({
  py: "8",
});

const myNameDescription = parse({
  py: "16",
});

const footerLeft = parse(
  {
    pt: "32",
  },
  css`
    text-transform: uppercase;
  `
);

const icons = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  css``
);

const button = parse(
  {
    p: "24",
    color: "purple",
  },
  css`
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  `
);

const rightContainer = parse(
  {
    width: "100%",
    height: "auto",
  },
  css`
    grid-column: span 3 / span 3;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    border-radius: 0.75rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      padding: 1rem;
    }
  `
);

const formContainer = parse({
  p: "16",
});

const formGrid = parse(
  {
    display: "grid",
    width: "100%",
    py: "8",
  },
  css`
    grid-gap: 1rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;
    }
  `
);

const formLine = parse(
  {
    display: "flex",
  },
  css`
    flex-direction: column;
  `
);

const label = parse(
  {
    py: "8",
  },
  css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
    font-size: ${rem(16)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(14)};
    }
  `
);

const input = parse(
  {
    display: "flex",
    p: "12",
  },
  css`
    border: 2px solid ${theme.colors.shade300};
    border-radius: 0.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  `
);

const messageInput = parse(
  {
    p: "12",
  },
  css`
    border: 2px solid ${theme.colors.shade300};
    border-radius: 0.5rem;
  `
);

const inputsBellowPhoneNumber = parse(
  {
    display: "flex",
    py: "8",
  },
  css`
    flex-direction: column;
  `
);

const sendButton = parse(
  {
    p: "16",
    color: "shade100",
    width: "100%",
    mt: "16",
    position: "relative",
  },
  css`
    background: ${theme.gradients.default};
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 1;

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: ${theme.gradients.hover};
      transition-property: opacity;
      transition-duration: 0.4s;
      opacity: 0;
    }

    &:disabled {
      background: ${theme.colors.shade500};
      pointer-events: none;
    }

    @media screen and (hover: hover) and (pointer: fine) {
      &:not(:disabled) {
        &:hover {
          &:before {
            opacity: 1;
          }
        }
      }
    }
  `
);

const moveToTopContainer = parse(
  {
    display: "flex",
    justifyContent: "center",
    py: "64",
  },
  css``
);

const moveToTopIcon = parse(
  {
    p: "24",
    color: "purple",
    display: "flex",
  },
  css`
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    transition: all 0.2s ease-in;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  `
);
