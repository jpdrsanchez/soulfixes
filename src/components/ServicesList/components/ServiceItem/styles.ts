import styled, { css } from 'styled-components'
import { Variant } from 'templates/Base/components/Background/styles'

interface CardProps {
  variant?: Variant
}

const cardColors: Record<Variant, string> = {
  orange: 'var(--orangeThree)',
  white: 'var(--blackTwo)',
  purple: 'var(--purpleTwo)'
}

export const Card = styled.li<CardProps>`
  width: 100%;
  background: var(--white);
  padding: 5px;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);

  a {
    display: block;

    & > div {
      padding: 20px 15px 30px;
    }

    p {
      display: flex;
      align-items: center;
      color: var(--blackTwo);
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
      gap: 5px;

      span {
        font-size: 24px;
      }
    }
  }

  img {
    width: 100%;
    aspect-ratio: 357 / 256;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
  }

  ${({ variant = 'purple' }) => css`
    h3 {
      color: ${cardColors[variant]};
      font-weight: 600;
      font-size: 26px;
      line-height: 32px;
      letter-spacing: -0.02em;
      margin-bottom: 15px;
    }
  `}

  ul {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 15px;

    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      min-width: 103px;
      padding: 0 10px;
      border-radius: 60px;
      text-align: center;

      &:nth-child(1) {
        color: var(--greenTwo);
        background: var(--greenOne);
      }

      &:nth-child(2) {
        color: var(--purpleTwo);
        background: var(--purpleOne);
      }
    }
  }
`
