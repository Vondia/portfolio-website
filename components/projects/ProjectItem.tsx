import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { css, cx } from 'linaria'
import { parse, theme } from '../../config/theme'
import { Text } from '../ui/typograhpy/Text'
import { Heading } from '../ui/typograhpy/Heading'
import { IoIosArrowForward } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import { AnimationVariant } from '../../pages/_app'
import { useVisitedHomePage } from '../VisitedHomePage'

type ProjectItemProps = {
  title: string
  subTitle: string
  projectUrl: string
  imageUrl: string
  animation: AnimationVariant
}

export const ProjectItem: FC<ProjectItemProps> = ({
  title,
  subTitle,
  projectUrl,
  imageUrl,
  animation,
}) => {
  const [viewRef, inView] = useInView({ triggerOnce: true })
  const visitedHomePageOnce = useVisitedHomePage()
  return (
    <>
      <Link href={projectUrl}>
        <a>
          <div
            className={parent}
            id={title.replace(/\s/g, '_') + '_project'}
            data-in-view={inView ? '' : null}
            data-on-first-render={inView && !visitedHomePageOnce ? '' : null}
            data-animation-variant={animation}
          >
            <div ref={viewRef}>
              <Image src={imageUrl} alt="/" width="400px" height="400px" />
            </div>
            <div className={text}>
              <Heading variant="h4" mb="8">
                {title}
              </Heading>
            </div>
            <div className={cx(text, textPB)}>
              <Text variant="regular" color="shade400">
                &quot;{subTitle}&quot;
              </Text>
            </div>
            <div className={buttonDiv}>
              <button className={button}>
                More information on this project
                <IoIosArrowForward style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

const parent = parse(
  { display: 'flex', width: '100%', mx: 'auto' },
  css`
    width: fit-content;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(3rem);
    transition: all 1s cubic-bezier(0.08, 0.62, 0.25, 1);
    overflow: visible;
    max-width: 300px;
    flex-direction: column;
    border: 1px solid ${theme.colors.borderShadow};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: ${theme.colors.white};

    @media screen and (hover: hover) and (pointer: fine) {
      svg {
        transition-property: transform;
        transition-duration: 0.25s;
      }

      &:hover {
        opacity: 0.9;
        svg {
          transform: translateX(0.25rem);
        }
      }
    }

    &[data-animation-variant='animate']&&[data-in-view] {
      display: inline-block;
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      &[data-on-first-render] {
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(3rem);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.small}) {
      max-width: 400px;
      margin-x: unset;
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      &[data-animation-variant='animate']&&[data-in-view] {
        display: inline-block;
        animation-name: fadeIn;
        animation-fill-mode: forwards;
        animation-duration: 0.5s;
        &[data-on-first-render] {
          &:nth-child(1) {
            animation-delay: 1.3s;
          }
        }
        &:nth-child(2) {
          animation-delay: 0s;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(3rem);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  `
)

const buttonDiv = parse(
  {
    display: 'flex',
    alignItems: 'center',
    py: '16',
    px: '20',
    justifyContent: 'center',
  },
  css`
    background: ${theme.colors.blue};
    margin-top: auto;
    cursor: pointer;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      padding-y: 1.5rem;
      padding-x: 2rem;
    }
  `
)

const button = parse(
  {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  css`
    font-weight: 600;
  `
)

const text = parse({
  textAlign: 'center',
})

const textPB = parse({
  pb: '24',
})
