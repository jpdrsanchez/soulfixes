import styled from 'styled-components'
import { opacityTransition } from 'styles/animations'
import { Variant } from 'templates/Base/components/Background/styles'

interface VariantProps {
  variant: Variant
}

const variantStyles: Record<Variant, string> = {
  white: '',
  orange: 'linear-gradient(251.43deg, #FDE48C 3.15%, #F14784 97.02%)',
  purple: 'linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%)'
}

export const FilterForm = styled.form`
  display: grid;
  position: relative;
  gap: 30px;
  align-items: center;

  @media (min-width: 36em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const FilterInput = styled.div`
  position: relative;

  & > span {
    color: var(--grayTwo);
    font-size: 24px;
    position: absolute;
    top: 50%;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      transform: translate(17px, -50%);
    }

    &:last-child {
      color: var(--blackTwo);
      transform: translate(-17px, -50%);
      right: 0;
    }
  }

  div {
    display: block;
    width: 100%;
    border-radius: 60px;
    border: 1px solid var(--grayTwo);
    padding: 7px 35px 6px 51px;
    outline: 0px;
    cursor: pointer;
    background: var(--white);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--grayTwo);

    &.active {
      color: var(--blackTwo);
    }
  }

  &:hover {
    nav {
      display: block;
      animation: ${opacityTransition} 0.3s forwards;
    }
  }
`

export const FilterButton = styled.button<VariantProps>`
  cursor: pointer;
  background: ${props => variantStyles[props.variant]};
  border-radius: 60px;
  display: block;
  padding: 10px;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: var(--white);
  border: none;
  outline: 0px;
  cursor: pointer;
`

export const DropdownList = styled.nav`
  position: absolute;
  background: var(--white);
  width: 100%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 12px 6px;
  display: none;
  opacity: 0;
  transform: translateY(-20px);

  label {
    cursor: pointer;
    display: block;
    color: var(--blackTwo);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`
