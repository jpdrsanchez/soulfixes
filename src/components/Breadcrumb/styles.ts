import styled, { css } from 'styled-components'
import { Variant } from 'templates/Base/components/Background/styles'

interface NavProps {
  variant?: Variant
  totalItens: number
}

interface Colors {
  color: string
  background: string
}

const variantStyles: Record<Variant, Colors> = {
  white: {
    color: 'var(--brown)',
    background: 'linear-gradient(251.43deg, #482020 3.15%, #A57373 97.02%)'
  },
  orange: {
    color: 'var(--orangeTwo)',
    background: 'linear-gradient(251.43deg, #FDE48C 3.15%, #F14784 97.02%)'
  },
  purple: {
    color: 'var(--purpleTwo)',
    background: 'linear-gradient(251.43deg, #C28CDE 3.15%, #884ACC 97.02%)'
  }
}

export const Nav = styled.nav<NavProps>`
  position: relative;

  ol {
    display: flex;

    @media (max-width: 575px) {
      display: none;
    }

    @media (min-width: 576px) and (max-width: 991px) {
      margin-left: 40px;
      justify-content: center;
    }
  }

  li {
    background: var(--white);
    border: 1px solid var(--grayTwo);
    border-radius: 60px;
    position: relative;

    &:first-child {
      padding: 4px 38px;
    }

    &:not(:first-child) {
      padding: 4px 30px 4px 60px;
    }

    &:last-child {
      border-color: var(--white);

      ${({ variant = 'white' }) => css`
        background: ${variantStyles[variant].background};
      `}

      a {
        color: var(--white);
        font-weight: 700;
      }
    }
  }

  a {
    color: var(--purpleTwo);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;

    ${({ variant = 'white' }) => css`
      color: ${variantStyles[variant].color};
    `}
  }
`
