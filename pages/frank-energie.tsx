import React from 'react'
import { css } from 'linaria'
import { rgba } from 'polished'
import { parse, theme } from '../config/theme'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Heading } from '../components/ui/typograhpy/Heading'
import { Text } from '../components/ui/typograhpy/Text'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Container } from '../components/ui/Container'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import { TbArrowUpRight } from 'react-icons/tb'
import { HeadSeo } from '../components/head'

const FrankEnergie: NextPage = () => {
  return (
    <>
      <HeadSeo />
      <div className={container}>
        <div className={parent}>
          <div className={overlay} />
          <Image
            className={image}
            src="/assets/projects/frank-energie-page.png"
            alt="image of frank-energie homepage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Container className={mainTextContainer}>
          <div className={textBlockPlacement}>
            <Heading variant="h3" mb="16">
              Frank energie
            </Heading>
            <Text variant="large">
              Frank energie is a Dutch company that specializes in energy, at
              Reversed we were responsible for the online side of the company. I
              worked on multiple issues on this project, developing new
              components and fixing bugs. While working on an issue I always
              test my work thourghly to make sure it is working as intended. A
              great example was that I was working on adding a new component in
              the sign-up flow. During this I noticed that the signup form was
              submitting also when other buttons then the submit buttons were
              being pressed. After identifying this bug I managed to locate the
              problem and offer a fix for it. This was a good example of what I
              think is one of my bigger strengths. I always try to keep the big
              picture in mind even while working on a small part of the bigger
              picture.
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
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noreferrer"
                      className={technologiesListItems}
                    >
                      NextJs
                    </a>
                  </Text>
                </li>
                <li className={listItemPadding}>
                  <Text variant="large" className={alignList}>
                    <RiRadioButtonFill color="#454A54" />
                    <a
                      href="https://www.npmjs.com/package/@linaria/react"
                      target="_blank"
                      rel="noreferrer"
                      className={technologiesListItems}
                    >
                      Linaria
                    </a>
                  </Text>
                </li>
                <li className={listItemPadding}>
                  <Text variant="large" className={alignList}>
                    <RiRadioButtonFill color="#454A54" />
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noreferrer"
                      className={technologiesListItems}
                    >
                      Typescript
                    </a>
                  </Text>
                </li>
                <li className={listItemPadding}>
                  <Text variant="large" className={alignList}>
                    <RiRadioButtonFill color="#454A54" />
                    <a
                      href="https://www.sanity.io/"
                      target="_blank"
                      rel="noreferrer"
                      className={technologiesListItems}
                    >
                      Sanity
                    </a>
                  </Text>
                </li>
              </ul>
            </div>
            <div className={bottomImage}>
              <Image
                src="/assets/click-on-tech.png"
                alt="Klik voor meer informatie"
                width="249px"
                height="85"
              />
            </div>
          </div>
          <div className={buttons}>
            <div className={internal}>
              <Link href="/#projects">
                <button type="button" className={buttonGlowOnHover}>
                  <IoIosArrowBack style={{ marginRight: '8px' }} />
                  Go back
                </button>
              </Link>
            </div>
            <div className={external}>
              <a
                type="button"
                target="_blank"
                href="https://www.frankenergie.nl/"
                rel="noreferrer"
                className={buttonGlowOnHover}
              >
                Visit project
                <TbArrowUpRight style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

const container = parse({ width: '100%', mb: '16' })

const parent = parse(
  {
    position: 'relative',
  },
  css`
    width: 100vw;
    height: 30vh;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 50vh;
    }
  `
)

const overlay = parse(
  {
    position: 'absolute',
    width: '100%',
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
)

const image = parse(
  {
    position: 'absolute',
  },
  css`
    z-index: 1;
  `
)

const mainTextContainer = parse(
  {
    mx: 'auto',
    pt: '32',
    mb: '16',
    display: 'grid',
    alignItems: 'center',
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
)

const technologiesContainer = parse(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  css`
    flex-direction: column;
  `
)

const padding = parse(
  {
    p: '16',
  },
  css`
    min-width: 16rem;
    width: fit-content;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.75rem;
    white-space: nowrap;
    justify-self: center;
    opacity: 0;
    transform: translateY(3rem);
    transition: all 1s cubic-bezier(0.08, 0.62, 0.25, 1);

    display: inline-block;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-delay: 1.3s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-3rem);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      animation: bounce-in-right 2s ease forwards;
      animation-delay: 0.2s;

      @keyframes bounce-in-right {
        0% {
          opacity: 0;
          transform: translateX(2000px);
        }
        60% {
          opacity: 1;
          transform: translateX(-30px);
        }
        80% {
          transform: translateX(10px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  `
)

const technologiesText = parse({
  pb: '8',
  textAlign: 'center',
})

const technologiesListItems = parse(
  {
    ml: '4',
    position: 'relative',
  },
  css`
    background-image: linear-gradient(
      to right,
      #6a47ff,
      #82a1f6 50%,
      #1f2937 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;

    &:before {
      content: '';
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
)

const listItemPadding = parse({
  py: '8',
})

const alignList = parse({
  display: 'flex',
  alignItems: 'center',
})

const list = parse(
  {
    display: 'grid',
  },
  css`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.25rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr;
    }
  `
)

const bottomImage = parse(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: '8',
  },
  css`
    margin-top: -1rem;
    margin-right: -1rem;
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      margin-right: -8rem;
    }
  `
)

const textBlockPlacement = parse({
  mb: 'auto',
})

const buttons = parse({
  display: 'flex',
  width: '100%',
})

const internal = css`
  width: 100%;
  margin-right: 1rem;
  @media screen and (hover: hover) and (pointer: fine) {
    svg {
      transition-property: transform;
      transition-duration: 0.25s;
    }

    &:hover {
      opacity: 0.9;
      svg {
        transform: translateX(-0.25rem);
      }
    }
  }
`

const external = css`
  width: 100%;
  @media screen and (hover: hover) and (pointer: fine) {
    svg {
      transition-property: transform;
      transition-duration: 0.25s;
    }

    &:hover {
      opacity: 0.9;
      svg {
        transform: translate(0.2rem, -0.2rem);
      }
    }
  }
`

const buttonGlowOnHover = css`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  color: ${theme.colors.white};
  background: ${theme.colors.darkText};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    height: 50px;
  }

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #0beef9,
      #82a1f6,
      #6a47ff,
      #0beef9,
      #82a1f6,
      #6a47ff,
      #0beef9,
      #82a1f6,
      #6a47ff
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(6px);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: ${theme.colors.darkText};
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.darkText};
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`

export default FrankEnergie
