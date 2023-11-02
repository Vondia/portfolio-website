import { parse, theme } from '../../../config/theme'
import { css } from 'linaria'
import { rem } from 'polished'

export const baseText = css`
  line-height: 1.45;

  b,
  strong {
    font-weight: ${theme.fontWeights.medium};
  }

  ul li {
    list-style: disc;
    list-style-position: inside;
  }
`

export const special = parse(
  {
    fontWeight: 'semiBold',
  },
  css`
    font-size: ${rem(22)};
    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: ${rem(24)};
    }
  `
)

export const large = css`
  font-size: ${rem(18)};
  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: ${rem(16)};
  }
`

export const regular = css`
  font-size: ${rem(16)};
  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: ${rem(14)};
  }
`

export const small = css`
  font-size: ${rem(14)};
`

export const micro = css`
  font-size: ${rem(14)};
  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: ${rem(12)};
  }
`
