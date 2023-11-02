import React, { FC, useState } from 'react'
import { Text } from './ui/typograhpy/Text'
import { Heading } from './ui/typograhpy/Heading'
import Image from 'next/image'
import { Container } from './ui/Container'
import * as Switch from '@radix-ui/react-switch'
import * as styles from './About.styles'
import { useInView } from 'react-intersection-observer'
import { spacerBottomL } from '../lib/spacers'
import { cx } from 'linaria'

export const About: FC = () => {
  const [viewRef, inView] = useInView({ triggerOnce: true })
  const [viewRef2, inView2] = useInView({ triggerOnce: true })
  const [checked, setChecked] = useState(false)
  return (
    <Container id="about" className={cx(styles.container, spacerBottomL)}>
      <div className={styles.parent}>
        <div>
          <div className={styles.headerParent}>
            <div>
              <Heading variant="h3" className={styles.title}>
                Who I Am
              </Heading>
            </div>
            <div className={styles.bionicReadingDiv}>
              <Text variant="small" color="shade600">
                <a
                  href="https://www.howtogeek.com/807981/what-is-bionic-reading-and-how-do-you-use-it/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bionicLink}
                >
                  Bionic reading
                </a>{' '}
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
                again. And right away realised I hadn&apos;t felt that in a
                while. I had worked with so many hard- and software which always
                introduced something new. But at this point in my career I was
                mostly done learning. That was the main reason to make me think
                about my future. I quickly came to the conclusion that I was
                ready for a new challenge. Coding had always intrigued me,
                during my job as a Graphics/LSM operator right before a
                show/football game something would breakdown at which point I
                had to look at the code and see if I could fix the problem.
                Often the problem was in the coding, but fixing it was not that
                easy, but very interesting. So I decided to go out and learn how
                to do this magic! Looking for a place to learn how to code I
                came across Codaisseur. This seemed like the perfect fit for
                what I was looking for, a full time though bootcamp, where I
                would learn a ton in a (relative) short time (3 months) to
                jumpstart my new career.
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
                lot of companies who did a lot of different things. It was
                difficult for me to fully know what I wanted as it all seemed
                cool! The first job I took was as a consultant, the idea was to
                spend 50% of the time coding and 50% of the time interacting
                with customers. Which seemed like a great way to further explore
                where this journey would take me. After the first month though I
                had discovered the job focused a lot on an in-house converter
                that needed to be configured. Therefor there was a lot less
                coding than I had imagined and I realized it wasn&apos;t the
                right fit for me. In this period it hit me: the wrong decision
                had led to the right perspective. I learned two important things
                in that month; I knew what I didn&apos;t want and after careful
                consideration I knew what I DID want. I went out to search for a
                Digital Agency because I wanted to be a web/app developer. This
                is when I came across and joined Reversed Digital, a Digital
                Agency located in Utrecht. I&apos;ve worked there for well over
                a year and learned/improved a lot. After which I moved on to
                Incentro a bigger company to help me grow even more. I started
                working there November first 2022.
              </Text>
            </div>
          ) : (
            <div>
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                <strong className={styles.bionicReading}>S</strong>o I{' '}
                <strong className={styles.bionicReading}>qui</strong>t{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>jo</strong>b{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>th</strong>e{' '}
                <strong className={styles.bionicReading}>mid</strong>st{' '}
                <strong className={styles.bionicReading}>o</strong>f a{' '}
                <strong className={styles.bionicReading}>Pandem</strong>ic{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>sta</strong>rt{' '}
                <strong className={styles.bionicReading}>a</strong>n{' '}
                <strong className={styles.bionicReading}>inten</strong>se{' '}
                <strong className={styles.bionicReading}>ful</strong>l-
                <strong className={styles.bionicReading}>tim</strong>e{' '}
                <strong className={styles.bionicReading}>bootca</strong>mp{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>beco</strong>me a{' '}
                <strong className={styles.bionicReading}>develop</strong>er...{' '}
                <strong className={styles.bionicReading}>cra</strong>zy{' '}
                <strong className={styles.bionicReading}>rig</strong>ht?{' '}
                <strong className={styles.bionicReading}>Her</strong>e&apos;s{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>sto</strong>ry:
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                <strong className={styles.bionicReading}>Aft</strong>er{' '}
                <strong className={styles.bionicReading}>hav</strong>ing{' '}
                <strong className={styles.bionicReading}>wor</strong>ked{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>broadc</strong>asting{' '}
                <strong className={styles.bionicReading}>indu</strong>stry{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>bet</strong>ter{' '}
                <strong className={styles.bionicReading}>pa</strong>rt{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>dec</strong>ade (8{' '}
                <strong className={styles.bionicReading}>yea</strong>rs). I{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>d</strong>o{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>n</strong>ew{' '}
                <strong className={styles.bionicReading}>morn</strong>ing{' '}
                <strong className={styles.bionicReading}>sh</strong>ow,{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>whi</strong>le{' '}
                <strong className={styles.bionicReading}>doi</strong>ng{' '}
                <strong className={styles.bionicReading}>i</strong>t{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>notic</strong>ed{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>exci</strong>ted{' '}
                <strong className={styles.bionicReading}>lear</strong>ning{' '}
                <strong className={styles.bionicReading}>somet</strong>hing{' '}
                <strong className={styles.bionicReading}>n</strong>ew{' '}
                <strong className={styles.bionicReading}>aga</strong>in.{' '}
                <strong className={styles.bionicReading}>An</strong>d{' '}
                <strong className={styles.bionicReading}>rig</strong>ht{' '}
                <strong className={styles.bionicReading}>aw</strong>ay{' '}
                <strong className={styles.bionicReading}>real</strong>ised{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad
                <strong className={styles.bionicReading}>n</strong>&apos;t{' '}
                <strong className={styles.bionicReading}>fe</strong>lt{' '}
                <strong className={styles.bionicReading}>th</strong>at{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>whi</strong>le.{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>wor</strong>ked{' '}
                <strong className={styles.bionicReading}>wi</strong>th{' '}
                <strong className={styles.bionicReading}>s</strong>o{' '}
                <strong className={styles.bionicReading}>ma</strong>ny{' '}
                <strong className={styles.bionicReading}>har</strong>d-{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>soft</strong>ware{' '}
                <strong className={styles.bionicReading}>whi</strong>ch{' '}
                <strong className={styles.bionicReading}>alw</strong>ays{' '}
                <strong className={styles.bionicReading}>intro</strong>duced{' '}
                <strong className={styles.bionicReading}>somet</strong>hing{' '}
                <strong className={styles.bionicReading}>n</strong>ew.{' '}
                <strong className={styles.bionicReading}>B</strong>ut{' '}
                <strong className={styles.bionicReading}>a</strong>t{' '}
                <strong className={styles.bionicReading}>th</strong>is{' '}
                <strong className={styles.bionicReading}>poi</strong>nt{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>car</strong>eer{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>mos</strong>tly{' '}
                <strong className={styles.bionicReading}>do</strong>ne{' '}
                <strong className={styles.bionicReading}>lear</strong>ning.{' '}
                <strong className={styles.bionicReading}>Th</strong>at{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>ma</strong>in{' '}
                <strong className={styles.bionicReading}>rea</strong>son{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>ma</strong>ke{' '}
                <strong className={styles.bionicReading}>m</strong>e{' '}
                <strong className={styles.bionicReading}>thi</strong>nk{' '}
                <strong className={styles.bionicReading}>abo</strong>ut{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>fut</strong>ure.{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>quick</strong>ly{' '}
                <strong className={styles.bionicReading}>ca</strong>me{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>concl</strong>usion{' '}
                <strong className={styles.bionicReading}>th</strong>at{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>rea</strong>dy{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>n</strong>ew{' '}
                <strong className={styles.bionicReading}>chall</strong>enge.{' '}
                <strong className={styles.bionicReading}>Cod</strong>ing{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>alw</strong>ays{' '}
                <strong className={styles.bionicReading}>intri</strong>gued{' '}
                <strong className={styles.bionicReading}>m</strong>e,{' '}
                <strong className={styles.bionicReading}>dur</strong>ing{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>j</strong>ob{' '}
                <strong className={styles.bionicReading}>a</strong>s{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>Grap</strong>hics{' '}
                <strong className={styles.bionicReading}>/L</strong>SM{' '}
                <strong className={styles.bionicReading}>oper</strong>ator{' '}
                <strong className={styles.bionicReading}>rig</strong>ht{' '}
                <strong className={styles.bionicReading}>befo</strong>re{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>sh</strong>ow/
                <strong className={styles.bionicReading}>foot</strong>ball{' '}
                <strong className={styles.bionicReading}>ga</strong>me{' '}
                <strong className={styles.bionicReading}>somet</strong>hing{' '}
                <strong className={styles.bionicReading}>wou</strong>ld{' '}
                <strong className={styles.bionicReading}>break</strong>down{' '}
                <strong className={styles.bionicReading}>a</strong>t{' '}
                <strong className={styles.bionicReading}>whi</strong>ch{' '}
                <strong className={styles.bionicReading}>poi</strong>nt{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>lo</strong>ok{' '}
                <strong className={styles.bionicReading}>a</strong>t{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>co</strong>de{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>s</strong>ee{' '}
                <strong className={styles.bionicReading}>i</strong>f{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>cou</strong>ld{' '}
                <strong className={styles.bionicReading}>f</strong>ix{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>prob</strong>lem.{' '}
                <strong className={styles.bionicReading}>Oft</strong>en{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>prob</strong>lem{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>co</strong>de,{' '}
                <strong className={styles.bionicReading}>b</strong>ut{' '}
                <strong className={styles.bionicReading}>fix</strong>ing{' '}
                <strong className={styles.bionicReading}>i</strong>t{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>n</strong>ot{' '}
                <strong className={styles.bionicReading}>th</strong>at{' '}
                <strong className={styles.bionicReading}>ea</strong>sy,{' '}
                <strong className={styles.bionicReading}>b</strong>ut{' '}
                <strong className={styles.bionicReading}>ve</strong>ry{' '}
                <strong className={styles.bionicReading}>intere</strong>sting.{' '}
                <strong className={styles.bionicReading}>S</strong>o{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>deci</strong>ded{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>g</strong>o{' '}
                <strong className={styles.bionicReading}>o</strong>ut{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>lea</strong>rn{' '}
                <strong className={styles.bionicReading}>h</strong>ow{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>d</strong>o{' '}
                <strong className={styles.bionicReading}>th</strong>is{' '}
                <strong className={styles.bionicReading}>mag</strong>ic!{' '}
                <strong className={styles.bionicReading}>Look</strong>ing{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>pla</strong>ce{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>lea</strong>rn{' '}
                <strong className={styles.bionicReading}>h</strong>ow{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>co</strong>de{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>ca</strong>me{' '}
                <strong className={styles.bionicReading}>acr</strong>oss{' '}
                <strong className={styles.bionicReading}>Codai</strong>sseur.{' '}
                <strong className={styles.bionicReading}>Th</strong>is{' '}
                <strong className={styles.bionicReading}>see</strong>med{' '}
                <strong className={styles.bionicReading}>li</strong>ke{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>perf</strong>ect{' '}
                <strong className={styles.bionicReading}>f</strong>it{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>wh</strong>at{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>look</strong>ing{' '}
                <strong className={styles.bionicReading}>f</strong>or,{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>fu</strong>ll{' '}
                <strong className={styles.bionicReading}>ti</strong>me{' '}
                <strong className={styles.bionicReading}>tho</strong>ugh{' '}
                <strong className={styles.bionicReading}>boot</strong>camp,{' '}
                <strong className={styles.bionicReading}>Whe</strong>re{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>wou</strong>ld{' '}
                <strong className={styles.bionicReading}>lea</strong>rn{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>t</strong>on{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>a</strong> ({' '}
                <strong className={styles.bionicReading}>relat</strong>ive){' '}
                <strong className={styles.bionicReading}>sho</strong>rt{' '}
                <strong className={styles.bionicReading}>ti</strong>me (3{' '}
                <strong className={styles.bionicReading}>mon</strong>ths){' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>jumps</strong>tart{' '}
                <strong className={styles.bionicReading}>m</strong>y{' '}
                <strong className={styles.bionicReading}>n</strong>ew{' '}
                <strong className={styles.bionicReading}>car</strong>eer.
              </Text>
              <br />
              <Text
                variant="large"
                color="shade600"
                className={styles.paragraphs}
              >
                <strong className={styles.bionicReading}>Ov</strong>er{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>cou</strong>rse{' '}
                <strong className={styles.bionicReading}>o</strong>f 3{' '}
                <strong className={styles.bionicReading}>mon</strong>ths{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>lear</strong>ned{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot{' '}
                <strong className={styles.bionicReading}>abo</strong>ut{' '}
                <strong className={styles.bionicReading}>a</strong>ll{' '}
                <strong className={styles.bionicReading}>sor</strong>ts{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>marve</strong>lous{' '}
                <strong className={styles.bionicReading}>techno</strong>logies (
                <strong className={styles.bionicReading}>fr</strong>om{' '}
                <strong className={styles.bionicReading}>Rea</strong>ct{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>Red</strong>ux{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>Expr</strong>ess{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>Postg</strong>reSQL{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>muc</strong>h{' '}
                <strong className={styles.bionicReading}>mo</strong>re).{' '}
                <strong className={styles.bionicReading}>Aft</strong>er{' '}
                <strong className={styles.bionicReading}>gradu</strong>ating{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>tal</strong>ks{' '}
                <strong className={styles.bionicReading}>wi</strong>th{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>compa</strong>nies{' '}
                <strong className={styles.bionicReading}>w</strong>ho{' '}
                <strong className={styles.bionicReading}>d</strong>id{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>diffe</strong>rent{' '}
                <strong className={styles.bionicReading}>thi</strong>ngs.{' '}
                <strong className={styles.bionicReading}>I</strong>t{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>diffi</strong>cult{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>m</strong>e{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>ful</strong>ly{' '}
                <strong className={styles.bionicReading}>kn</strong>ow{' '}
                <strong className={styles.bionicReading}>wh</strong>at{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>wan</strong>ted{' '}
                <strong className={styles.bionicReading}>a</strong>s{' '}
                <strong className={styles.bionicReading}>i</strong>t{' '}
                <strong className={styles.bionicReading}>a</strong>ll{' '}
                <strong className={styles.bionicReading}>see</strong>med{' '}
                <strong className={styles.bionicReading}>co</strong>ol!{' '}
                <strong className={styles.bionicReading}>T</strong>he{' '}
                <strong className={styles.bionicReading}>fir</strong>st{' '}
                <strong className={styles.bionicReading}>j</strong>ob{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>to</strong>ok{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>a</strong>s{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>consu</strong>ltant,{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>id</strong>ea{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>spe</strong>nd{' '}
                <strong className={styles.bionicReading}>5</strong>0%{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>ti</strong>me{' '}
                <strong className={styles.bionicReading}>cod</strong>ing{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>5</strong>0%{' '}
                <strong className={styles.bionicReading}>o</strong>f{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>ti</strong>me{' '}
                <strong className={styles.bionicReading}>inter</strong>acting{' '}
                <strong className={styles.bionicReading}>wi</strong>th{' '}
                <strong className={styles.bionicReading}>custo</strong>mers.{' '}
                <strong className={styles.bionicReading}>Whi</strong>ch{' '}
                <strong className={styles.bionicReading}>see</strong>med{' '}
                <strong className={styles.bionicReading}>li</strong>ke{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>gre</strong>at{' '}
                <strong className={styles.bionicReading}>w</strong>ay{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>furt</strong>her{' '}
                <strong className={styles.bionicReading}>expl</strong>ore{' '}
                <strong className={styles.bionicReading}>whe</strong>re{' '}
                <strong className={styles.bionicReading}>th</strong>is{' '}
                <strong className={styles.bionicReading}>journ</strong>ey{' '}
                <strong className={styles.bionicReading}>wou</strong>ld{' '}
                <strong className={styles.bionicReading}>ta</strong>ke{' '}
                <strong className={styles.bionicReading}>m</strong>e.{' '}
                <strong className={styles.bionicReading}>Aft</strong>er{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>fir</strong>st{' '}
                <strong className={styles.bionicReading}>mon</strong>th{' '}
                <strong className={styles.bionicReading}>tho</strong>ugh{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>disco</strong>vered{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>j</strong>ob{' '}
                <strong className={styles.bionicReading}>focu</strong>sed{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot{' '}
                <strong className={styles.bionicReading}>o</strong>n{' '}
                <strong className={styles.bionicReading}>a</strong>n{' '}
                <strong className={styles.bionicReading}>i</strong>n-
                <strong className={styles.bionicReading}>hou</strong>se{' '}
                <strong className={styles.bionicReading}>conve</strong>rter{' '}
                <strong className={styles.bionicReading}>th</strong>at{' '}
                <strong className={styles.bionicReading}>nee</strong>ded{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>b</strong>e{' '}
                <strong className={styles.bionicReading}>confi</strong>gured.{' '}
                <strong className={styles.bionicReading}>Ther</strong>efor{' '}
                <strong className={styles.bionicReading}>the</strong>re{' '}
                <strong className={styles.bionicReading}>w</strong>as{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot{' '}
                <strong className={styles.bionicReading}>le</strong>ss{' '}
                <strong className={styles.bionicReading}>cod</strong>ing{' '}
                <strong className={styles.bionicReading}>th</strong>an{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>imag</strong>ined{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>real</strong>ized{' '}
                <strong className={styles.bionicReading}>i</strong>t{' '}
                <strong className={styles.bionicReading}>w</strong>as
                <strong className={styles.bionicReading}>n</strong>&apos;t{' '}
                <strong className={styles.bionicReading}>th</strong>e{' '}
                <strong className={styles.bionicReading}>rig</strong>ht{' '}
                <strong className={styles.bionicReading}>f</strong>it{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>m</strong>e.{' '}
                <strong className={styles.bionicReading}>I</strong>n{' '}
                <strong className={styles.bionicReading}>th</strong>is{' '}
                <strong className={styles.bionicReading}>per</strong>iod{' '}
                <strong className={styles.bionicReading}>i</strong>t{' '}
                <strong className={styles.bionicReading}>h</strong>it{' '}
                <strong className={styles.bionicReading}>m</strong>e:{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>wro</strong>ng{' '}
                <strong className={styles.bionicReading}>deci</strong>sion{' '}
                <strong className={styles.bionicReading}>h</strong>ad{' '}
                <strong className={styles.bionicReading}>l</strong>ed{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>t</strong>he{' '}
                <strong className={styles.bionicReading}>rig</strong>ht{' '}
                <strong className={styles.bionicReading}>perspe</strong>ctive.{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>lear</strong>ned two{' '}
                <strong className={styles.bionicReading}>impor</strong>tant{' '}
                <strong className={styles.bionicReading}>thi</strong>ngs{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>th</strong>at{' '}
                <strong className={styles.bionicReading}>mon</strong>th;{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>kn</strong>ew{' '}
                <strong className={styles.bionicReading}>wh</strong>at{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>d</strong>id
                <strong className={styles.bionicReading}>n</strong>&apos;t{' '}
                <strong className={styles.bionicReading}>wa</strong>nt{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>aft</strong>er{' '}
                <strong className={styles.bionicReading}>care</strong>ful{' '}
                <strong className={styles.bionicReading}>consider</strong>ation
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>kn</strong>ew{' '}
                <strong className={styles.bionicReading}>wh</strong>at{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>D</strong>ID{' '}
                <strong className={styles.bionicReading}>wa</strong>nt.{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>we</strong>nt{' '}
                <strong className={styles.bionicReading}>o</strong>ut{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>sea</strong>rch{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>Digi</strong>tal{' '}
                <strong className={styles.bionicReading}>Age</strong>ncy{' '}
                <strong className={styles.bionicReading}>beca</strong>use{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>wan</strong>ted{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>b</strong>e{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>w</strong>eb/
                <strong className={styles.bionicReading}>a</strong>pp{' '}
                <strong className={styles.bionicReading}>devel</strong>oper.{' '}
                <strong className={styles.bionicReading}>Th</strong>is{' '}
                <strong className={styles.bionicReading}>i</strong>s{' '}
                <strong className={styles.bionicReading}>wh</strong>en{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>ca</strong>me{' '}
                <strong className={styles.bionicReading}>acr</strong>oss{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>joi</strong>ned{' '}
                <strong className={styles.bionicReading}>Reve</strong>rsed{' '}
                <strong className={styles.bionicReading}>Digi</strong>tal,{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>Digit</strong>al{' '}
                <strong className={styles.bionicReading}>Age</strong>ncy{' '}
                <strong className={styles.bionicReading}>loca</strong>ted{' '}
                <strong className={styles.bionicReading}>i</strong>n{' '}
                <strong className={styles.bionicReading}>Utre</strong>cht.{' '}
                <strong className={styles.bionicReading}>I</strong>&apos;ve{' '}
                <strong className={styles.bionicReading}>wor</strong>ked{' '}
                <strong className={styles.bionicReading}>the</strong>re{' '}
                <strong className={styles.bionicReading}>f</strong>or{' '}
                <strong className={styles.bionicReading}>we</strong>ll{' '}
                <strong className={styles.bionicReading}>ov</strong>er{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>ye</strong>ar{' '}
                <strong className={styles.bionicReading}>a</strong>nd{' '}
                <strong className={styles.bionicReading}>I</strong>&apos;ve{' '}
                <strong className={styles.bionicReading}>lear</strong>ned/{' '}
                <strong className={styles.bionicReading}>impr</strong>oved{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>l</strong>ot.{' '}
                <strong className={styles.bionicReading}>Aft</strong>er{' '}
                <strong className={styles.bionicReading}>whi</strong>ch{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>mov</strong>ed{' '}
                <strong className={styles.bionicReading}>o</strong>n{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>Ince</strong>ntro{' '}
                <strong className={styles.bionicReading}>a</strong>{' '}
                <strong className={styles.bionicReading}>big</strong>ger{' '}
                <strong className={styles.bionicReading}>comp</strong>any{' '}
                <strong className={styles.bionicReading}>t</strong>o{' '}
                <strong className={styles.bionicReading}>he</strong>lp{' '}
                <strong className={styles.bionicReading}>m</strong>e{' '}
                <strong className={styles.bionicReading}>gr</strong>ow{' '}
                <strong className={styles.bionicReading}>ev</strong>en{' '}
                <strong className={styles.bionicReading}>mo</strong>re.{' '}
                <strong className={styles.bionicReading}>I</strong>{' '}
                <strong className={styles.bionicReading}>star</strong>ted{' '}
                <strong className={styles.bionicReading}>work</strong>ing{' '}
                <strong className={styles.bionicReading}>the</strong>re{' '}
                <strong className={styles.bionicReading}>Nove</strong>mber{' '}
                <strong className={styles.bionicReading}>fir</strong>st 2022.{' '}
              </Text>
            </div>
          )}
        </div>
        <div className={styles.images}>
          <div ref={viewRef}>
            <div className={styles.image} data-in-view={inView ? '' : null}>
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
            data-in-vieww={inView2 ? '' : null}
            ref={viewRef2}
          >
            <Image
              className={styles.photo}
              src="/assets/pim-reversed-ardenne.jpg"
              alt="At the reversed Ardenne trip"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
