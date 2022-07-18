import React, { FC } from "react";
import { css } from "linaria";
import { parse, theme } from "../config/theme";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import Image from "next/image";

type AboutProps = {};

export const About: FC<AboutProps> = () => {
  return (
    <div id="about" className={container}>
      <div className={parent}>
        <div className={first}>
          <Text variant="large" color="purple" className={subTitle}>
            About
          </Text>
          <Heading variant="h3" className={title}>
            Who I Am
          </Heading>
          <Text variant="regular" color="shade600" className={paragraphs}>
            So I quit my job in the midst of a Pandemic to start an intense
            full-time boot camp to become a developer... crazy right?
            Here&apos;s my story:
          </Text>
          <br />
          <Text variant="regular" color="shade600" className={paragraphs}>
            After having worked in the broadcasting industry for the better part
            of a decade (8 years). I had to do a new morning show, and while
            doing it I noticed I was excited learning something new again. And
            rightaway realised I hadn&apos;t felt that in a while. I had worked
            with so many hard- and software packets which always introduced
            something new. But at this point in my career I was mostly done
            learning. And that was the instagator to make me think about my
            future. Quickly came the conclusion that I was ready for a new
            challenge. And coding had always intrigued me, on some jobs right
            before a show/football game when something broke down. I had tried
            to look at the code and see if I could fix the problem. Which
            sometimes was the case but more often it wasn&apos;t that easy to
            fix. So I decided to go out and learn how to do this magic, looking
            for a place to learn how to code I came across Codaisseur. This
            seemed like the perfect fit for what i was looking for, a fulltime
            tough bootcamp. Where I would learn a ton in a (relative) short time
            (3 months) to jumpstart my new career.
          </Text>
          <br />
          <Text variant="regular" color="shade600" className={paragraphs}>
            Over the course of 3 months I learned a lot about all sorts of
            marvelous technologies (from React and Redux to Express and
            PostgreSQL and much more). After graduating I had talks with a lot
            of companies who did a lot of different things. It was tough for me
            to fully know what I wanted yet it all seemed cool! The first job i
            took was as a consultant, my idea was to spend 50% of the time
            coding and 50% of the time interacting with humans. Which seemed
            like a great way to further explore where this journey would take
            me. After the first trial month though I had discovered that there
            was a lot less coding then I had imagined and I missed it. So it
            wasn&apos;t the right fit for me. In this period it hit me: the
            wrong decision let to the right perspective. I learned two important
            things in that month; I knew what I didn&apos;t want and after
            careful consideration i knew what I DID want. I went out to search
            for a Digital Agency because I wanted to be a web/app developer.
            This is when I came across and joined Reversed Digital, a small
            Digital Agency located in Utrecht. I&apos;ve been working here for
            over a year now and I&apos;ve learned so so much. I can&apos;t wait
            to keep improving my skills because this is what I love to do and I
            can&apos;t wait to share some of the cool stuff I worked on with
            you.
          </Text>
          <br />
          <Text variant="regular" color="shade600" className={paragraphs}>
            Check out some of my latest projects here.
          </Text>
        </div>
        <div className={image}>
          <Image
            className={photo}
            src="/assets/pim.jpg"
            alt="photo of myself"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

const container = parse(
  {
    display: "flex",
    alignItems: "center",
    py: "64",
    width: "100%",
    p: "8",
  },
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      height: 100vh;
    }
  `
);

const parent = parse(
  {
    m: "auto",
  },
  css`
    max-width: 1240px;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 2rem;
    }
  `
);

const first = css`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    grid-column: span 2 / span 2;
  }
`;

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

const paragraphs = parse({
  py: "8",
});

const image = parse(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    m: "auto",
    p: "24",
  },
  css`
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-color: ${theme.colors.shade400};
    border-radius: 0.75rem;
    transition: all 0.2s ease-in;
    border-radius: 4px;

    @media screen and (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `
);

const photo = css`
  border-radius: 0.75rem;
`;
