import React, { FC, useState } from "react";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import Image from "next/image";
import { Container } from "./ui/Container";
import * as Switch from "@radix-ui/react-switch";
import * as styles from "./About.styles";

type AboutProps = {};

export const About: FC<AboutProps> = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container id="about" className={styles.container}>
      <div className={styles.parent}>
        <div>
          <div className={styles.headerParent}>
            <div>
              <Heading variant="h3" className={styles.title}>
                Who I Am
              </Heading>
            </div>
            <div className={styles.bionicReadingDiv}>
              <Text variant="small" color="shade600" mr="4">
                <a className={styles.bionicLink}>Bionic reading</a> activated:
              </Text>
              <Switch.Root
                className={styles.styledSwitch}
                checked={checked}
                onCheckedChange={setChecked}
              >
                <Switch.Thumb className={styles.styledThumb} />
              </Switch.Root>
            </div>
          </div>
          {checked === false ? (
            <div>
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                So I quit my job in the midst of a Pandemic to start an intense
                full-time boot camp to become a developer... crazy right?
                Here&apos;s my story:
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                After having worked in the broadcasting industry for the better
                part of a decade (8 years). I had to do a new morning show, and
                while doing it I noticed I was excited learning something new
                again. And rightaway realised I hadn&apos;t felt that in a
                while. I had worked with so many hard- and software which always
                introduced something new. But at this point in my career I was
                mostly done learning. And that was the main instagator to make
                me think about my future. Quickly came to the conclusion that I
                was ready for a new challenge. And coding had always intrigued
                me, on some jobs right before a show/football game when
                something broke down. I had tried to look at the code and see if
                I could fix the problem. Which sometimes was the case but more
                often it wasn&apos;t that easy to fix. So I decided to go out
                and learn how to do this magic, looking for a place to learn how
                to code I came across Codaisseur. This seemed like the perfect
                fit for what I was looking for, a full time though bootcamp.
                Where I would learn a ton in a (relative) short time (3 months)
                to jumpstart my new career.
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                Over the course of 3 months I learned a lot about all sorts of
                marvelous technologies (from React and Redux to Express and
                PostgreSQL and much more). After graduating I had talks with a
                lot of companies who did a lot of different things. It was tough
                for me to fully know what I wanted yet it all seemed cool! The
                first job i took was as a consultant, my idea was to spend 50%
                of the time coding and 50% of the time interacting with humans.
                Which seemed like a great way to further explore where this
                journey would take me. After the first trial month though I had
                discovered that there was a lot less coding then I had imagined
                and I missed it. So it wasn&apos;t the right fit for me. In this
                period it hit me: the wrong decision let to the right
                perspective. I learned two important things in that month; I
                knew what I didn&apos;t want and after careful consideration i
                knew what I DID want. I went out to search for a Digital Agency
                because I wanted to be a web/app developer. This is when I came
                across and joined Reversed Digital, a small Digital Agency
                located in Utrecht. I&apos;ve been working here for over a year
                now and I&apos;ve learned so so much. I can&apos;t wait to keep
                improving my skills because this is what I love to do and I
                can&apos;t wait to share some of the cool stuff I worked on with
                you.
              </Text>
            </div>
          ) : (
            <div>
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                <strong className={styles.bionicReading}>S</strong>o I{" "}
                <strong className={styles.bionicReading}>qui</strong>t{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>jo</strong>b{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>mid</strong>st{" "}
                <strong className={styles.bionicReading}>o</strong>f a{" "}
                <strong className={styles.bionicReading}>Pandem</strong>ic{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>sta</strong>rt{" "}
                <strong className={styles.bionicReading}>a</strong>n{" "}
                <strong className={styles.bionicReading}>inten</strong>se{" "}
                <strong className={styles.bionicReading}>ful</strong>l-
                <strong className={styles.bionicReading}>tim</strong>e{" "}
                <strong className={styles.bionicReading}>bootca</strong>mp{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>beco</strong>me a{" "}
                <strong className={styles.bionicReading}>develop</strong>er...{" "}
                <strong className={styles.bionicReading}>cra</strong>zy{" "}
                <strong className={styles.bionicReading}>rig</strong>ht?{" "}
                <strong className={styles.bionicReading}>Her</strong>e&apos;s{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>sto</strong>ry:
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                <strong className={styles.bionicReading}>Aft</strong>er{" "}
                <strong className={styles.bionicReading}>havi</strong>ng{" "}
                <strong className={styles.bionicReading}>work</strong>ed{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>broadcasti</strong>ng{" "}
                <strong className={styles.bionicReading}>indust</strong>ry{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>bett</strong>er
                <strong className={styles.bionicReading}>par</strong>t{" "}
                <strong className={styles.bionicReading}>o</strong>f a{" "}
                <strong className={styles.bionicReading}>deca</strong>de (8{" "}
                <strong className={styles.bionicReading}>yea</strong>rs). I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>d</strong>o a{" "}
                <strong className={styles.bionicReading}>ne</strong>w{" "}
                <strong className={styles.bionicReading}>morni</strong>ng{" "}
                <strong className={styles.bionicReading}>sho</strong>w,{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>whi</strong>le{" "}
                <strong className={styles.bionicReading}>doi</strong>ng{" "}
                <strong className={styles.bionicReading}>i</strong>t I{" "}
                <strong className={styles.bionicReading}>notic</strong>ed I{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>excit</strong>ed{" "}
                <strong className={styles.bionicReading}>learni</strong>ng{" "}
                <strong className={styles.bionicReading}>somethi</strong>ng{" "}
                <strong className={styles.bionicReading}>ne</strong>w
                <strong className={styles.bionicReading}>aga</strong>in.{" "}
                <strong className={styles.bionicReading}>An</strong>d{" "}
                <strong className={styles.bionicReading}>rightaw</strong>ay{" "}
                <strong className={styles.bionicReading}>realis</strong>ed I{" "}
                <strong className={styles.bionicReading}>ha</strong>d
                <strong className={styles.bionicReading}>n</strong>&apos;t{" "}
                <strong className={styles.bionicReading}>fel</strong>t{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>i</strong>n a{" "}
                <strong className={styles.bionicReading}>whi</strong>le. I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>work</strong>ed{" "}
                <strong className={styles.bionicReading}>wit</strong>h{" "}
                <strong className={styles.bionicReading}>s</strong>o{" "}
                <strong className={styles.bionicReading}>man</strong>y{" "}
                <strong className={styles.bionicReading}>har</strong>d-{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>softwa</strong>re{" "}
                <strong className={styles.bionicReading}>whi</strong>ch{" "}
                <strong className={styles.bionicReading}>alwa</strong>ys{" "}
                <strong className={styles.bionicReading}>introduc</strong>ed{" "}
                <strong className={styles.bionicReading}>somethi</strong>ng{" "}
                <strong className={styles.bionicReading}>ne</strong>w.{" "}
                <strong className={styles.bionicReading}>Bu</strong>t{" "}
                <strong className={styles.bionicReading}>a</strong>t{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>poi</strong>nt{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>care</strong>er I{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>most</strong>ly{" "}
                <strong className={styles.bionicReading}>don</strong>e{" "}
                <strong className={styles.bionicReading}>learni</strong>ng.{" "}
                <strong className={styles.bionicReading}>An</strong>d{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>mai</strong>n{" "}
                <strong className={styles.bionicReading}>instagat</strong>or{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>mak</strong>e{" "}
                <strong className={styles.bionicReading}>m</strong>e{" "}
                <strong className={styles.bionicReading}>thi</strong>nk{" "}
                <strong className={styles.bionicReading}>abo</strong>ut{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>futu</strong>re.{" "}
                <strong className={styles.bionicReading}>Quick</strong>ly{" "}
                <strong className={styles.bionicReading}>cam</strong>e{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>conclusi</strong>on{" "}
                <strong className={styles.bionicReading}>tha</strong>t I{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>rea</strong>dy{" "}
                <strong className={styles.bionicReading}>fo</strong>r a{" "}
                <strong className={styles.bionicReading}>ne</strong>w{" "}
                <strong className={styles.bionicReading}>challen</strong>ge.{" "}
                <strong className={styles.bionicReading}>An</strong>d{" "}
                <strong className={styles.bionicReading}>codi</strong>ng{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>alwa</strong>ys{" "}
                <strong className={styles.bionicReading}>intrigu</strong>ed{" "}
                <strong className={styles.bionicReading}>m</strong>e,{" "}
                <strong className={styles.bionicReading}>o</strong>n{" "}
                <strong className={styles.bionicReading}>som</strong>e{" "}
                <strong className={styles.bionicReading}>job</strong>s{" "}
                <strong className={styles.bionicReading}>rig</strong>ht{" "}
                <strong className={styles.bionicReading}>befo</strong>re a{" "}
                <strong className={styles.bionicReading}>sho</strong>w/
                <strong className={styles.bionicReading}>footba</strong>ll{" "}
                <strong className={styles.bionicReading}>gam</strong>e{" "}
                <strong className={styles.bionicReading}>whe</strong>n{" "}
                <strong className={styles.bionicReading}>somethi</strong>ng{" "}
                <strong className={styles.bionicReading}>bro</strong>ke{" "}
                <strong className={styles.bionicReading}>dow</strong>n. I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>tri</strong>ed{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>loo</strong>k{" "}
                <strong className={styles.bionicReading}>a</strong>t{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>cod</strong>e{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>se</strong>e{" "}
                <strong className={styles.bionicReading}>i</strong>f I{" "}
                <strong className={styles.bionicReading}>cou</strong>ld{" "}
                <strong className={styles.bionicReading}>fi</strong>x{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>probl</strong>em.{" "}
                <strong className={styles.bionicReading}>Whi</strong>ch{" "}
                <strong className={styles.bionicReading}>sometime</strong>es{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>cas</strong>e{" "}
                <strong className={styles.bionicReading}>bu</strong>t{" "}
                <strong className={styles.bionicReading}>mor</strong>e{" "}
                <strong className={styles.bionicReading}>oft</strong>en{" "}
                <strong className={styles.bionicReading}>i</strong>t{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>n</strong>&apos;t{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>eas</strong>y{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>fi</strong>x.{" "}
                <strong className={styles.bionicReading}>S</strong>o I{" "}
                <strong className={styles.bionicReading}>decid</strong>ed{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>g</strong>o{" "}
                <strong className={styles.bionicReading}>ou</strong>t{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>lea</strong>rn{" "}
                <strong className={styles.bionicReading}>ho</strong>w{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>d</strong>o{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>mag</strong>ic,{" "}
                <strong className={styles.bionicReading}>looki</strong>ng{" "}
                <strong className={styles.bionicReading}>fo</strong>r a{" "}
                <strong className={styles.bionicReading}>pla</strong>ce{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>lea</strong>rn{" "}
                <strong className={styles.bionicReading}>ho</strong>w{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>cod</strong>e I{" "}
                <strong className={styles.bionicReading}>cam</strong>e{" "}
                <strong className={styles.bionicReading}>acro</strong>ss{" "}
                <strong className={styles.bionicReading}>Codaisse</strong>ur.{" "}
                <strong className={styles.bionicReading}>Thi</strong>s{" "}
                <strong className={styles.bionicReading}>seem</strong>ed{" "}
                <strong className={styles.bionicReading}>lik</strong>e{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>perfe</strong>ct{" "}
                <strong className={styles.bionicReading}>fi</strong>t{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>wha</strong>t I{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>looki</strong>ng{" "}
                <strong className={styles.bionicReading}>fo</strong>r, a{" "}
                <strong className={styles.bionicReading}>ful</strong>l{" "}
                <strong className={styles.bionicReading}>tim</strong>e{" "}
                <strong className={styles.bionicReading}>thou</strong>gh{" "}
                <strong className={styles.bionicReading}>bootca</strong>mp.{" "}
                <strong className={styles.bionicReading}>Whe</strong>re I{" "}
                <strong className={styles.bionicReading}>wou</strong>ld{" "}
                <strong className={styles.bionicReading}>lea</strong>rn a{" "}
                <strong className={styles.bionicReading}>to</strong>n{" "}
                <strong className={styles.bionicReading}>i</strong>n a (
                <strong className={styles.bionicReading}>relati</strong>ve){" "}
                <strong className={styles.bionicReading}>sho</strong>rt{" "}
                <strong className={styles.bionicReading}>tim</strong>e (3{" "}
                <strong className={styles.bionicReading}>mont</strong>hs){" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>jumpsta</strong>rt{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>ne</strong>w{" "}
                <strong className={styles.bionicReading}>care</strong>er.
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                Over the course of 3 months I learned a lot about all sorts of
                marvelous technologies (from React and Redux to Express and
                PostgreSQL and much more). After graduating I had talks with a
                lot of companies who did a lot of different things. It was tough
                for me to fully know what I wanted yet it all seemed cool! The
                first job i took was as a consultant, my idea was to spend 50%
                of the time coding and 50% of the time interacting with humans.
                Which seemed like a great way to further explore where this
                journey would take me. After the first trial month though I had
                discovered that there was a lot less coding then I had imagined
                and I missed it. So it wasn&apos;t the right fit for me. In this
                period it hit me: the wrong decision let to the right
                perspective. I learned two important things in that month; I
                knew what I didn&apos;t want and after careful consideration i
                knew what I DID want. I went out to search for a Digital Agency
                because I wanted to be a web/app developer. This is when I came
                across and joined Reversed Digital, a small Digital Agency
                located in Utrecht. I&apos;ve been working here for over a year
                now and I&apos;ve learned so so much. I can&apos;t wait to keep
                improving my skills because this is what I love to do and I
                can&apos;t wait to share some of the cool stuff I worked on with
                you.
              </Text>
            </div>
          )}
        </div>
        <div className={styles.image}>
          <Image
            className={styles.photo}
            src="/assets/pim.jpg"
            alt="photo of myself"
            width={400}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};
