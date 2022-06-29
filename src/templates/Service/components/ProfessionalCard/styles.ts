import styled from 'styled-components'
import { Variant } from 'templates/Base/components/Background/styles'

interface VariantProps {
  variant: Variant
}

const variantStyles: Record<Variant, string> = {
  white: '',
  orange: 'linear-gradient(251.43deg, #FDE48C 3.15%, #F14784 97.02%)',
  purple: 'linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%)'
}

export const Card = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  background: var(--white);
  padding-top: 30px;
  padding-bottom: 40px;
  border-radius: 15px;

  & > * {
    &:nth-child(1) {
      padding-left: 30px;
      grid-column: 1 / 4;
      grid-row: 1;
    }

    &:nth-child(2) {
      padding-left: 70px;
      grid-column: 3 / 8;
      grid-row: 1;
    }

    &:nth-child(3) {
      padding-left: 30px;
      grid-column: 8 / 13;
      grid-row: 1;
      padding-right: 80px;
    }
  }
`

export const ProfessionalInfo = styled.div`
  position: relative;

  img {
    width: 138px;
    height: 138px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  button {
    position: absolute;
    right: 70px;
    transform: translateY(-50px);
  }

  ul {
    display: grid;
    gap: 16px;
  }

  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }
`

export const ProfessionalDescription = styled.div`
  position: relative;

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
    margin-bottom: 24px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--grayOne);
  }
`

export const NextButton = styled.button<VariantProps>`
  background: ${props => variantStyles[props.variant]};
  border-radius: 60px;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  padding: 10px;
  letter-spacing: -0.02em;
  color: var(--white);
  display: block;
  width: 100%;
  text-align: center;
  outline: 0;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`
