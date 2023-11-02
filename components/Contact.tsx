import React, { FC, useState } from "react";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import * as styles from "./Contact.styles";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { Input } from "./ui/form/Input";
import { Span } from "./ui/typograhpy/Span";
import { TextArea } from "./ui/form/TextArea";
import { Container } from "./ui/Container";

type ContactProps = {};

export const Contact: FC<ContactProps> = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   e: React.FormEvent<HTMLInputElement>
  const handleSubmit = () => {
    setName(name);
    setPhone(phone);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
  };
  return (
    <Container id="contact" className={styles.parent}>
      <div className={styles.container}>
        <Heading variant="h3" className={styles.title}>
          Get in touch
        </Heading>
        <div className={styles.grid}>
          {/* left */}
          <div className={styles.leftContainer}>
            <div className={styles.left}>
              <div>
                <Image
                  src="/assets/contact.jpg"
                  alt="/"
                  height="427px"
                  width="640px"
                  className={styles.image}
                />
              </div>
              <div>
                <Heading variant="h3" className={styles.myName}>
                  Pim van den Bosch
                </Heading>
                <Text variant="regular">Front-End Developer</Text>
                <Text variant="regular" className={styles.myNameDescription}>
                  I&apos;m currently working at{" "}
                  <a
                    href="https://www.incentro.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    Incentro
                  </a>
                  . As Front-End developer I&apos;ll keep you posted on my work
                  there. To contact me you can connect with me on LinkedIn or
                  send me a message via the form.
                </Text>
              </div>
              <div>
                <div className={styles.icons}>
                  <a
                    href="https://www.linkedin.com/in/pim-van-den-bosch/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.button}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/vondia"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.button}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className={styles.rightContainer}>
            <div className={styles.formContainer}>
              <form
                onSubmit={handleSubmit}
                action="https://getform.io/f/f494105f-320b-4745-9725-4464c628107e"
                method="POST"
              >
                <div className={styles.formGrid}>
                  <div className={styles.formLine}>
                    <Input
                      status="disabled"
                      type="text"
                      label={<Span variant="input-label">Name</Span>}
                      name="name"
                      value={name}
                      required={true}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.formLine}>
                    <Input
                      status="disabled"
                      name="phone"
                      type="tel"
                      value={phone}
                      label="Phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.inputsBellowPhoneNumber}>
                  <Input
                    status="disabled"
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputsBellowPhoneNumber}>
                  <Input
                    status="disabled"
                    type="text"
                    name="subject"
                    value={subject}
                    label="Subject"
                    required={true}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className={styles.inputsBellowPhoneNumber}>
                  <TextArea
                    status="disabled"
                    rows={10}
                    name="message"
                    value={message}
                    label="Message"
                    required={true}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.sendButton} disabled>
                  Send message
                </button>
              </form>
              <Text
                variant="micro"
                color="shade500"
                style={{ marginTop: "1rem" }}
              >
                *Temporarely disabled the form due to spam, don&apos;t hesitate to
                contact me via LinkedIn.
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.moveToTopContainer}>
          <Link href="/">
            <a className={styles.moveToTopIcon}>
              <HiOutlineChevronDoubleUp size={30} />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};
