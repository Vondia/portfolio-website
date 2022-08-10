import React, { FC, useState } from "react";
import { Text } from "./ui/typograhpy/Text";
import { Heading } from "./ui/typograhpy/Heading";
import Image from "next/image";
import { Container } from "./ui/Container";
import * as Switch from "@radix-ui/react-switch";
import * as styles from "./About.styles";
import { useInView } from "react-intersection-observer";

type AboutProps = {};

export const About: FC<AboutProps> = () => {
  const [viewRef, inView] = useInView();
  const [viewRef2, inView2] = useInView();
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
                <a
                  href="https://www.howtogeek.com/807981/what-is-bionic-reading-and-how-do-you-use-it/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bionicLink}
                >
                  Bionic reading
                </a>{" "}
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
                first job I took was as a consultant, the idea was to spend 50%
                of the time coding and 50% of the time interacting with humans.
                Which seemed like a great way to further explore where this
                journey would take me. After the first trial month though I had
                discovered that there was a lot less coding then I had imagined
                and I missed it. So it wasn&apos;t the right fit for me. In this
                period it hit me: the wrong decision had led to the right
                perspective. I learned two important things in that month; I
                knew what I didn&apos;t want and after careful consideration I
                knew what I DID want. I went out to search for a Digital Agency
                because I wanted to be a web/app developer. This is when I came
                across and joined Reversed Digital, a small Digital Agency
                located in Utrecht. I&apos;ve been working here for over a year
                now and I&apos;ve learned so so much. However I did find that in
                order to make that next step. The best thing for me would be to
                join a bigger digital agency. The reason for this is that in
                this stage of my career I feel it would benefit me to get a bit
                more guidance. Are you (a part off) a medium/big sized digital
                agency? And looking for an eager junior front-ender? Don&apos;t
                hesitate and contact me bellow or via linkedin.
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
                <strong className={styles.bionicReading}>bett</strong>er{" "}
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
                <strong className={styles.bionicReading}>ne</strong>w{" "}
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
                <strong className={styles.bionicReading}>Ove</strong>r{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>cour</strong>se{" "}
                <strong className={styles.bionicReading}>o</strong>f 3{" "}
                <strong className={styles.bionicReading}>mont</strong>hs I{" "}
                <strong className={styles.bionicReading}>learn</strong>ed a{" "}
                <strong className={styles.bionicReading}>lo</strong>t{" "}
                <strong className={styles.bionicReading}>abo</strong>ut{" "}
                <strong className={styles.bionicReading}>al</strong>l{" "}
                <strong className={styles.bionicReading}>sor</strong>ts{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>marvelo</strong>us{" "}
                <strong className={styles.bionicReading}>technologi</strong>es (
                <strong className={styles.bionicReading}>fro</strong>m{" "}
                <strong className={styles.bionicReading}>Rea</strong>ct{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>Red</strong>ux{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>Expre</strong>ss{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>PostgreS</strong>QL{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>muc</strong>h{" "}
                <strong className={styles.bionicReading}>mor</strong>e).{" "}
                <strong className={styles.bionicReading}>Aft</strong>er{" "}
                <strong className={styles.bionicReading}>graduati</strong>ng I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>tal</strong>ks{" "}
                <strong className={styles.bionicReading}>wit</strong>h a
                <strong className={styles.bionicReading}>lo</strong>t{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>compani</strong>es{" "}
                <strong className={styles.bionicReading}>wh</strong>o{" "}
                <strong className={styles.bionicReading}>di</strong>d a{" "}
                <strong className={styles.bionicReading}>lo</strong>t{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>differe</strong>nt{" "}
                <strong className={styles.bionicReading}>thin</strong>gs.{" "}
                <strong className={styles.bionicReading}>I</strong>t{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>tou</strong>gh for me{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>ful</strong>ly{" "}
                <strong className={styles.bionicReading}>kno</strong>w{" "}
                <strong className={styles.bionicReading}>wha</strong>t I{" "}
                <strong className={styles.bionicReading}>want</strong>ed{" "}
                <strong className={styles.bionicReading}>ye</strong>t{" "}
                <strong className={styles.bionicReading}>i</strong>t{" "}
                <strong className={styles.bionicReading}>al</strong>l{" "}
                <strong className={styles.bionicReading}>seem</strong>ed{" "}
                <strong className={styles.bionicReading}>coo</strong>l!{" "}
                <strong className={styles.bionicReading}>Th</strong>e{" "}
                <strong className={styles.bionicReading}>fir</strong>st{" "}
                <strong className={styles.bionicReading}>jo</strong>b I{" "}
                <strong className={styles.bionicReading}>too</strong>k{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>a</strong>s a{" "}
                <strong className={styles.bionicReading}>consulta</strong>nt,{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>ide</strong>a{" "}
                <strong className={styles.bionicReading}>wa</strong>s{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>spe</strong>nd{" "}
                <strong className={styles.bionicReading}>5</strong>0%{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>tim</strong>e{" "}
                <strong className={styles.bionicReading}>codi</strong>ng{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>5</strong>0%{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>tim</strong>e{" "}
                <strong className={styles.bionicReading}>interacti</strong>ng{" "}
                <strong className={styles.bionicReading}>wit</strong>h{" "}
                <strong className={styles.bionicReading}>huma</strong>ns.{" "}
                <strong className={styles.bionicReading}>Whi</strong>ch{" "}
                <strong className={styles.bionicReading}>seem</strong>ed{" "}
                <strong className={styles.bionicReading}>lik</strong>e a{" "}
                <strong className={styles.bionicReading}>gre</strong>at{" "}
                <strong className={styles.bionicReading}>wa</strong>y{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>furth</strong>er{" "}
                <strong className={styles.bionicReading}>explo</strong>re{" "}
                <strong className={styles.bionicReading}>whe</strong>re{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>journ</strong>ey{" "}
                <strong className={styles.bionicReading}>wou</strong>ld{" "}
                <strong className={styles.bionicReading}>tak</strong>e{" "}
                <strong className={styles.bionicReading}>m</strong>e.{" "}
                <strong className={styles.bionicReading}>Aft</strong>er{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>fir</strong>st{" "}
                <strong className={styles.bionicReading}>tri</strong>al{" "}
                <strong className={styles.bionicReading}>mon</strong>th{" "}
                <strong className={styles.bionicReading}>thou</strong>gh I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>discover</strong>ed{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>the</strong>re{" "}
                <strong className={styles.bionicReading}>wa</strong>s a{" "}
                <strong className={styles.bionicReading}>lo</strong>t{" "}
                <strong className={styles.bionicReading}>les</strong>s{" "}
                <strong className={styles.bionicReading}>codi</strong>ng{" "}
                <strong className={styles.bionicReading}>the</strong>n I{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>imagin</strong>ed{" "}
                <strong className={styles.bionicReading}>an</strong>d I{" "}
                <strong className={styles.bionicReading}>miss</strong>ed it.{" "}
                <strong className={styles.bionicReading}>S</strong>o{" "}
                <strong className={styles.bionicReading}>i</strong>t{" "}
                <strong className={styles.bionicReading}>wa</strong>s
                <strong className={styles.bionicReading}>n</strong>&apos;t{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>rig</strong>ht{" "}
                <strong className={styles.bionicReading}>fi</strong>t{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>m</strong>e.{" "}
                <strong className={styles.bionicReading}>I</strong>n{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>peri</strong>od{" "}
                <strong className={styles.bionicReading}>i</strong>t{" "}
                <strong className={styles.bionicReading}>hi</strong>t{" "}
                <strong className={styles.bionicReading}>m</strong>e:{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>wro</strong>ng{" "}
                <strong className={styles.bionicReading}>decisi</strong>on{" "}
                <strong className={styles.bionicReading}>ha</strong>d{" "}
                <strong className={styles.bionicReading}>le</strong>d{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>th</strong>e{" "}
                <strong className={styles.bionicReading}>rig</strong>ht{" "}
                <strong className={styles.bionicReading}>perspecti</strong>ve. I{" "}
                <strong className={styles.bionicReading}>learn</strong>ed{" "}
                <strong className={styles.bionicReading}>tw</strong>o{" "}
                <strong className={styles.bionicReading}>importa</strong>nt{" "}
                <strong className={styles.bionicReading}>thin</strong>gs{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>mon</strong>th; I{" "}
                <strong className={styles.bionicReading}>kne</strong>w{" "}
                <strong className={styles.bionicReading}>wha</strong>t I{" "}
                <strong className={styles.bionicReading}>didn</strong>&apos;t{" "}
                <strong className={styles.bionicReading}>wan</strong>t{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>aft</strong>er{" "}
                <strong className={styles.bionicReading}>caref</strong>ul{" "}
                <strong className={styles.bionicReading}>considerat</strong>ion
                I <strong className={styles.bionicReading}>kne</strong>w{" "}
                <strong className={styles.bionicReading}>wha</strong>t I{" "}
                <strong className={styles.bionicReading}>DI</strong>D{" "}
                <strong className={styles.bionicReading}>wan</strong>t. I{" "}
                <strong className={styles.bionicReading}>wen</strong>t{" "}
                <strong className={styles.bionicReading}>ou</strong>t{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>sear</strong>ch{" "}
                <strong className={styles.bionicReading}>fo</strong>r a{" "}
                <strong className={styles.bionicReading}>Digit</strong>al{" "}
                <strong className={styles.bionicReading}>Agen</strong>cy{" "}
                <strong className={styles.bionicReading}>becau</strong>se I{" "}
                <strong className={styles.bionicReading}>want</strong>ed{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>b</strong>e a{" "}
                <strong className={styles.bionicReading}>we</strong>b/
                <strong className={styles.bionicReading}>ap</strong>p{" "}
                <strong className={styles.bionicReading}>develop</strong>er.{" "}
                <strong className={styles.bionicReading}>Thi</strong>s{" "}
                <strong className={styles.bionicReading}>i</strong>s{" "}
                <strong className={styles.bionicReading}>whe</strong>n I{" "}
                <strong className={styles.bionicReading}>cam</strong>e{" "}
                <strong className={styles.bionicReading}>acro</strong>ss{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>join</strong>ed{" "}
                <strong className={styles.bionicReading}>Revers</strong>ed{" "}
                <strong className={styles.bionicReading}>Digit</strong>al, a{" "}
                <strong className={styles.bionicReading}>sma</strong>ll{" "}
                <strong className={styles.bionicReading}>Digit</strong>al{" "}
                <strong className={styles.bionicReading}>Agen</strong>cy{" "}
                <strong className={styles.bionicReading}>locat</strong>ed{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>Utrec</strong>ht.{" "}
                <strong className={styles.bionicReading}>I&apos;v</strong>e{" "}
                <strong className={styles.bionicReading}>bee</strong>n{" "}
                <strong className={styles.bionicReading}>worki</strong>ng{" "}
                <strong className={styles.bionicReading}>her</strong>e{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>ove</strong>r a{" "}
                <strong className={styles.bionicReading}>yea</strong>r{" "}
                <strong className={styles.bionicReading}>no</strong>w{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>I&apos;v</strong>e{" "}
                <strong className={styles.bionicReading}>learn</strong>ed{" "}
                <strong className={styles.bionicReading}>s</strong>o{" "}
                <strong className={styles.bionicReading}>s</strong>o{" "}
                <strong className={styles.bionicReading}>muc</strong>h.{" "}
                <strong className={styles.bionicReading}>Howev</strong>er I{" "}
                <strong className={styles.bionicReading}>di</strong>d{" "}
                <strong className={styles.bionicReading}>fin</strong>d{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>ord</strong>er{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>mak</strong>e{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>nex</strong>t{" "}
                <strong className={styles.bionicReading}>ste</strong>p.{" "}
                <strong className={styles.bionicReading}>Th</strong>e{" "}
                <strong className={styles.bionicReading}>bes</strong>t{" "}
                <strong className={styles.bionicReading}>thi</strong>ng{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>m</strong>e{" "}
                <strong className={styles.bionicReading}>wou</strong>ld{" "}
                <strong className={styles.bionicReading}>b</strong>e{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>joi</strong>n a{" "}
                <strong className={styles.bionicReading}>bigg</strong>er{" "}
                <strong className={styles.bionicReading}>digit</strong>al{" "}
                <strong className={styles.bionicReading}>agen</strong>cy.{" "}
                <strong className={styles.bionicReading}>Th</strong>e{" "}
                <strong className={styles.bionicReading}>reas</strong>on{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>i</strong>s{" "}
                <strong className={styles.bionicReading}>tha</strong>t{" "}
                <strong className={styles.bionicReading}>i</strong>n{" "}
                <strong className={styles.bionicReading}>thi</strong>s{" "}
                <strong className={styles.bionicReading}>sta</strong>ge{" "}
                <strong className={styles.bionicReading}>o</strong>f{" "}
                <strong className={styles.bionicReading}>m</strong>y{" "}
                <strong className={styles.bionicReading}>care</strong>er I{" "}
                <strong className={styles.bionicReading}>fee</strong>l{" "}
                <strong className={styles.bionicReading}>i</strong>t{" "}
                <strong className={styles.bionicReading}>wou</strong>ld{" "}
                <strong className={styles.bionicReading}>benef</strong>it{" "}
                <strong className={styles.bionicReading}>m</strong>e{" "}
                <strong className={styles.bionicReading}>t</strong>o{" "}
                <strong className={styles.bionicReading}>ge</strong>t a{" "}
                <strong className={styles.bionicReading}>bi</strong>t{" "}
                <strong className={styles.bionicReading}>mor</strong>e{" "}
                <strong className={styles.bionicReading}>guidan</strong>ce.{" "}
                <strong className={styles.bionicReading}>Ar</strong>e{" "}
                <strong className={styles.bionicReading}>yo</strong>u (a{" "}
                <strong className={styles.bionicReading}>par</strong>t{" "}
                <strong className={styles.bionicReading}>of</strong>f) a{" "}
                <strong className={styles.bionicReading}>medi</strong>um/
                <strong className={styles.bionicReading}>bi</strong>g{" "}
                <strong className={styles.bionicReading}>siz</strong>ed{" "}
                <strong className={styles.bionicReading}>digit</strong>al
                <strong className={styles.bionicReading}>agen</strong>cy?{" "}
                <strong className={styles.bionicReading}>An</strong>d{" "}
                <strong className={styles.bionicReading}>looki</strong>ng{" "}
                <strong className={styles.bionicReading}>fo</strong>r{" "}
                <strong className={styles.bionicReading}>a</strong>n{" "}
                <strong className={styles.bionicReading}>eag</strong>er{" "}
                <strong className={styles.bionicReading}>juni</strong>or{" "}
                <strong className={styles.bionicReading}>fro</strong>nt-
                <strong className={styles.bionicReading}>end</strong>er?{" "}
                <strong className={styles.bionicReading}>Don&apos;</strong>t
                <strong className={styles.bionicReading}>hesita</strong>te{" "}
                <strong className={styles.bionicReading}>an</strong>d{" "}
                <strong className={styles.bionicReading}>conta</strong>ct{" "}
                <strong className={styles.bionicReading}>m</strong>e{" "}
                <strong className={styles.bionicReading}>bell</strong>ow{" "}
                <strong className={styles.bionicReading}>o</strong>r{" "}
                <strong className={styles.bionicReading}>vi</strong>a{" "}
                <strong className={styles.bionicReading}>linked</strong>in.
              </Text>
            </div>
          )}
        </div>
        <div className={styles.images}>
          <div ref={viewRef}>
            <div className={styles.image} data-in-view={inView ? "" : null}>
              <Image
                className={styles.photo}
                src="/assets/pim.jpg"
                alt="photo of myself"
                width={400}
                height={500}
              />
            </div>
          </div>
          <div
            className={styles.secondImage}
            data-in-vieww={inView2 ? "" : null}
            ref={viewRef2}
          >
            <Image
              className={styles.photo}
              src="/assets/pim-ardenne.jpg"
              alt="At the reversed Ardenne trip"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
